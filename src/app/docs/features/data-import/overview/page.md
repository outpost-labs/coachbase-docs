---
title: "Data Import"
description: "Import your contacts and activity history from another platform into CoachBase."
---

The **Data Import** tool lets you bring your existing client data into CoachBase from supported platforms. Rather than manually re-entering every contact and session, you can upload an export file and CoachBase handles the mapping automatically.

![Data Import source selection page](/images/data-import/01-source-selection.png)

## Finding Data Import

Navigate to **Settings** and click **Data Import** in the sidebar. You can also access it from the **Clients** page when importing contacts via CSV -- a link at the bottom points to Data Import for full platform migrations.

![Settings page showing Data Import in the sidebar navigation](/images/data-import/03-settings-nav.png)

## Supported sources

CoachBase currently supports importing from:

- **Ramsey Preferred Coach** -- Import contacts and all activity history (sessions, notes, invoices) from your Ramsey dashboard export

Select your source to begin the import process. Each source has its own upload format and import flow tailored to that platform's data structure.

{% callout type="note" %}
If you only need to import contacts without activity history, use the **CSV import** on the Clients page instead. It accepts a standard CSV file with client details.
{% /callout %}

## What gets imported

Depending on the source, a data import can bring over:

- **Contacts** -- Name, email, phone, address, status, and spouse information
- **Sessions** -- Coaching sessions with dates, location type, and notes
- **Notes** -- Contact notes and general activity records
- **Invoices** -- Payment records converted to invoice entries
- **Custom fields** -- Platform-specific fields like lead source are created automatically

Existing clients are matched by email address (or by name if no email is available). When a match is found, only blank fields are filled in -- your existing data is never overwritten.

## Frequently asked questions

### Can I run an import more than once?

Yes. Each import creates new records or fills in blanks on existing ones. Running the same import twice will not create duplicate clients (they are matched by email or name), but it may create duplicate activity records.

### Will the import overwrite my existing client data?

No. When a matching client is found, the import only fills in fields that are currently blank. Your existing data is preserved.

### What happens if some rows fail?

CoachBase tracks any rows that could not be imported and provides a downloadable error CSV at the end of the import so you can review and fix the issues.
