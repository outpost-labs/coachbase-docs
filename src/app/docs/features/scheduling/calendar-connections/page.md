---
title: "Calendar Connections"
description: "Connect Google, Outlook, or Apple calendars to prevent double-booking."
---

Calendar connections let you sync your external calendars with CoachBase so clients can only book times when you're truly available.

![Calendar Connections page showing three provider options](/images/scheduling/08-calendar-connections.png)

## Overview

The **Calendar Connections** page displays the heading "Calendar Connections" with the description: *"Connect your calendars to automatically check for conflicts when clients book sessions and push new bookings to your calendar."*

## Supported Providers

CoachBase supports three calendar providers:

- **Google Calendar**
- **Microsoft Outlook**
- **Apple iCloud**

Each provider has a **Connect** button. Click it to authenticate with your account and authorize CoachBase to read and write calendar events.

## Connecting a Calendar

1. Navigate to **Calendar Connections** in your settings.
2. Click **Connect** next to the provider you use.
3. Sign in to your calendar account and grant the requested permissions.
4. Once connected, select which calendars to use.

## Configuring Connected Calendars

After connecting, you have two configuration options:

- **Conflict calendars** — Select which calendars to check for conflicts. Any busy events on these calendars will block those time slots from appearing on your booking page.
- **Write calendar** — Choose a single calendar where new bookings are automatically added as events.

{% callout type="note" %}
You can connect multiple providers at the same time. For example, connect both Google Calendar and Outlook to check conflicts across your personal and work calendars simultaneously.
{% /callout %}

## How Conflict Checking Works

During the booking flow, CoachBase checks your selected conflict calendars in real time:

1. A client selects a date on your booking page.
2. CoachBase queries your connected calendars for busy times on that date.
3. Any time slots that overlap with existing events are removed from the available options.
4. The client only sees times when you are free across all connected calendars.

{% callout type="warning" %}
If your calendar connection expires or loses authorization, conflict checking will stop working until you reconnect. Check your connections periodically to ensure they remain active.
{% /callout %}

## Frequently Asked Questions

### Will my existing calendar events be affected?
No. CoachBase only reads your existing events to check for conflicts and writes new booking events to your chosen write calendar. It never modifies or deletes your existing events.

### Can I connect multiple Google accounts?
You can connect one account per provider. If you use multiple Google accounts, connect the one that contains your primary scheduling calendar.

### What happens if I disconnect a calendar?
New bookings will no longer be pushed to that calendar, and its events will no longer be checked for conflicts. Existing bookings already on the calendar remain unchanged.
