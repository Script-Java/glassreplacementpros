import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const createMapLink = (query) => {
    if (!query) return "#";
    const encodedQuery = encodeURIComponent(query);
    return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  };

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const form = req.body;

  // Basic validation
  if (!form.firstName || !form.lastName || !form.email || !form.serviceType || !form.description) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const host = process.env.SMTP_HOST || "smtp.zoho.com"; // change to smtp.zoho.eu/.in if account is in EU/IN
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const secure = port === 465; // SSL for 465, STARTTLS for 587

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER, // must be a real Zoho mailbox (not just alias)
        pass: process.env.SMTP_PASS, // use Zoho App Password if 2FA is enabled
      },
      authMethod: "LOGIN",
      requireTLS: port === 587,
    });

    const mailOptions = {
      from: `"Glass Replacement Pros" <${process.env.SMTP_USER}>`, // must match authenticated user or approved alias
      to: process.env.SMTP_USER, // send to your Zoho inbox
      replyTo: `"${form.firstName} ${form.lastName}" <${form.email}>`,
      subject: `New Quote Request from ${form.firstName} ${form.lastName}`,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; border: 4px solid #ccc; border-radius: 10px; line-height: 1.6; color: #000;">
  <h2 style="margin-bottom: 20px;">New Request From</h2>
  <strong style="font-size: 20px; color: #d62828; display: block; margin-bottom: 20px; margin-top: 0;">Glass Replacement Pros</strong>

  <p><strong>Glass Service Needed:</strong><br/>${form.serviceType || ""}</p><hr/>
  <p><strong>Customer Name:</strong><br/>${form.firstName || ""} ${form.lastName || ""}</p><hr/>
  <p><strong>Company Name:</strong><br/>${form.companyName || "N/A"}</p><hr/>
  <p><strong>Email:</strong><br/><a href="mailto:${form.email}">${form.email}</a></p><hr/>
  <p><strong>Primary Phone:</strong><br/><a href="tel:${form.primaryPhone}">${form.primaryPhone}</a></p><hr/>
  <p><strong>Secondary Phone:</strong><br/><a href="tel:${form.secondaryPhone || ""}">${form.secondaryPhone || "N/A"}</a></p><hr/>
  <p><strong>Street Address:</strong><br/><a href="${createMapLink(form.address)}" target="_blank">${form.address || "N/A"}</a></p><hr/>
  <p><strong>City:</strong><br/><a href="${createMapLink(form.city)}" target="_blank">${form.city || ""}</a></p><hr/>
  <p><strong>Zip Code:</strong><br/><a href="${createMapLink(form.zip)}" target="_blank">${form.zip || ""}</a></p><hr/>
  <p><strong>Preferred Method of Contact:</strong><br/>${form.preferredMethod || ""}</p><hr/>
  <p><strong>Details of glass repair/replacement needs:</strong><br/>${form.description || ""}</p><hr/>
  <p><strong>Car Year:</strong><br/>${form.carYear || "N/A"}</p><hr/>
  <p><strong>Car Make:</strong><br/>${form.carMake || "N/A"}</p><hr/>
  <p><strong>Car Model:</strong><br/>${form.carModel || "N/A"}</p><hr/>
  <p><strong>Car Body Style:</strong><br/>${form.carBody || "N/A"}</p><hr/>
  <p><strong>VIN:</strong><br/>${form.vin || "N/A"}</p>
</div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully! Thank you, we'll be in touch soon!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send message." });
  }
}
