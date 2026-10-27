import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      businessEmail,
      companyName,
      website,
      industry,
      businessSize,
      automationGoal,
      preferredContact,
      budgetRange,
      scheduledSlot,
      honeypot,
    } = body;

    // Spam protection honeypot
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: 'Submission received.', referenceId: 'SPM-BLOCKED' },
        { status: 200 }
      );
    }

    // Required field validation
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return NextResponse.json(
        { error: 'Full name is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail || !emailRegex.test(businessEmail.trim())) {
      return NextResponse.json(
        { error: 'A valid business email address is required.' },
        { status: 400 }
      );
    }

    if (!companyName || typeof companyName !== 'string' || !companyName.trim()) {
      return NextResponse.json(
        { error: 'Company name is required.' },
        { status: 400 }
      );
    }

    // Generate unique reference ID
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `RCH-${randomHex}`;

    const submissionPayload = {
      referenceId,
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      businessEmail: businessEmail.trim().toLowerCase(),
      companyName: companyName.trim(),
      website: website ? website.trim() : null,
      industry: industry || 'Not specified',
      businessSize: businessSize || 'Not specified',
      automationGoal: automationGoal ? automationGoal.trim() : 'Discovery Request',
      preferredContact: preferredContact || 'Email',
      budgetRange: budgetRange || 'Flexible',
      scheduledSlot: scheduledSlot || null,
      source: 'reacherautomation.com/web',
    };

    // Log the submission (Simulates CRM ingestion)
    console.log('[REACHER_AUTOMATION_LEAD_INGESTION]', JSON.stringify(submissionPayload, null, 2));

    // Optional CRM Webhook forward if environment variable is configured
    if (process.env.CRM_WEBHOOK_URL) {
      try {
        await fetch(process.env.CRM_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionPayload),
        });
      } catch (err) {
        console.error('Failed to dispatch webhook forward:', err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: 'Your inquiry has been received. Our team will review your workflow requirements.',
        receivedData: {
          name: submissionPayload.fullName,
          company: submissionPayload.companyName,
          referenceId,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
