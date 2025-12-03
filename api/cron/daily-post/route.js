import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { Octokit } from '@octokit/rest';
import slugify from 'slugify';

export const maxDuration = 60; 
export const dynamic = 'force-dynamic';

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // 1. GENERATE CONTENT
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const modelId = "llama-3.3-70b-versatile"; 

    // UPDATED PROMPT:
    // This instructs the AI to first pick a topic in your niche, then write about it.
    const prompt = `
      You are an expert glazier and professional blogger for a glass replacement company called Glass Replacement Pros.
      
      Task:
      1. First, select a specific, engaging topic related to "Auto Glass" OR "Residential Glass" 
         (e.g., windshield safety, chip repair, double-pane benefits, energy efficiency, shower doors, storm windows).
      2. Write a helpful, SEO-friendly blog post about that chosen topic.
      
      Requirements:
      - Output JSON format strictly.
      - Fields: "title" (string), "content" (string - markdown format), "summary" (string).
      - Tone: Informative, professional, and trustworthy.
      - Content: Use standard Markdown (headers, bullet points).
    `;

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: modelId, 
      response_format: { type: "json_object" }, 
    });

    const text = completion.choices[0]?.message?.content || "{}";
    const blogPost = JSON.parse(text);

    // 2. PREPARE FILE PATH
    const date = new Date().toISOString().split('T')[0];
    const slug = slugify(blogPost.title, { lower: true, strict: true });
    
    // Saves to: src/app/content/2024-01-01-windshield-tips.md
    const filename = `src/app/content/${date}-${slug}.md`; 

    const fileContent = `---
title: "${blogPost.title}"
date: "${date}"
description: "${blogPost.summary}"
---

${blogPost.content}
`;

    // 3. SAVE TO GITHUB
    const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
    
    await octokit.repos.createOrUpdateFileContents({
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
      path: filename,
      message: `feat(blog): New post - ${blogPost.title}`,
      content: Buffer.from(fileContent).toString('base64'),
      committer: {
        name: 'Glass Expert Bot',
        email: 'bot@yourdomain.com',
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: `Created ${filename}`, 
      url: `https://github.com/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/blob/main/${filename}` 
    });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}