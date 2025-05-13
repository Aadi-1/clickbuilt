// Tell Next.js to run this as a Node.js function (so process.env is available)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    console.log("📬 Contact form data:", Object.fromEntries(form.entries()));

    const firstName = form.get("firstName") as string;
    const lastName = form.get("lastName") as string;
    const email = form.get("email") as string;
    const businessName = form.get("businessName") as string;
    const businessType = form.get("businessType") as string;
    const phone = form.get("phone") as string;
    const budget = form.get("budget") as string;
    const revenue = form.get("revenue") as string;
    const message = form.get("message") as string;

    const text = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Business Name: ${businessName}`,
      `Type: ${businessType}`,
      `Phone: ${phone}`,
      `Budget: ${budget}`,
      `Monthly Revenue: ${revenue}`,
      `Message: ${message || "N/A"}`,
    ].join("\n");

    await sgMail.send({
      to: "aadi.arun2020@gmail.com",
      from: "clickbuiltsolutions@gmail.com",
      subject: `New Contact: ${firstName} ${lastName}`,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SendGrid Error:", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
