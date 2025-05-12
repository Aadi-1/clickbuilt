// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("🛠️  /api/send-email handler invoked");
  console.log("REQUEST METHOD:", req.method);
  console.log("SENDGRID_API_KEY present:", !!process.env.SENDGRID_API_KEY);

  if (req.method !== "POST") {
    console.log("🚫  Method not allowed");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Build the message
  const msg: MailDataRequired = {
    to: "aadi.arun2020@gmail.com", // using the same verified sender
    from: "clickbuiltsolutions@gmail.com",
    subject: "Hello World from SendGrid",
    content: [
      {
        type: "text/plain",
        value: "and easy to do anywhere, even with Node.js",
      },
    ],
  };

  console.log("📨  Prepared message:", {
    to: msg.to,
    from: msg.from,
    subject: msg.subject,
  });

  try {
    const [response] = await sgMail.send(msg);
    console.log(
      "✅  Email sent successfully, statusCode:",
      response.statusCode
    );
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("❌  SendGrid error:", error);
    if (error.response && error.response.body) {
      console.error("❌  SendGrid response body:", error.response.body);
    }
    return res.status(500).json({ error: "Email send failed" });
  }
}
