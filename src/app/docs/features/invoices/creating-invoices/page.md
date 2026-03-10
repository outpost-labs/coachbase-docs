---
title: "Creating Invoices"
description: "Create one-time or recurring invoices for your coaching clients."
---

You can create a new invoice directly from the invoices page using the modal form. CoachBase supports both one-time invoices and recurring billing schedules.

## Creating a one-time invoice

1. Click **+ New Invoice** in the top-right corner of the Invoices page
2. Select a **Client** from the dropdown
3. Optionally choose a **Package** -- selecting a package auto-fills the amount
4. Enter the **Amount** (or adjust the pre-filled amount)
5. Pick a **Due Date**
6. Add any **Notes** for the client (optional)
7. Click **Create Invoice**

![New Invoice modal with fields for client, package, amount, due date, and notes](/images/invoices/03-new-invoice-modal.png)

### Send immediately or save as draft

The **Send to client immediately** checkbox is enabled by default. When checked, the invoice is emailed to the client as soon as you create it. If you have Stripe connected, a payment link is included automatically.

Uncheck this option to save the invoice as a draft. You can review and send it later from the invoice detail page.

### Linking a package

When you select a package from the **Package** dropdown, the amount field is automatically populated with the package price. You can still adjust the amount manually if needed.

## Setting up a recurring invoice

To create a recurring invoice, check **Make this recurring** at the bottom of the new invoice form. Additional fields appear:

![New Invoice modal with recurring fields expanded showing frequency, start date, and end conditions](/images/invoices/09-recurring-fields.png)

1. Set the **frequency** -- choose a number and period (weeks or months)
2. Pick a **Start Date** for the first invoice
3. Optionally set an **End Date** or **Max Invoices** to limit the schedule
4. Choose when each generated invoice is **due** relative to its send date (same day, 7 days, 14 days, 30 days, or 60 days)
5. Toggle **Auto-send when generated** to automatically email each invoice on its generation date

{% callout type="note" %}
When you check "Make this recurring," CoachBase creates a recurring invoice schedule rather than a single invoice. Individual invoices are generated automatically on schedule.
{% /callout %}

## Frequently Asked Questions

**Can I create an invoice without selecting a package?**
Yes. The package field is optional. You can enter any custom amount.

**What happens if I send an invoice without Stripe connected?**
The invoice is still emailed to the client, but without an online payment link. The client would need to pay you offline (cash, check, or bank transfer). A banner in the form reminds you to connect Stripe for online payments.

**Can I edit an invoice after creating it?**
Yes, as long as the invoice has not been paid, voided, or cancelled. See [Managing Invoices](/docs/features/invoices/managing-invoices) for details.
