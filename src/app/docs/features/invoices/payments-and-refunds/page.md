---
title: "Payments & Refunds"
description: "Record offline payments, collect deposits via Stripe, and issue refunds."
---

CoachBase supports both online payments through Stripe and offline payment recording. This page covers all payment-related actions.

## Recording an offline payment

For invoices with a **Sent** or **Overdue** status, click **Mark Paid Offline** to record a payment received outside of Stripe.

![Mark Paid Offline dropdown with payment method, date, and note fields](/images/invoices/07-mark-paid-dropdown.png)

1. Select a **Payment Method** -- Cash, Check, Bank Transfer, or Other
2. Confirm the **Date Received** (defaults to today)
3. Add an optional **Note** about the payment
4. Click **Confirm payment**

The invoice status changes to Paid and the payment method is recorded on the invoice detail page.

## Online payments with Stripe

When you have Stripe connected, invoices sent to clients include an automatic payment link. Clients can pay directly from the email using credit card, debit card, or ACH bank transfer.

After a successful Stripe payment:
- The invoice status updates to **Paid** automatically
- Payment details (card brand, last 4 digits, or bank name) appear on the invoice
- A payment transaction record is created

### Collecting a deposit

For **Sent** invoices, click **Collect Deposit** to create a payment link for a partial amount. Enter the deposit amount and click **Create deposit link**. This is useful when you want to collect a portion of the invoice upfront.

{% callout type="note" %}
The Collect Deposit button only appears when Stripe is connected. Connect Stripe from the Payments page (accessible via the gear menu on the invoices list).
{% /callout %}

## Issuing a refund

For **Paid** invoices that were processed through Stripe, an **Issue Refund** button appears on the invoice detail page.

1. Click **Issue Refund**
2. Enter the refund amount (defaults to the full payment amount)
3. Optionally check **Notify client by email** to send a refund confirmation
4. Click **Confirm Refund**

You can issue a full refund or a partial refund by adjusting the amount. After a refund:
- The invoice shows the original amount collected, refund amount, and net retained
- A full refund changes the status to **Refunded**
- A partial refund updates the payment breakdown while keeping the Paid status

{% callout type="warning" %}
Refunds are processed through Stripe and cannot be reversed once issued.
{% /callout %}

## Frequently Asked Questions

**Can I refund an invoice that was paid offline?**
No. The refund feature is only available for invoices paid through Stripe. For offline payments, you would handle the refund outside of CoachBase.

**How long does a Stripe refund take?**
Refunds typically appear on the client's statement within 5-10 business days, depending on their bank.

**Can I collect multiple partial payments on one invoice?**
Yes. Use the Collect Deposit feature to create payment links for partial amounts. The invoice tracks the total amount paid and remaining balance.
