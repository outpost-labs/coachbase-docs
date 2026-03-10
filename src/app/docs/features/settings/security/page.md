---
title: "Security Settings"
description: "Set up two-factor authentication and manage recovery codes."
---

The **Security** tab lets you add two-factor authentication (2FA) to your account using a TOTP authenticator app.

![Security settings showing two-factor authentication setup option](/images/settings/02-security-settings.png)

## Setting up two-factor authentication

1. Navigate to **Settings** and click **Security** in the sidebar
2. Click **Set up 2FA**
3. Scan the QR code with your authenticator app (1Password, Authy, or Google Authenticator are recommended)
4. If you cannot scan the QR code, copy the manual setup key displayed below it
5. Enter the 6-digit verification code from your authenticator app
6. Click **Enable 2FA**

After enabling 2FA, CoachBase displays a set of one-time recovery codes. Save these immediately -- they are shown only once.

{% callout type="warning" %}
Store your recovery codes in a safe place before leaving the page. Each code can only be used once, and they are your backup if you lose access to your authenticator app.
{% /callout %}

## Managing 2FA after setup

Once enabled, the Security page shows:

- **Status** -- Enabled, with the last time a code was used
- **Recovery codes remaining** -- How many unused codes you have left

### Regenerating recovery codes

Click **Regenerate recovery codes** to create a new set. All previous codes are immediately invalidated. Save the new codes right away.

### Disabling 2FA

Click **Disable 2FA** and confirm. This removes the authenticator requirement from your sign-in flow. You can re-enable it at any time.

## How 2FA sign-in works

After entering your email and password (or using a magic link), CoachBase prompts you for a 6-digit code from your authenticator app. If you do not have access to your authenticator, you can use one of your recovery codes instead.

## Frequently Asked Questions

**Which authenticator apps work with CoachBase?**
Any TOTP-compatible app works. Recommended options include 1Password, Authy, and Google Authenticator.

**What if I lose my phone and my recovery codes?**
Contact support for account recovery. You will need to verify your identity before 2FA can be reset.

**Can I use 2FA with magic link sign-in?**
Yes. If 2FA is enabled, you will be prompted for a verification code after clicking a magic link, just as you would after entering a password.
