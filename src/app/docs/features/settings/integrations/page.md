---
title: "Integrations"
description: "Connect Stripe, calendars, video conferencing, and webhooks."
---

The **Integrations** tab is where you connect external services to CoachBase. Integrations are organized into four sections: Payments, Calendar, Video Conferencing, and Webhooks.

![Integrations settings showing Stripe, Google Calendar, Outlook, Zoom, Google Meet, and Webhooks](/images/settings/03-integrations.png)

## Payments

### Stripe

Connect Stripe to accept credit card payments from your clients. When connected, invoices you send include an automatic payment link and clients can pay online.

- **Not connected** -- Click **Connect** to begin Stripe onboarding
- **Connected** -- Click **Manage** to open your Stripe dashboard settings

The connection status badge shows **Connected**, **Pending** (onboarding in progress), or **Not connected**.

## Calendar

Connect your calendar to prevent double bookings. CoachBase checks your connected calendars for conflicts when clients try to book sessions.

### Google Calendar

Click **Connect** to authorize CoachBase with your Google account. Once connected, click **Settings** to:

- Choose which calendars to check for conflicts
- Select which calendar new bookings are added to

### Microsoft Outlook

Click **Connect** to authorize CoachBase with your Microsoft account. Configuration is the same as Google Calendar.

{% callout type="note" %}
You can connect both Google Calendar and Outlook simultaneously. CoachBase checks all connected calendars for scheduling conflicts.
{% /callout %}

## Video Conferencing

### Zoom

Automatically create Zoom meeting links for your coaching sessions. When connected, CoachBase generates a unique Zoom link for each session.

### Google Meet

Google Meet links are available automatically when you connect Google Calendar. No separate connection is needed -- CoachBase creates Meet links through your Google Calendar integration.

## Webhooks

Send real-time event data to external tools like Zapier or Make. Click **Manage** to configure webhook endpoints that receive notifications when events occur in CoachBase (new clients, completed sessions, paid invoices, etc.).

## Frequently Asked Questions

**Do I need Stripe to send invoices?**
No. You can create and send invoices without Stripe, but clients won't have an online payment option. You would record payments manually using the "Mark Paid Offline" feature.

**Can I connect multiple Google accounts?**
Currently you can connect one Google Calendar account and one Outlook account per coach.

**What happens if my calendar connection shows an error?**
Click **Reconnect** to re-authorize the connection. Errors typically occur when permissions are revoked or tokens expire.
