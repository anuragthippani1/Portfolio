# 📧 EmailJS Setup Guide for Contact Form

Your contact form is now configured to send emails directly to your inbox using **EmailJS**. Follow these steps to complete the setup:

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click **"Sign Up"** (it's FREE!)
3. Sign up with Google or create an account
4. Verify your email address

---

### Step 2: Add Email Service

1. After login, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended) - Use your `anuragthippani8@gmail.com`
   - Or Yahoo, Outlook, etc.
4. Click **"Connect Account"**
5. For Gmail:
   - Click **"Connect Account"**
   - Allow EmailJS to access Gmail
6. Copy the **Service ID** (something like `service_abc123`)
7. Click **"Create Service"**

---

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Replace the default template with this:

**Subject:**
```
New Message from {{from_name}} - Portfolio Contact
```

**Content (Body):**
```
You have a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

4. Click **"Save"**
5. Copy the **Template ID** (something like `template_xyz789`)

---

### Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Scroll down to **"API Keys"** section
3. Copy your **Public Key** (something like `user_abcXYZ123`)

---

### Step 5: Update Your Code

Open `components/Contact.js` and replace these values (around line 20-22):

```javascript
// Replace these with your actual EmailJS credentials
const SERVICE_ID = "service_abc123";      // Your Service ID
const TEMPLATE_ID = "template_xyz789";    // Your Template ID  
const USER_ID = "user_abcXYZ123";         // Your Public Key
```

**Example:**
```javascript
const SERVICE_ID = "service_4h8k2l9";
const TEMPLATE_ID = "template_contact_form";
const USER_ID = "yQ7xKpL9mN3rT5wZ";
```

---

### Step 6: Test Your Contact Form

1. Save the file
2. Go to your portfolio: [http://localhost:3000](http://localhost:3000)
3. Scroll to the **Contact** section
4. Fill out the form with test data
5. Click **"Send Message"**
6. Check your email inbox (`anuragthippani8@gmail.com`)!

---

## ✅ Expected Behavior

- **Before sending:** Button shows "Send Message"
- **While sending:** Button shows spinner and "Sending..."
- **Success:** Green message ✅ "Message sent successfully!"
- **Error:** Red message ❌ with fallback email address

---

## 🔧 Troubleshooting

### Issue: "Failed to send message"

**Solution 1: Check Credentials**
- Make sure Service ID, Template ID, and Public Key are correct
- Check for typos or extra spaces

**Solution 2: Verify Gmail Connection**
- Go to EmailJS dashboard → Email Services
- Make sure your Gmail is connected (green checkmark)
- Try reconnecting if needed

**Solution 3: Check Template Variables**
- Template must use: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- Variables are case-sensitive!

### Issue: Email not received

**Check:**
1. Your spam/junk folder
2. EmailJS dashboard → "Auto-Reply" → Check sent emails
3. Make sure email service is active (not paused)

### Issue: Rate limit exceeded

- EmailJS free plan: 200 emails/month
- If exceeded, upgrade or wait for next month
- Or use a different email service temporarily

---

## 📊 Monitor Your Messages

**View Sent Emails:**
1. Go to EmailJS Dashboard
2. Click **"Auto-Reply"** or **"History"**
3. See all messages sent through your form

---

## 🎯 Alternative: Environment Variables (Production)

For better security in production, use environment variables:

1. Create `.env.local`:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_USER_ID=user_abcXYZ123
```

2. Update `components/Contact.js`:
```javascript
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
```

3. Add to `.gitignore`:
```
.env.local
```

4. On Vercel, add environment variables in dashboard

---

## 💡 Tips

✅ **Test before deploying** - Send yourself a test email first
✅ **Keep credentials secure** - Don't share your Public Key publicly
✅ **Check spam folder** - First few emails might go to spam
✅ **Monitor usage** - Check EmailJS dashboard monthly for usage stats

---

## 🆘 Need Help?

- **EmailJS Docs:** [https://www.emailjs.com/docs](https://www.emailjs.com/docs)
- **EmailJS Support:** [https://www.emailjs.com/support](https://www.emailjs.com/support)

---

## ✨ Done!

Once you complete these steps, your contact form will send emails directly to **anuragthippani8@gmail.com** whenever someone fills it out on your portfolio! 🎉

Happy emailing! 📬

