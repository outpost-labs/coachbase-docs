---
title: "Client Login"
description: "How clients sign into the portal using passwordless magic links."
---

Clients access the portal through a simple, passwordless login flow. No accounts to create, no passwords to remember -- just a magic link sent to their email.

![Portal login page with email input and send button](/images/client-portal/01-login.png)

## How it works

1. Your client visits the portal login page.
2. They enter their email address and click **Send me a login link**.
3. A secure, one-time link is sent to their inbox.
4. They click the link and are signed in immediately.

The login page displays a "Welcome back" heading and a clean email input. After submitting, clients see a confirmation message regardless of whether the email was found -- this prevents anyone from discovering which emails are in your system.

## Magic link details

- **Expiration** -- Links are valid for 30 minutes after being sent.
- **Single use** -- Each link can only be used once. Clicking it a second time will show an error.
- **Session duration** -- Once signed in, the client stays logged in for 7 days before needing a new link.

{% callout type="note" %}
If a client has accounts with multiple coaches on CoachBase, they receive separate login links for each -- one per coaching practice.
{% /callout %}

## Inviting clients to the portal

When you invite a client to the portal, they receive a branded email with a login link. The email uses your practice's brand colors and includes your logo if you've uploaded one.

## Security

- Magic links are cryptographically signed and stored as hashed tokens -- they cannot be guessed or reused.
- Sessions are stored in secure, HTTP-only cookies separate from the coach login system.
- If a client's email bounces, their messaging access is automatically disabled.
- Login attempts are rate-limited to prevent abuse (5 requests per 5 minutes).

## Logging out

Clients can log out from the navigation bar by clicking **Log out** next to their name. This clears their session immediately.

## Frequently Asked Questions

- **What if a client doesn't receive the email?** Check that their email address is correct in your client record. The magic link email is sent via your account's email provider. Have them check their spam folder.
- **Can clients use the portal on mobile?** Yes. The portal is fully responsive with a mobile-optimized tab bar at the bottom of the screen.
- **What happens when the link expires?** They can request a new one from the login page. Expired links show a clear error message with a link back to the login form.
