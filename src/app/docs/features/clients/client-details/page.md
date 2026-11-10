---
title: "Client Details"
description: "View client information, stats, and activity from the detail page."
---

The client detail page gives you a complete view of your relationship with a client -- their contact info, financial summary, sessions, invoices, notes, goals, and more.

Click any client's name from the client list to open their detail page.

## Header card

The top section shows the client's avatar, name, current stage, email, and phone number. Click the copy icon next to the email or phone to copy it to your clipboard.

![Client detail page showing header card with contact info and stats](/images/clients/05-client-show-header.png)

The action buttons in the top right let you:

- **Message** the client
- **Edit** their details
- **Archive** (or unarchive) the client

## Stats row

Below the header card, four key metrics give you a snapshot of the relationship:

- **Lifetime Revenue** -- Total amount invoiced and paid across all invoices.
- **Outstanding** -- Current unpaid balance, highlighted in orange when greater than zero.
- **Next Session** -- Date of the next scheduled coaching session.
- **Last Activity** -- How recently this client had any activity (session, note, invoice, etc.).

## Tabs

The detail page has eight tabs. Your selected tab is remembered when you return.

### Overview

Client records open on the Overview, which gathers their top goals, upcoming sessions, and recent activity in one place.

### Activity

The Activity tab shows a chronological timeline of everything that has happened with this client -- sessions, notes, goals, invoices, and payments. Each entry shows the type, a description, and a status badge.

![Activity timeline showing sessions, notes, goals, and invoices](/images/clients/06-client-show-activity-tab.png)

### Sessions

View upcoming and past sessions. Click **Schedule Session** to create a new session directly from this page.

![Sessions tab showing upcoming and past coaching sessions](/images/clients/07-client-show-sessions-tab.png)

### Invoices

See all invoices for this client, with an outstanding balance alert at the top when money is owed. Click **Create Invoice** to generate a new invoice.

![Invoices tab showing outstanding balance and invoice list](/images/clients/08-client-show-invoices-tab.png)

### Messages

Send and receive messages with this client. Messages are delivered via email through Postmark.

### Notes

Session notes, observations, and action items. See [Notes, Goals & Tasks](/docs/features/clients/notes-goals-tasks) for details.

### Goals

Track coaching goals with target dates and progress. See [Notes, Goals & Tasks](/docs/features/clients/notes-goals-tasks) for details.

### Tasks

Manage action items and to-dos. See [Notes, Goals & Tasks](/docs/features/clients/notes-goals-tasks) for details.

### Files

Upload and share files with this client. Track which files have been shared and when.

## Time zone

Each client can have a time zone of their own. Click **Edit**, choose one from the **Time zone** field, and save. The default is **Not set**.

When a time zone is set, the client's portal and their session reminder emails show times in that zone. Clients can also change it themselves from the **Time zone** menu in the client portal.

If you leave it as **Not set**, CoachBase uses the time zone the client last booked in. If they have never booked, it uses yours.

## Additional session recipient

When two people share one client record, such as a couple you coach together, you can send session emails to both of them.

1. Click **Edit** on the client.
2. Under **Additional session recipient**, enter a **Recipient name** and **Recipient email**.
3. Check **Send session notifications to both**.
4. Save.

Both addresses then receive confirmations, reminders, reschedules, and cancellations, and both appear as guests on the calendar event. The header card shows the recipient with "Session notifications on" or "Session notifications off" beside their email.

{% callout type="warning" %}
Session emails include the links to join, reschedule, and cancel the session. Only add someone who should be able to do those things.
{% /callout %}

Billing, signed agreements, and portal access stay with the client's primary email. The additional recipient gets their own confirmation, without the signed agreement.

Unchecking **Send session notifications to both** keeps the recipient's details saved and stops their emails. They are removed from upcoming calendar events the next time your calendar syncs. Emails that were already sent cannot be recalled.

## Frequently Asked Questions

**How do I schedule a session from the client page?**
Go to the **Sessions** tab and click **Schedule Session**. A modal opens where you can set the date, time, duration, and session title.

**Can I create an invoice directly from a client's page?**
Yes. Go to the **Invoices** tab and click **Create Invoice** to open the invoice form pre-filled with this client's information.

**What shows up in the Activity timeline?**
The timeline includes coaching sessions (scheduled, completed, cancelled), notes, goals, tasks, and invoices (sent, paid). It provides a complete history of your engagement with the client.
