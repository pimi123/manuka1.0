# Manuka Contact Form & Reservation System Setup

## Overview
This project includes a contact form for making reservations that sends emails to both the restaurant and the customer.

## Installation

First, install the required dependency:

```bash
npm install
```

## Email Configuration

### 1. Copy the environment file
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 2. Configure SMTP Settings

Edit `.env.local` with your email service credentials.

#### For Gmail:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RESTAURANT_EMAIL=reservations@manuka.com
```

**Note:** Use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular Gmail password.

#### For SendGrid:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxxxxxxxxxxxxx
RESTAURANT_EMAIL=reservations@manuka.com
```

#### For Other Services:
Replace `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASSWORD` with your provider's credentials.

## How It Works

### Contact Form Component
- **Location:** `app/components/ContactForm.vue`
- Collects reservation details: name, email, phone, date, time, number of guests, occasion, and special requests
- Client-side form validation
- User-friendly error and success messages

### Backend API
- **Location:** `server/api/send-reservation.ts`
- Receives form data via POST request
- Validates all required fields
- Sends two emails:
  1. **To Restaurant:** Contains all reservation details
  2. **To Customer:** Confirmation that their request was received

## Running the Project

```bash
npm run dev
```

Visit `http://localhost:3000` and scroll to the "Make a Reservation" section.

## Environment Variables Needed

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server address | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port number | `587` |
| `SMTP_SECURE` | Use SSL/TLS | `false` |
| `SMTP_USER` | Email username | `your-email@gmail.com` |
| `SMTP_PASSWORD` | Email password or app token | `your-app-password` |
| `RESTAURANT_EMAIL` | Reservation email recipient | `reservations@manuka.com` |

## Form Fields

**Required:**
- Full Name
- Email Address
- Phone Number
- Preferred Date
- Preferred Time
- Number of Guests

**Optional:**
- Occasion
- Special Requests

## Troubleshooting

### Emails not sending?
1. Check that all SMTP credentials are correct
2. Verify the email account allows SMTP connections
3. Check server logs in the terminal for specific error messages

### Gmail not working?
- Use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password
- Enable "Less secure app access" if not using an app password

### Testing
You can test the form directly by filling it out on the site. Check the server logs for any errors.
