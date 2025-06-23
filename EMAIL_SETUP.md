# Email Setup Instructions

This guide will help you set up email functionality for your contact form so you receive emails when users submit the form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} <{{from_email}}>
Reply To: {{reply_to}}

Message:
{{message}}

---
This message was sent through your website contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Set Environment Variables

1. Create a `.env` file in your project root (copy from `sample.env`)
2. Add these variables with your actual values:

```env
# Email Configuration
REACT_APP_USER_EMAIL=rutvikkalathiya7@gmail.com

# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Form

1. Restart your development server: `npm start`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email (including spam folder)

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS account limits (free tier has monthly limits)
- Ensure your email template uses the correct variable names

## Email Notifications on Phone

To receive notifications on your phone:
1. Install your email app (Gmail, Outlook, etc.) on your phone
2. Enable push notifications for the email app
3. Make sure your EmailJS service is connected to the same email account

That's it! You'll now receive emails on your phone whenever someone submits your contact form. 