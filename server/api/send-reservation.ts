import nodemailer from 'nodemailer'

// Configure your email service here
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === 'true' || false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
})

export default defineEventHandler(async (event) => {
  // Handle only POST requests
  if (event.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const body = await readBody(event)

    // Validate required fields
    const { name, email, phone, date, time, guests, occasion, message } = body

    if (!name || !email || !phone || !date || !time || !guests) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Prepare email content
    const reservationDetails = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Preferred Date: ${date}
      Preferred Time: ${time}
      Number of Guests: ${guests}
      Occasion: ${occasion || 'Not specified'}
      Special Requests: ${message || 'None'}
    `

    // Email to restaurant
    const restaurantMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RESTAURANT_EMAIL || 'reservations@manuka.com',
      subject: `New Reservation Request from ${name}`,
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Customer Details:</strong></p>
        <p>
          <strong>Name:</strong> ${name}<br/>
          <strong>Email:</strong> ${email}<br/>
          <strong>Phone:</strong> ${phone}
        </p>
        <p><strong>Reservation Details:</strong></p>
        <p>
          <strong>Preferred Date:</strong> ${date}<br/>
          <strong>Preferred Time:</strong> ${time}<br/>
          <strong>Number of Guests:</strong> ${guests}<br/>
          <strong>Occasion:</strong> ${occasion || 'Not specified'}
        </p>
        ${message ? `<p><strong>Special Requests:</strong></p><p>${message}</p>` : ''}
      `
    }

    // Confirmation email to customer
    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Your Manuka Reservation Request',
      html: `
        <h2>Thank you for your reservation request!</h2>
        <p>Dear ${name},</p>
        <p>We have received your reservation request for Manuka. Our team will review your request and contact you shortly to confirm your booking.</p>
        <p><strong>Your Reservation Details:</strong></p>
        <p>
          <strong>Date:</strong> ${date}<br/>
          <strong>Time:</strong> ${time}<br/>
          <strong>Number of Guests:</strong> ${guests}
        </p>
        <p>If you have any questions, feel free to contact us.</p>
        <p>Best regards,<br/>The Manuka Team</p>
      `
    }

    // Send both emails
    await transporter.sendMail(restaurantMailOptions)
    await transporter.sendMail(customerMailOptions)

    return {
      success: true,
      message: 'Reservation request sent successfully'
    }
  } catch (error) {
    console.error('Email sending error:', error)

    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to send email'
    })
  }
})
