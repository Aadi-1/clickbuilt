// src/app/api/contact/route.tsx
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// make sure your SENDGRID_API_KEY is set in .env
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const firstName = form.get("firstName") as string;
    const email = form.get("email") as string;
    const businessName = form.get("businessName") as string;
    const businessType = form.get("businessType") as string;
    const phone = form.get("phone") as string;
    const budget = form.get("budget") as string;
    const revenue = form.get("revenue") as string;
    const message = form.get("message") as string;

    // build a simple text/plain body
    const bodyText = [
      `Name: ${firstName}`,
      `Email: ${email}`,
      `Business: ${businessName}`,
      `Type: ${businessType}`,
      `Phone: ${phone}`,
      `Budget: ${budget}`,
      `Monthly Revenue: ${revenue}`,
      `Message: ${message || "N/A"}`,
    ].join("\n");

    // 1) email to you
    const ownerMsg = {
      to: "clickbuiltsolutions@gmail.com",
      from: "aadi@clickbuilt.net",
      subject: `📬 New Inquiry from ${firstName}`,
      text: bodyText,
      html: `<p>${bodyText.replace(/\n/g, "<br/>")}</p>`,
    };

    // 2) acknowledgement back to user
    const ackMsg = {
      to: email,
      from: "Aadi@clickbuilt.net",
      subject: "Thanks for your inquiry!",
      text: `Hi ${firstName},\n\nThanks for reaching out to ClickBuilt. We’ve received your request and will be in touch within 24–48 hours.\n\n– The ClickBuilt Team`,
      html: `
        <p>Hi ${firstName},</p>
        <p>Thanks for reaching out to <strong>ClickBuilt</strong>. We’ve received your request and will be in touch within <strong>24–48 hours</strong>.</p>
        <p>– The ClickBuilt Team</p>
      `,
    };

    // send both
    await Promise.all([sgMail.send(ownerMsg), sgMail.send(ackMsg)]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SendGrid Error:", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
