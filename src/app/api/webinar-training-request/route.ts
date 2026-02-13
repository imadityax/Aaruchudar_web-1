import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    const required = ["fullName", "email", "phone", "organization", "requestType", "topic", "audienceType", "mode", "duration"];
    const missing = required.filter((k) => !data?.[k]);
    if (missing.length) {
      return NextResponse.json({ ok: false, error: `Missing fields: ${missing.join(", ")}` }, { status: 400 });
    }

    // TODO: Persist to database or send an email/notification
    console.log("Webinar/Training request received", data);

    return NextResponse.json({ ok: true, message: "Your request has been successfully submitted. Our team has received your details." });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Unexpected error" }, { status: 500 });
  }
}