<template>
<header class="sticky top-0 z-50 bg-[#C7B79D] text-[#3A2E26] shadow-md border-b border-[#87745D]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex items-center justify-between">

    <!-- LOGO -->
    <div class="flex items-center">
      <img 
        src="/src/assets/images/erak-logo.png"
        alt="E R A K Properties"
        class="h-10 md:h-12 w-auto object-contain"
      />
    </div>

    <!-- DESKTOP NAV -->
    <nav class="hidden md:flex items-center gap-12 text-lg font-medium">
      <a href="#about" @click.prevent="scrollToSection('about')" class="hover:text-[#382E25] transition">About</a>
      <a href="#services" @click.prevent="scrollToSection('services')" class="hover:text-[#382E25] transition">Services</a>
      <a href="#testimonials" @click.prevent="scrollToSection('testimonials')" class="hover:text-[#382E25] transition">Testimonials</a>
      <a href="#contact" @click.prevent="scrollToSection('contact')" class="hover:text-[#382E25] transition">Contact</a>
    </nav>

    <!-- MOBILE MENU BUTTON -->
    <button class="md:hidden ml-2" @click="mobileOpen = !mobileOpen" aria-label="menu">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

  </div>

  <!-- MOBILE NAV -->
  <div 
    v-if="mobileOpen" 
    class="md:hidden bg-[#C7B79D] text-[#3A2E26] border-t border-[#87745D] transition-all duration-300 ease-in-out"
  >
    <div class="px-6 py-4 flex flex-col gap-4">
      <a href="#about" @click.prevent="scrollToSection('about')" class="py-2 hover:text-[#382E25] transition">About</a>
      <a href="#services" @click.prevent="scrollToSection('services')" class="py-2 hover:text-[#382E25] transition">Services</a>
      <a href="#testimonials" @click.prevent="scrollToSection('testimonials')" class="py-2 hover:text-[#382E25] transition">Testimonials</a>
      <a href="#contact" @click.prevent="scrollToSection('contact')" class="py-2 hover:text-[#382E25] transition">Contact</a>
    </div>
  </div>
</header>
</template>


<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
  mobileOpen.value = false
}
</script>
