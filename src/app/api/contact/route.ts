import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      service,
      budget,
      details,
    } = body;

    // Server-side validation
    if (!name || !email || !details) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and project details are required.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Email sent to Nexify
    await transporter.sendMail({
      from: `"Nexify IT Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Project Inquiry - ${service || "Nexify IT"}`,

      text: `
New Project Inquiry - Nexify IT

----------------------------------------
CONTACT INFORMATION
----------------------------------------

Name:
${name}

Company / Organization:
${company || "Not provided"}

Email:
${email}

Phone:
${phone || "Not provided"}

----------------------------------------
PROJECT INFORMATION
----------------------------------------

Service Required:
${service || "Not specified"}

Estimated Budget:
${budget || "Not specified"}

Project Details:
${details}

----------------------------------------
Submitted from:
Nexify IT Website
      `,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          background: #f6f8fa;
          padding: 30px;
        ">

          <div style="
            background: #06264A;
            padding: 24px;
            border-radius: 10px 10px 0 0;
            color: white;
          ">
            <h1 style="
              margin: 0;
              font-size: 24px;
            ">
              New Project Inquiry
            </h1>

            <p style="
              margin: 8px 0 0;
              color: #d8e5f2;
              font-size: 14px;
            ">
              New enquiry received from the Nexify IT website
            </p>
          </div>

          <div style="
            background: white;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
          ">

            <h2 style="
              color: #06264A;
              font-size: 18px;
              margin-top: 0;
            ">
              Contact Information
            </h2>

            <table style="
              width: 100%;
              border-collapse: collapse;
              font-size: 14px;
            ">

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  color: #4b5563;
                  width: 180px;
                ">
                  Name
                </td>
                <td style="padding: 10px 0; color: #111827;">
                  ${escapeHtml(name)}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  color: #4b5563;
                ">
                  Company
                </td>
                <td style="padding: 10px 0; color: #111827;">
                  ${escapeHtml(company || "Not provided")}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  color: #4b5563;
                ">
                  Email
                </td>
                <td style="padding: 10px 0;">
                  <a
                    href="mailto:${escapeHtml(email)}"
                    style="color: #45B649;"
                  >
                    ${escapeHtml(email)}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  color: #4b5563;
                ">
                  Phone
                </td>
                <td style="padding: 10px 0; color: #111827;">
                  ${escapeHtml(phone || "Not provided")}
                </td>
              </tr>

            </table>

            <hr style="
              border: none;
              border-top: 1px solid #e5e7eb;
              margin: 25px 0;
            " />

            <h2 style="
              color: #06264A;
              font-size: 18px;
            ">
              Project Information
            </h2>

            <table style="
              width: 100%;
              border-collapse: collapse;
              font-size: 14px;
            ">

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  color: #4b5563;
                  width: 180px;
                ">
                  Service
                </td>
                <td style="padding: 10px 0; color: #111827;">
                  ${escapeHtml(service || "Not specified")}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  color: #4b5563;
                ">
                  Estimated Budget
                </td>
                <td style="padding: 10px 0; color: #111827;">
                  ${escapeHtml(budget || "Not specified")}
                </td>
              </tr>

            </table>

            <div style="
              margin-top: 25px;
              background: #f6f8fa;
              border-left: 4px solid #45B649;
              padding: 18px;
              border-radius: 4px;
            ">

              <h3 style="
                margin: 0 0 10px;
                color: #06264A;
                font-size: 15px;
              ">
                Project Details
              </h3>

              <p style="
                margin: 0;
                color: #374151;
                font-size: 14px;
                line-height: 1.7;
                white-space: pre-wrap;
              ">
                ${escapeHtml(details)}
              </p>

            </div>

          </div>

          <div style="
            text-align: center;
            padding: 18px;
            color: #9ca3af;
            font-size: 11px;
          ">
            Nexify IT · Madurai, Tamil Nadu
          </div>

        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your inquiry right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * Escape user input before inserting it into HTML email.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}