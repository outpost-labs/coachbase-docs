---
title: "Setting Your Availability"
description: "Configure your weekly schedule and one-time overrides for each meeting type."
---

Set your usual working week once as your default availability, then decide which session types follow it and which keep hours of their own.

![Availability schedule on a meeting type detail page](/images/scheduling/06-availability-schedule.png)

## Default Availability

Default availability is one weekly schedule that any number of session types can share. Change it once and every session type that uses it updates.

1. Go to the **Scheduling** page and find the **Default availability** card.
2. Open it and add hours for each day you work. Leave a day empty to make it unavailable.
3. Save. The page lists the session types your changes apply to.

Then open a session type. The availability card at the top says which hours it uses:

- **Using default availability** — Changes to your default hours apply to this session type. Click **Customize these hours** to give it a schedule of its own, starting from a copy of the default.
- **Using custom availability** — These hours apply only to this session type. Click **Use default availability** to switch back to the shared hours.

Click **Edit default** on that card to change the shared schedule.

{% callout type="note" %}
Session types you created before default availability existed keep their current hours until you switch them. Existing appointments stay scheduled when you change your default hours.
{% /callout %}

## Weekly Availability

The availability section on the meeting type detail page displays all seven days of the week. For each day, you can define one or more time blocks when you're available.

- A day with availability shows its time blocks (e.g., "4:00 AM - 7:00 AM" and "8:00 AM - 12:00 PM").
- A day with no availability shows **"No hours set"**.

### Adding Time Blocks

1. Navigate to the meeting type detail page.
2. Find the day you want to update.
3. Click the **+** button to add a new time block.
4. Set the start and end times.

You can add multiple blocks per day to create gaps in your schedule — for example, morning and afternoon availability with a lunch break.

### Removing Time Blocks

Click the **X** button next to any time block to remove it from that day.

## Copying Schedules

To save time when setting up availability:

- **Copy to other days** — Click the copy option on any day to apply that day's schedule to one or more other days of the week.
- **Copy from another meeting type** — Use the **Copy from...** option to import the entire weekly schedule from a different meeting type as your starting point.

## Availability Overrides

Overrides let you adjust your schedule for specific dates without changing your recurring weekly availability.

### Blocking Time Off

1. Go to the **Scheduling** page.
2. Click **Block a Date**.
3. Choose a date and select either:
   - **Full day** — Blocks the entire day (ideal for vacations or personal days).
   - **Partial day** — Blocks a specific time range on that date.
4. Save the override.

### Adding Extra Hours

You can also use overrides to add availability on a date that would normally be unavailable — for example, opening up a Saturday for a special workshop.

## How Availability Feeds the Booking Calendar

When a client visits your booking page, the available time slots they see are determined by:

1. **Your weekly availability** for that meeting type.
2. **Minus any overrides** that block time on specific dates.
3. **Minus any conflicts** from connected external calendars (Google, Outlook, or Apple).

Only times that pass all three checks appear as bookable slots on the client-facing calendar.

{% callout type="note" %}
Changes to your availability take effect immediately. Any time slots that are no longer available will stop appearing on your booking page right away.
{% /callout %}

{% callout type="warning" %}
Availability overrides apply across all meeting types. Blocking a date for vacation removes that time from every meeting type's booking calendar.
{% /callout %}

## Frequently Asked Questions

### Can I set different availability for each meeting type?
Yes. Any session type can use custom availability in place of your default hours. For example, you might offer discovery calls only on Tuesdays and Thursdays, while weekly coaching sessions are available Monday through Friday.

### How far in advance can clients book?
This is controlled by the **buffer days** setting on each meeting type. If you set buffer days to 2, clients cannot book sessions less than 2 days in advance.

### Do availability overrides repeat?
No. Overrides apply to a single specific date only. For recurring schedule changes, update your weekly availability directly.
