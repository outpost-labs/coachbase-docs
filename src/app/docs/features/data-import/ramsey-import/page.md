---
title: "Importing from Ramsey"
description: "Step-by-step guide to importing your Ramsey Preferred Coach contacts and activity history."
---

If you are transitioning from Ramsey Preferred Coach, CoachBase can import your full contact list and activity history in one step. The import reads your Ramsey data export (a ZIP file) and creates clients, sessions, notes, and invoices automatically.

## Before you begin

1. Log in to your Ramsey Preferred Coach dashboard
2. Export your data -- this downloads a ZIP file containing `contacts.csv` and `activities.csv`
3. Save the ZIP file to your computer (do not unzip it)

{% callout type="note" %}
The ZIP file must contain a `contacts.csv` file. The `activities.csv` file is optional -- if included, activity records will be imported alongside your contacts.
{% /callout %}

## Uploading your export

1. Go to **Settings > Data Import**
2. Click **Ramsey Preferred Coach**
3. Drag your ZIP file onto the upload area, or click to browse for it

![Ramsey import upload page with drag-and-drop zone](/images/data-import/02-ramsey-upload.png)

The file uploads and processes automatically once selected. CoachBase will read the contents of the ZIP and prepare a preview.

## Reviewing the import

After uploading, you will see a summary of what was found in your export:

- **Contacts** -- Total count, how many have email addresses, and how many are archived
- **Activities** -- Breakdown by type (Contact, Coaching Session, Payment, etc.)
- **Sample data** -- A preview of the first few contacts so you can verify the data looks correct

Review the summary to make sure everything looks right. The info panel explains how matching works:

- Existing clients are matched by email first, then by name
- Only blank fields are filled in on existing records
- Activities are imported as sessions, notes, or invoices based on their type

Click **Start Import** to begin, or **Cancel** to discard the upload and start over.

## How data is mapped

### Contact fields

| Ramsey field | CoachBase field |
|---|---|
| FirstName / LastName | First name / Last name |
| Email | Email |
| Phone | Phone |
| Address, City, State, Zip | About (combined) |
| LeadStatus | Pipeline stage |
| ContactArchived | Archived status |
| SpouseFirstName / SpouseLastName | Custom field |
| LeadSource | Custom field |

CoachBase automatically creates custom field definitions for Ramsey-specific fields like **Lead Source**, **Spouse First Name**, and **Spouse Last Name**. These appear on each client's detail page under custom fields.

### Activity types

| Ramsey activity type | CoachBase record |
|---|---|
| Coaching Session | Session (completed) |
| Contact | Note |
| Payment (with amount) | Invoice (paid) |
| Payment (no amount) | Note |
| Other types | Note |

The location type (phone, in-person, video, etc.) is preserved from the Ramsey `SubActivityType` field.

## After the import

Once complete, you will see a results summary showing:

- **Contacts created** -- New clients added to your account
- **Contacts updated** -- Existing clients that had blank fields filled in
- **Contacts skipped** -- Contacts that could not be imported
- **Sessions, Notes, and Invoices created** -- Activity records imported

If any rows had errors, you can download an **Error CSV** that lists each failed row with the reason. Common reasons include missing required fields or contacts that could not be matched for activity import.

Click **Go to People** to see your newly imported clients.

## Frequently asked questions

### What format does the ZIP file need to be in?

The ZIP should contain a `contacts.csv` file at the top level or in a subfolder. An `activities.csv` file is optional. This is the standard format from the Ramsey Preferred Coach data export.

### Will archived contacts be imported?

Yes. Contacts marked as archived in Ramsey are imported with an archived status in CoachBase. They will appear when you filter your client list by **Archived**.

### I got errors for some contacts -- what should I do?

Download the error CSV from the results page. It shows the row number, error reason, and original data for each failed row. The most common fix is to manually add those contacts and their activity records.
