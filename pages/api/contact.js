import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = req.body;

    // Basic validation
    if (!form.firstName || !form.lastName || !form.email || !form.serviceType || !form.description) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${form.firstName} ${form.lastName}" <info@glassreplacementpros.com>`,
        to: process.env.SMTP_USER,
        replyTo: form.email,
        subject: `New Quote Request from ${form.firstName} ${form.lastName}`,
            html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 4px solid #ccc; border-radius: 10px; line-height: 1.6; color: #000;">
<h2 style="margin-bottom: 20px;">New Request From</h2>
<strong style="font-size: 20px; color: #d62828; display: block; margin-bottom: 20px; margin-top: 0;">Glass Replacement Pros</strong>

      <p><strong>Glass Service Needed:</strong><br/>
      <a href="#">${form.serviceType || ''}</a></p>
      <hr/>

      <p><strong>Customer Name:</strong><br/>
      <a href="#">${form.firstName || ''} ${form.lastName || ''}</a></p>
      <hr/>

      <p><strong>Company Name:</strong><br/>
      ${form.companyName || 'N/A'}</p>
      <hr/>

      <p><strong>Email:</strong><br/>
      <a href="mailto:${form.email}">${form.email}</a></p>
      <hr/>

      <p><strong>Primary Phone:</strong><br/>
      <a href="tel:${form.primaryPhone}">${form.primaryPhone}</a></p>
      <hr/>

      <p><strong>Secondary Phone:</strong><br/>
      <a href="tel:${form.secondaryPhone || ''}">${form.secondaryPhone || 'N/A'}</a></p>
      <hr/>

      <p><strong>Street Address:</strong><br/>
      ${form.address || 'N/A'}</p>
      <hr/>

      <p><strong>City:</strong><br/>
      <a href="#">${form.city || ''}</a></p>
      <hr/>

      <p><strong>Zip Code:</strong><br/>
      <a href="#">${form.zip || ''}</a></p>
      <hr/>

      <p><strong>Preferred Method of Contact:</strong><br/>
      <a href="#">${form.preferredMethod || ''}</a></p>
      <hr/>

      <p><strong>Details of glass repair/replacement needs:</strong><br/>
      <a href="#">${form.description || ''}</a></p>
      <hr/>

      <p><strong>Car Year (if applicable):</strong><br/>
      <a href="#">${form.carYear || 'N/A'}</a></p>
      <hr/>

      <p><strong>Car Make (if applicable):</strong><br/>
      <a href="#">${form.carMake || 'N/A'}</a></p>
      <hr/>

      <p><strong>Car Model (if applicable):</strong><br/>
      <a href="#">${form.carModel || 'N/A'}</a></p>
      <hr/>

      <p><strong>Car Body Style (if applicable):</strong><br/>
      <a href="#">${form.carBody || 'N/A'}</a></p>
      <hr/>

      <p><strong>VIN:</strong><br/>
      <a href="#">${form.vin || 'N/A'}</a></p>
    </div>
  `,      };
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
