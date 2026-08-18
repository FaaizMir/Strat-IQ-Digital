import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const firstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
  const lastName = typeof body?.lastName === "string" ? body.lastName.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const consent = Boolean(body?.consent);

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { success: false, error: "First name, last name, and email are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!consent) {
    return NextResponse.json(
      { success: false, error: "You must agree to be contacted before submitting." },
      { status: 400 }
    );
  }

  // Log the submission for now. This is where a real email/CRM integration
  // (e.g. Resend, SendGrid, HubSpot) would send a notification and/or store the lead.
  console.log("[contact form submission]", {
    firstName,
    lastName,
    email,
    message,
    consent,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
