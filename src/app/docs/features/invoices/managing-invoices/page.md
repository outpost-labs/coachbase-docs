---
title: "Managing Invoices"
description: "Send, resend, edit, void, and delete invoices."
---

CoachBase provides different management actions depending on the invoice's current status. This page covers the lifecycle actions available for each state.

## Sending a draft invoice

From a draft invoice's detail page, click **Send Invoice**. This:

1. Changes the status from Draft to Sent
2. Emails the invoice to the client
3. Creates a Stripe payment link (if Stripe is connected)

## Resending an invoice

For invoices with a **Sent** or **Overdue** status, click the paper plane icon in the action bar to resend the invoice email to the client.

## Editing an invoice

Click the pencil icon on any invoice that has not been paid, voided, cancelled, or refunded. The edit form opens in a modal where you can change:

- Client
- Package
- Amount
- Due date
- Notes

{% callout type="warning" %}You cannot edit an invoice after it has been paid, voided, cancelled, or refunded. Create a new invoice instead.{% /callout %}

## Voiding an invoice

For **Sent** invoices, click the void icon (circle with a line) in the action bar. A confirmation dialog asks you to confirm. Voiding an invoice:

- Changes the status to Void
- Invalidates any outstanding payment links
- The invoice remains in your records for bookkeeping

## Deleting an invoice

Only **Draft** invoices can be deleted. Click the trash icon and confirm the deletion. This permanently removes the invoice.

{% callout type="warning" %}Deleting an invoice is permanent and cannot be undone. Consider voiding sent invoices instead of deleting them to maintain a complete audit trail.{% /callout %}

## Status lifecycle

An invoice moves through these statuses:

1. **Draft** -- Created but not sent. Can be edited, sent, or deleted.
2. **Sent** -- Delivered to the client. Can be marked paid, voided, resent, or edited.
3. **Overdue** -- Sent and past its due date. Same actions as Sent.
4. **Paid** -- Payment received. Can be refunded (if paid via Stripe).
5. **Void** -- Cancelled after sending. No further actions.
6. **Cancelled** -- Invoice was cancelled.
7. **Refunded** -- Payment was returned to the client.

## Frequently Asked Questions

**Can I change a voided invoice back to sent?**
No. Voiding is permanent. If you need to bill the client again, create a new invoice.

**What happens to the payment link when I void an invoice?**
The payment link becomes invalid. If the client tries to use it, they will see that the invoice is no longer payable.

**Can I edit the invoice amount after sending?**
Yes, as long as the invoice has not been paid, voided, or cancelled. Click the edit icon to update the amount.
