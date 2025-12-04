<template>
<section id="contact" class="fade-up bg-[#382E25] text-[#F5F1E6] py-16">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="grid md:grid-cols-2 gap-12 items-start">

      <!-- Left Column -->
      <div class="rounded-lg border text-card-foreground shadow-sm p-8 bg-cream/10 backdrop-blur-sm border-cream/20">
        <h2 class="text-3xl font-extralight mb-4">Let's Talk About Your Next Investment</h2>
        <p class="text-[#D4C5AC] mb-8 text-lg">
          Share a few details and our team will reach out with suitable opportunities and next steps.
        </p>

        <div class="space-y-6 mb-8">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-[#87745D] flex items-center justify-center text-[#D4C5AC]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <div class="text-[#D4C5AC] text-sm">Email</div>
              <div class="font-semibold">info@erakproperties.com</div>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-[#87745D] flex items-center justify-center text-[#D4C5AC]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <div class="text-[#D4C5AC] text-sm">Location</div>
              <div class="font-semibold">Dubai, United Arab Emirates</div>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-[#87745D] flex items-center justify-center text-[#D4C5AC]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <div class="text-[#D4C5AC] text-sm">Phone / WhatsApp</div>
              <div class="font-semibold">+971 58 588 1007</div>
            </div>
          </div>
        </div>

        <!-- WhatsApp Button -->
        <button 
          @click="openWhatsAppChat"
          class="px-6 py-3 rounded-lg bg-shadow border border-white text-white font-semibold 
                 hover:opacity-90 transition-colors flex items-center gap-2 mb-6"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
          </svg>
          Contact Us on WhatsApp
        </button>

        <!-- Social Media -->
        <div class="flex items-center gap-4">
          <span class="text-[#D4C5AC] text-sm">Follow Us</span>
          <div class="flex gap-2">
            <a href="#" class="w-10 h-10 rounded-full bg-[#87745D] flex items-center justify-center text-[#D4C5AC] hover:bg-[#D4C5AC] hover:text-[#382E25] transition-colors">
              <span class="text-sm font-bold">f</span>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-[#87745D] flex items-center justify-center text-[#D4C5AC] hover:bg-[#D4C5AC] hover:text-[#382E25] transition-colors">
              <span class="text-sm font-bold">in</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column - Contact Form -->
      <div class="bg-[#87745D] rounded-2xl p-8">
        <form @submit.prevent="submitForm" class="space-y-6">
          
          <div>
            <label for="fullName" class="block text-sm font-medium text-[#D4C5AC] mb-1">Full Name *</label>
            <input 
              type="text" 
              id="fullName" 
              v-model="formData.fullName" 
              required 
              class="w-full px-4 py-3 rounded-lg bg-[#382E25] border border-[#D4C5AC] text-[#F5F1E6] placeholder-[#D4C5AC] focus:outline-none focus:ring-2 focus:ring-[#D4C5AC] focus:border-transparent"
              placeholder="Enter your full name"
            >
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-[#D4C5AC] mb-1">Email *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required 
              class="w-full px-4 py-3 rounded-lg bg-[#382E25] border border-[#D4C5AC] text-[#F5F1E6] placeholder-[#D4C5AC] focus:outline-none focus:ring-2 focus:ring-[#D4C5AC] focus:border-transparent"
              placeholder="Enter your email"
            >
          </div>
          
          <div>
            <label for="country" class="block text-sm font-medium text-[#D4C5AC] mb-1">Country of Residence</label>
            <input 
              type="text" 
              id="country" 
              v-model="formData.country" 
              class="w-full px-4 py-3 rounded-lg bg-[#382E25] border border-[#D4C5AC] text-[#F5F1E6] placeholder-[#D4C5AC] focus:outline-none focus:ring-2 focus:ring-[#D4C5AC] focus:border-transparent"
              placeholder="Enter your country"
            >
          </div>
          
          <div>
            <label for="budget" class="block text-sm font-medium text-[#D4C5AC] mb-1">Investment Budget Range</label>
            <input 
              type="text" 
              id="budget" 
              v-model="formData.budget" 
              class="w-full px-4 py-3 rounded-lg bg-[#382E25] border border-[#D4C5AC] text-[#F5F1E6] placeholder-[#D4C5AC] focus:outline-none focus:ring-2 focus:ring-[#D4C5AC] focus:border-transparent"
              placeholder="Enter your budget range"
            >
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-[#D4C5AC] mb-1">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              v-model="formData.message" 
              class="w-full px-4 py-3 rounded-lg bg-[#382E25] border border-[#D4C5AC] text-[#F5F1E6] placeholder-[#D4C5AC] focus:outline-none focus:ring-2 focus:ring-[#D4C5AC] focus:border-transparent"
              placeholder="Tell us about your investment goals..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full px-8 py-3 rounded-lg bg-[#D4C5AC] text-[#382E25] font-semibold hover:bg-[#c5b59a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <div 
            v-if="formMessage.text"
            :class="[
              'text-center py-3 px-4 rounded-lg transition-all duration-300',
              formMessage.type === 'success' ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'
            ]"
          >
            {{ formMessage.text }}
          </div>

        </form>
      </div>

    </div>
  </div>

 

</section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const isSubmitting = ref(false)
const formMessage = ref({ text: '', type: '' })

const formData = ref({
  fullName: '',
  email: '',
  country: '',
  budget: '',
  message: ''
})

const whatsappNumber = "971585881007";

const openWhatsAppChat = () => {
  const message = "Hello, I would like to know more about Dubai property investments.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

const submitForm = async () => {
  isSubmitting.value = true
  formMessage.value = { text: '', type: '' }

  try {
    await emailjs.send(
      'service_0nu31ea',
      'template_qw209j9',
      {
        full_name: formData.value.fullName,
        email: formData.value.email,
        country: formData.value.country,
        budget: formData.value.budget,
        message: formData.value.message,
        source: 'ERAK Properties Website'
      },
      'iouQytZavL2MHc0VX'
    )

    formMessage.value = {
      text: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
      type: 'success'
    }

    formData.value = {
      fullName: '',
      email: '',
      country: '',
      budget: '',
      message: ''
    }

  } catch (error) {
    console.error('EmailJS error:', error)
    formMessage.value = {
      text: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
      type: 'error'
    }
  } finally {
    isSubmitting.value = false

    setTimeout(() => {
      formMessage.value = { text: '', type: '' }
    }, 5000)
  }
}
</script>
