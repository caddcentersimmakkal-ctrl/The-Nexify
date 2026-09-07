import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      position,
      experience,
      portfolio,
      message,
    } = body;

    // -----------------------------------------
    // VALIDATION
    // -----------------------------------------

    if (!name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your full name.",
        },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your email address.",
        },
        { status: 400 }
      );
    }

    if (!phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your phone number.",
        },
        { status: 400 }
      );
    }

    if (!position?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Job position is missing.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // EMAIL VALIDATION
    // -----------------------------------------

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // ENVIRONMENT VARIABLE CHECK
    // -----------------------------------------

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error("Missing SMTP environment variables.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // -----------------------------------------
    // CREATE SMTP TRANSPORTER
    // -----------------------------------------

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // -----------------------------------------
    // VERIFY SMTP
    // -----------------------------------------

    await transporter.verify();

    // -----------------------------------------
    // SEND APPLICATION EMAIL
    // -----------------------------------------

    await transporter.sendMail({
      from: `"Nexify IT Careers" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_EMAIL,

      // When you click Reply in Gmail,
      // it will reply directly to applicant.
      replyTo: email.trim(),

      subject: `New Job Application - ${position.trim()}`,

      // ---------------------------------------
      // PLAIN TEXT VERSION
      // ---------------------------------------

      text: `
NEXIFY IT
NEW JOB APPLICATION

========================================

APPLICANT INFORMATION

Name:
${name.trim()}

Email:
${email.trim()}

Phone:
${phone.trim()}

Position Applied For:
${position.trim()}

Experience:
${experience?.trim() || "Not provided"}

Portfolio / GitHub / LinkedIn:
${portfolio?.trim() || "Not provided"}

========================================

ADDITIONAL INFORMATION

${message?.trim() || "No additional information provided"}

========================================

Application received from:
Nexify IT Careers Website

Location:
Madurai, Tamil Nadu

========================================
      `,

      // ---------------------------------------
      // HTML VERSION
      // ---------------------------------------

      html: `
<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />

  <title>New Job Application - Nexify IT</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#f6f8fa;
  font-family:Arial,Helvetica,sans-serif;
">

  <div style="
    max-width:720px;
    margin:30px auto;
    background:#ffffff;
    border-radius:12px;
    overflow:hidden;
    border:1px solid #e5e7eb;
  ">

    <!-- HEADER -->

    <div style="
      background:#06264A;
      padding:30px;
      color:#ffffff;
    ">

      <div style="
        font-size:12px;
        font-weight:bold;
        letter-spacing:2px;
        color:#45B649;
        margin-bottom:8px;
      ">
        NEXIFY IT
      </div>

      <h1 style="
        margin:0;
        font-size:26px;
        line-height:1.3;
      ">
        New Job Application
      </h1>

      <p style="
        margin:10px 0 0;
        color:#d7e3ef;
        font-size:14px;
      ">
        A new application has been submitted through the Nexify IT careers page.
      </p>

    </div>

    <!-- CONTENT -->

    <div style="padding:30px;">

      <!-- POSITION -->

      <div style="
        background:#f0fdf4;
        border:1px solid #bbf7d0;
        border-left:4px solid #45B649;
        padding:16px;
        border-radius:6px;
        margin-bottom:28px;
      ">

        <div style="
          font-size:11px;
          font-weight:bold;
          text-transform:uppercase;
          letter-spacing:1px;
          color:#45B649;
          margin-bottom:5px;
        ">
          Position Applied For
        </div>

        <div style="
          font-size:18px;
          font-weight:bold;
          color:#06264A;
        ">
          ${escapeHtml(position.trim())}
        </div>

      </div>

      <!-- APPLICANT -->

      <h2 style="
        color:#06264A;
        font-size:18px;
        margin:0 0 15px;
      ">
        Applicant Information
      </h2>

      <table style="
        width:100%;
        border-collapse:collapse;
        font-size:14px;
      ">

        <tr>
          <td style="
            padding:11px 0;
            width:190px;
            color:#6b7280;
            font-weight:bold;
            border-bottom:1px solid #f0f0f0;
          ">
            Full Name
          </td>

          <td style="
            padding:11px 0;
            color:#111827;
            border-bottom:1px solid #f0f0f0;
          ">
            ${escapeHtml(name.trim())}
          </td>
        </tr>

        <tr>
          <td style="
            padding:11px 0;
            color:#6b7280;
            font-weight:bold;
            border-bottom:1px solid #f0f0f0;
          ">
            Email
          </td>

          <td style="
            padding:11px 0;
            border-bottom:1px solid #f0f0f0;
          ">
            <a
              href="mailto:${escapeHtml(email.trim())}"
              style="
                color:#45B649;
                text-decoration:none;
              "
            >
              ${escapeHtml(email.trim())}
            </a>
          </td>
        </tr>

        <tr>
          <td style="
            padding:11px 0;
            color:#6b7280;
            font-weight:bold;
            border-bottom:1px solid #f0f0f0;
          ">
            Phone
          </td>

          <td style="
            padding:11px 0;
            color:#111827;
            border-bottom:1px solid #f0f0f0;
          ">
            ${escapeHtml(phone.trim())}
          </td>
        </tr>

        <tr>
          <td style="
            padding:11px 0;
            color:#6b7280;
            font-weight:bold;
            border-bottom:1px solid #f0f0f0;
          ">
            Experience
          </td>

          <td style="
            padding:11px 0;
            color:#111827;
            border-bottom:1px solid #f0f0f0;
          ">
            ${escapeHtml(experience?.trim() || "Not provided")}
          </td>
        </tr>

        <tr>
          <td style="
            padding:11px 0;
            color:#6b7280;
            font-weight:bold;
          ">
            Portfolio / Profile
          </td>

          <td style="
            padding:11px 0;
            color:#111827;
          ">
            ${
              portfolio?.trim()
                ? `
                  <a
                    href="${escapeHtml(portfolio.trim())}"
                    target="_blank"
                    style="
                      color:#45B649;
                      text-decoration:none;
                      word-break:break-all;
                    "
                  >
                    ${escapeHtml(portfolio.trim())}
                  </a>
                `
                : "Not provided"
            }
          </td>
        </tr>

      </table>

      <!-- MESSAGE -->

      <h2 style="
        color:#06264A;
        font-size:18px;
        margin:30px 0 15px;
      ">
        Additional Information
      </h2>

      <div style="
        background:#f6f8fa;
        border-left:4px solid #45B649;
        padding:18px;
        border-radius:6px;
        color:#374151;
        font-size:14px;
        line-height:1.7;
        white-space:pre-wrap;
      ">
        ${escapeHtml(
          message?.trim() || "No additional information provided."
        )}
      </div>

    </div>

    <!-- FOOTER -->

    <div style="
      background:#f8fafc;
      border-top:1px solid #e5e7eb;
      padding:18px 30px;
      text-align:center;
      color:#9ca3af;
      font-size:11px;
    ">
      Nexify IT · Madurai, Tamil Nadu
      <br />
      Application received through the Nexify IT Careers website.
    </div>

  </div>

</body>
</html>
      `,
    });

    console.log(
      `Career application successfully sent for ${position} from ${email}`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Career application error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to submit your application right now. Please try again.",
      },
      { status: 500 }
    );
  }
}

// -----------------------------------------
// HTML ESCAPE FUNCTION
// -----------------------------------------

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}