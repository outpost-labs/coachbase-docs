---
title: "Public Booking Page"
description: "How clients book sessions through your public scheduling link."
---

Your public booking page lets clients browse your services, pick a time, and book a session — without any back-and-forth messaging.

## Your Booking Link

Find your booking page URL at the top of the **Scheduling** page. The link follows the format:

```
https://app.coachbase.com/book/your-slug
```

Copy the link and share it on your website, social media, or directly with clients.

## What Clients See

### Profile Page

When a client opens your booking link, they see your profile page with:

- Your **photo** and **name**
- **Specialization** and **company**
- A brief **bio**
- A list of your **active meeting types**, each showing the session duration and location type

![Coach profile on the public booking page](/images/scheduling/12-booking-profile.png)

### Selecting a Meeting Type

The client clicks on a meeting type to proceed to the booking calendar.

### Booking Calendar

The calendar view includes:

- **Timezone selector** — Clients can switch to their local timezone. All times adjust automatically.
- **4-week calendar grid** — Navigate between weeks to find a suitable date.
- **Available time slots** — After selecting a date, available times appear based on your availability, overrides, and connected calendar conflicts.

![Booking calendar with available time slots](/images/scheduling/13-booking-calendar.png)

### Completing the Booking

1. The client selects an available time slot.
2. They fill in:
   - **Name** and **email address**
   - **Intake response** (if you configured an intake question on the meeting type)
   - **Notes** (optional)
3. They submit the booking.

## Slot Hold

When a client selects a time slot and begins filling in their details, a **5-minute hold** is placed on that slot. This prevents another client from booking the same time while the first client completes their information.

{% callout type="note" %}
If the client does not complete the booking within 5 minutes, the hold expires and the slot becomes available again.
{% /callout %}

## Deposits via Stripe

If you configured a deposit amount on the meeting type, the client is redirected to **Stripe checkout** after submitting their details. The session is only confirmed after payment is completed.

## Confirmation

After a successful booking, the client sees a **confirmation page** with:

- Session title and meeting type
- Date, time, and duration
- Location details
- A **cancellation link**

The client also receives a **confirmation email** containing the same session details and a cancellation link.

## Client Cancellation

Clients can cancel their booking using the cancellation link in their confirmation email or on the confirmation page.

{% callout type="warning" %}
Clients can cancel anytime up to the session start time. If you need to enforce a cancellation policy with a minimum notice period, communicate this in your meeting type description.
{% /callout %}

## Frequently Asked Questions

### Can I customize the look of my booking page?
Your booking page automatically uses your profile photo, name, and bio. Update these in your account settings to change what clients see.

### What happens if a client books but doesn't complete Stripe payment?
The session is not confirmed until payment is completed. The slot hold expires after 5 minutes, and the time becomes available for other clients.

### Can clients reschedule instead of cancelling?
Clients can cancel via the cancellation link and then book a new time. There is no direct reschedule option on the client-facing booking page.
