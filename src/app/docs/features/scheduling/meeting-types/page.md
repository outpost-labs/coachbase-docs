---
title: "Meeting Types"
description: "Create and manage the session types clients can book."
---

Meeting types define the kinds of sessions you offer — discovery calls, weekly check-ins, intensive workshops, and more. Clients see your active meeting types on your public booking page and can book directly.

![Meeting types list on the Scheduling page](/images/scheduling/03-meeting-types-list.png)

## The Scheduling Page

The **Scheduling** page header includes two buttons:

- **New Session Type** — Create a new meeting type.
- **Block a Date** — Block time off on your calendar (see [Setting Your Availability](/docs/features/scheduling/availability)).

Your **public booking page URL** appears at the top of the page. Use the **copy** link to grab the URL or **open** to preview your booking page in a new tab.

## Filtering Meeting Types

Use the filters to narrow down your list:

- **Active** — Show **All**, **Active**, or **Inactive** meeting types.
- **Location** — Filter by location type (In Person, Zoom, Google Meet, etc.).

## Understanding Meeting Type Cards

Each meeting type card displays:

- **Color dot** — A visual identifier you assign when creating the type.
- **Title** — The name of the meeting type (e.g., "Discovery Call").
- **Active badge** — Shows whether the type is currently bookable.
- **Duration** — Session length (e.g., 30 min, 60 min).
- **Location** — Where the session takes place (Zoom, In Person, etc.).
- **Buffer days** — Minimum advance notice required for booking.
- **Description** — A short summary visible to clients.
- **Booking URL** — The direct link clients can use to book this specific type.

{% callout type="note" %}
Meeting types appear on your public booking page in drag-and-drop order. Rearrange them on the Scheduling page to control which types clients see first.
{% /callout %}

## Viewing Meeting Type Details

Click any meeting type to open its detail page.

![Meeting type detail page](/images/scheduling/04-meeting-type-detail.png)

The detail page shows:

- **Title** and **active status**
- **Duration** and **location**
- **Description**
- **Booking URL slug** — The URL path clients use to book this type directly
- **Availability schedule** — Your weekly hours for this meeting type (see [Setting Your Availability](/docs/features/scheduling/availability))

## Creating a New Meeting Type

1. Click **New Session Type** on the Scheduling page.
2. Under **Start from**, pick a template or **Blank** (see [Starting from a template](#starting-from-a-template)).
3. Fill in or adjust the following fields:
   - **Title** — The name clients will see (e.g., "60-Minute Coaching Session").
   - **Slug** — The URL-friendly identifier for the booking link.
   - **Duration** — How long the session lasts.
   - **Location type** — Choose from **In Person**, **Zoom**, **Google Meet**, **Phone**, **Custom Link**, or **Video Call**.
   - **Description** — A brief summary of what the session covers.
   - **Deposit amount** — An optional upfront payment collected via Stripe at booking.
   - **Intake question** — An optional question clients answer when booking.
   - **Color** — A color for visual identification in your dashboard.
4. Click **Save** to create the meeting type.

![New meeting type form](/images/scheduling/05-new-meeting-type-form.png)

{% callout type="warning" %}
Changing the slug of an existing meeting type will break any previously shared direct booking links for that type. Update links on your website or marketing materials after making changes.
{% /callout %}

## Starting from a template

Templates fill in a name, duration, description, and intake question so you are not starting from an empty form. Everything a template fills in can be edited before and after you save.

There are five:

- **Discovery Call**
- **Coaching Session**
- **Accountability Check-in**
- **Kickoff Session**
- **Program Review**

Choose **Blank** to build a session type from scratch.

{% callout type="note" %}
Only the Discovery Call template is open to public booking by default. The other four start with public booking off, so clients book them from the portal or you schedule them yourself. You can change this in the session type's booking rules.
{% /callout %}

New CoachBase accounts start with a Discovery Call already created, ready to customize.

## Buffer time

Buffers keep time free around a session without changing its start time or duration. Set **Buffer before** and **Buffer after** on each session type, from **None** up to **60 min**.

With a 15 minute buffer after a 60 minute session, a client who books 10:00 leaves 11:00 to 11:15 unavailable for the next booking.

Buffers apply when clients book from your public booking page or the portal, and when you reschedule a session.

Buffer time is different from **buffer days**, which is the minimum advance notice a client must give.

## Activating and Deactivating

Toggle a meeting type between **Active** and **Inactive** from its detail page. Inactive meeting types do not appear on your public booking page and cannot be booked by clients.

## Frequently Asked Questions

### Can I duplicate an existing meeting type?
Not directly. Create a new meeting type and use the **Copy from...** option in the availability section to copy the schedule from an existing type, then fill in the remaining details.

### How many meeting types can I create?
There is no limit. Create as many meeting types as you need to cover the different services you offer.

### What happens if I deactivate a meeting type that has upcoming bookings?
Existing bookings remain unaffected. Deactivating a meeting type only prevents new bookings — it does not cancel sessions already on your calendar.
