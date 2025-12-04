<template>
  <div class="min-h-screen bg-[#F5F1E6] text-[#382E25] font-sans">
    <Header />
    <Hero />
    <About />
    <Services />
    <WhyChooseUs />
    <Partners />
    <Testimonials />
    <Contact />
    <Footer />
        <!-- Floating WhatsApp Icon (fixed globally) -->
    <a
      href="https://wa.me/971585881007?text=Hello"
      target="_blank"
      aria-label="Contact us on WhatsApp"
      class="fixed bottom-6 right-6 z-50 p-2 rounded-full transition-all duration-300 
             hover:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] 
             hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
    >
      <img src="/src/assets/images/whatsapp-icon.png" class="w-12 h-12">
    </a>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import Partners from './components/Partners.vue'
import Testimonials from './components/Testimonials.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>
