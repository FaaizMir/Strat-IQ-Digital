import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

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

  const { data, error } = await supabase
    .from("contact_submissions")
    .insert([
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message,
        consent: consent,
      },
    ]);

  if (error) {
    console.error("[supabase error]", error);
    return NextResponse.json(
      { success: false, error: "Failed to store submission.", details: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
