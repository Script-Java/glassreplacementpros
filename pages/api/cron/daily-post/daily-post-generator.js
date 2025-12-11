import Groq from 'groq-sdk';
import { Octokit } from '@octokit/rest';
import slugify from 'slugify';

// CONFIGURATION
// In Pages Router, config is exported as an object.
// 'dynamic' is not needed as Pages API routes are always server-side/dynamic.
export const config = {
  maxDuration: 60,
};

export default async function handler(req, res) {
  // 0. ENSURE METHOD IS GET
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // 1. AUTH CHECK
  // Note: Headers in Pages Router are properties on the object, not a Map.
  const authHeader = req.headers.authorization;
  
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).send('Unauthorized');
  }

  try {
    // 2. GENERATE CONTENT
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const modelId = "llama-3.3-70b-versatile"; 

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

    // 3. PREPARE FILE PATH
    const date = new Date().toISOString().split('T')[0];
    const slug = slugify(blogPost.title, { lower: true, strict: true });
    
    // Saves to: src/app/content/2024-01-01-windshield-tips.md
    const filename = `src/content/${date}-${slug}.md`; 

    const fileContent = `---
title: "${blogPost.title}"
date: "${date}"
description: "${blogPost.summary}"
---

${blogPost.content}
`;

    // 4. SAVE TO GITHUB
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

    // 5. SEND SUCCESS RESPONSE
    return res.status(200).json({ 
      success: true, 
      message: `Created ${filename}`, 
      url: `https://github.com/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/blob/main/${filename}` 
    });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: error.message });
  }
}