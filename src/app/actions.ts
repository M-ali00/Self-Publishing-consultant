"use server";

import nodemailer from "nodemailer";

export async function scheduleMeeting(formData: {
    name: string;
    email: string;
    date: string;
    time: string;
    project: string;
}) {
    const { name, email, date, time, project } = formData;
    const ADMIN_EMAILS = "muhammadalisoomr110@gmail.com, khalid8sharpk@gmail.com, aliahk.developer@gmail.com, selfpublishingconsultants@gmail.com";

    // In a real production app, you would use env variables for these
    // For now, setting up the transporter
    // Note: To use Gmail, you'd typically need an "App Password"
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER || "your-email@gmail.com",
            pass: process.env.EMAIL_PASS || "your-app-password",
        },
    });

    const mailOptions = {
        from: `"Self-Publishing Consultant" <${process.env.EMAIL_USER}>`,
        to: ADMIN_EMAILS,
        subject: `New Meeting Scheduled: ${name}`,
        text: `
            New Meeting Request:
            --------------------
            Name: ${name}
            Email: ${email}
            Date: ${date}
            Time: ${time}
            Project: ${project}
        `,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #064e43;">New Meeting Request</h2>
                <hr style="border: 0; border-top: 1px solid #e2e8f0;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Project:</strong> ${project}</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Email send error:", error);
        // We'll return success true for now to show the UI works, 
        // but log the error if credentials aren't set up yet.
        return { success: false, error: "Failed to send email. Please check server credentials." };
    }
}
export async function submitTicket(formData: {
    name: string;
    email: string;
    category: string;
    priority: string;
    subject: string;
    message: string;
}) {
    const { name, email, category, priority, subject, message } = formData;
    const ADMIN_EMAILS = "muhammadalisoomr110@gmail.com, khalid8sharpk@gmail.com, aliahk.developer@gmail.com, selfpublishingconsultants@gmail.com";

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER || "your-email@gmail.com",
            pass: process.env.EMAIL_PASS || "your-app-password",
        },
    });

    const mailOptions = {
        from: `"Support Protocol" <${process.env.EMAIL_USER}>`,
        to: ADMIN_EMAILS,
        subject: `[TICKET-LOG] ${priority}: ${subject}`,
        text: `
            Support Ticket Ingested:
            -----------------------
            Name: ${name}
            Email: ${email}
            Category: ${category}
            Priority: ${priority}
            Subject: ${subject}
            Issue: ${message}
        `,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #064e43;">Support Ticket Ingested</h2>
                <hr style="border: 0; border-top: 1px solid #e2e8f0;" />
                <p><strong>Priority:</strong> <span style="color: ${priority.includes('Critical') ? 'red' : '#064e43'}">${priority}</span></p>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <div style="background: #f8fafc; padding: 15px; border-radius: 4px; margin-top: 10px;">
                    <p><strong>Issue Detail:</strong></p>
                    <p>${message}</p>
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Support Ticket error:", error);
        return { success: false, error: "Failed to ingest ticket." };
    }
}

export async function submitContactForm(formData: {
    name: string;
    email: string;
    genre: string;
    message: string;
}) {
    const { name, email, genre, message } = formData;
    const ADMIN_EMAILS = "muhammadalisoomr110@gmail.com, khalid8sharpk@gmail.com, aliahk.developer@gmail.com, selfpublishingconsultants@gmail.com";

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER || "your-email@gmail.com",
            pass: process.env.EMAIL_PASS || "your-app-password",
        },
    });

    const mailOptions = {
        from: `"Direct Client Inquiry" <${process.env.EMAIL_USER}>`,
        to: ADMIN_EMAILS,
        replyTo: email,
        subject: `New Inquiry from ${name} [${genre}]`,
        text: `
            New Contact Inquiry:
            --------------------
            Name: ${name}
            Email: ${email}
            Genre: ${genre}
            Message: ${message}
        `,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #064e43; border-radius: 12px; max-width: 600px;">
                <h2 style="color: #064e43; margin-top: 0;">New Inquiry: Literary Empire Built</h2>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold;">Client Name</p>
                    <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: bold; color: #0f172a;">${name}</p>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold;">Email Address</p>
                    <p style="margin: 5px 0 0 0; font-size: 16px; color: #0f172a;">${email}</p>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold;">Manuscript Genre</p>
                    <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: bold; color: #064e43;">${genre}</p>
                </div>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #064e43;">
                    <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold; margin-bottom: 10px;">Message Detail</p>
                    <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6;">${message}</p>
                </div>
                
                <p style="margin-top: 30px; font-size: 12px; color: #94a3b8; font-style: italic;">
                    This inquiry was sent from the contact form on Self-Publishing Consultant website.
                </p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Contact Form error:", error);
        return { success: false, error: "Failed to send inquiry. Please try again later." };
    }
}
