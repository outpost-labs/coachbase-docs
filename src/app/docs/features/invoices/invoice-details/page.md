---
title: "Invoice Details"
description: "View invoice information, status, payment details, and available actions."
---

The invoice detail page shows all information about a single invoice, including its current status, client details, amount, and payment history.

## Invoice layout

Each invoice detail page displays:

- **Invoice number** and **status badge** (Draft, Sent, Paid, Overdue, Cancelled, Void, or Refunded)
- **Bill To** section with client name and email
- **Due date** and **paid date** (when applicable)
- **Package name** if the invoice is linked to a coaching package
- **Total Amount** with payment breakdown when applicable
- **Payment method** details for paid invoices
- **Notes** you included on the invoice

### Draft invoice

A draft invoice has not been sent to the client yet. You can send, edit, or delete it.

![Draft invoice detail page showing Send Invoice button, PDF options, edit and delete icons](/images/invoices/04-invoice-detail-draft.png)

### Sent invoice

Once sent, the invoice shows payment action buttons. If Stripe is connected, a **Collect Deposit** button also appears.

![Sent invoice with Mark Paid Offline, Collect Deposit, and PDF buttons](/images/invoices/05-invoice-detail-sent.png)

### Paid invoice

Paid invoices display the payment date and payment method. If paid via Stripe, card details (brand, last 4 digits) or bank information are shown.

![Paid invoice showing payment date, payment method, and total amount](/images/invoices/06-invoice-detail-paid.png)

## PDF options

Click the **PDF** dropdown on any invoice to:

- **Preview** -- Opens the invoice PDF in a new browser tab
- **Download** -- Downloads the PDF file to your computer

![PDF dropdown showing Preview and Download options](/images/invoices/10-pdf-dropdown.png)

The PDF includes your business logo (if uploaded in settings), invoice number, client details, amount, and any notes.

## Frequently Asked Questions

**Can my client see this same invoice page?**
No. Clients receive the invoice by email with a payment link (if Stripe is connected). They do not have access to your CoachBase dashboard.

**What does the "Recurring Invoice" link mean?**
If an invoice was generated from a recurring schedule, a link to the parent recurring invoice appears in the breadcrumb area. Click it to view the recurring invoice settings.

**How do I know which payment method was used?**
The Payment section at the bottom of a paid invoice shows the method -- Stripe (with card details), Cash, Check, Bank Transfer, or Other.
