<template>
  <section class="contact-form-section">
    <div class="contact-form-section__inner">
      <h2>Make a Reservation</h2>
      <p class="contact-form-section__subtitle">Book your table at Manuka</p>

      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="Your full name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address *</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="your@email.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone Number *</label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            required
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="date">Preferred Date *</label>
            <input
              id="date"
              v-model="formData.date"
              type="date"
              required
            />
          </div>

          <div class="form-group">
            <label for="time">Preferred Time *</label>
            <input
              id="time"
              v-model="formData.time"
              type="time"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="guests">Number of Guests *</label>
            <select id="guests" v-model="formData.guests" required>
              <option value="">Select number of guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8+ Guests</option>
            </select>
          </div>

          <div class="form-group">
            <label for="occasion">Occasion</label>
            <input
              id="occasion"
              v-model="formData.occasion"
              type="text"
              placeholder="e.g., Birthday, Anniversary"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="message">Special Requests</label>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Any dietary restrictions or special requests..."
            rows="5"
          ></textarea>
        </div>

        <div v-if="submitMessage" :class="['submit-message', submitMessageType]">
          {{ submitMessage }}
        </div>

        <button
          type="submit"
          class="contact-form__button"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Sending...' : 'Make Reservation' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  occasion: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await fetch('/api/send-reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    const result = await response.json()

    if (response.ok) {
      submitMessage.value = 'Reservation request sent successfully! We will contact you shortly.'
      submitMessageType.value = 'success'
      // Reset form
      formData.value = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
        message: ''
      }
      // Clear message after 5 seconds
      setTimeout(() => {
        submitMessage.value = ''
      }, 5000)
    } else {
      submitMessage.value = result.message || 'Failed to send reservation request. Please try again.'
      submitMessageType.value = 'error'
    }
  } catch (error) {
    console.error('Error:', error)
    submitMessage.value = 'An error occurred. Please try again later.'
    submitMessageType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.contact-form-section {
  background: #f9f7f5;
  padding: 100px 8vw;

  &__inner {
    max-width: 700px;
    margin: 0 auto;
  }

  h2 {
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.05;
    font-weight: 400;
    margin: 0 0 12px;
    letter-spacing: -0.03em;
    color: #2e2622;
    text-align: center;
  }

  &__subtitle {
    text-align: center;
    color: rgba(46, 38, 34, 0.7);
    margin: 0 0 48px;
    font-size: 14px;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #2e2622;
  }

  input,
  select,
  textarea {
    padding: 14px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    font-family: inherit;
    transition: all 0.3s ease;
    background: #ffffff;
    color: #2e2622;

    &::placeholder {
      color: rgba(46, 38, 34, 0.5);
    }

    &:focus {
      outline: none;
      border-color: #b8896f;
      box-shadow: 0 0 0 3px rgba(184, 139, 111, 0.1);
    }

    &:disabled {
      background: #f0f0f0;
      color: rgba(46, 38, 34, 0.5);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.submit-message {
  padding: 14px 16px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;

  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
}

.contact-form__button {
  background: #b8896f;
  color: #ffffff;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 12px;

  &:hover:not(:disabled) {
    background: #a0745d;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(184, 139, 111, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

@media (max-width: 768px) {
  .contact-form-section {
    padding: 80px 24px;
  }

  .contact-form {
    gap: 18px;
  }

  .form-row {
    gap: 18px;
  }
}

@media (max-width: 480px) {
  .contact-form-section {
    padding: 64px 20px;
  }

  .contact-form {
    gap: 16px;
  }
}
</style>
