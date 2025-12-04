<template>
<section class="bg-[#382E25] text-[#F5F1E6] py-20 fade-up">
  <div class="max-w-6xl mx-auto px-6 md:px-8 text-center">
    <h3 class="text-4xl font-extrabold mb-10">Why Choose Us</h3>

    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

      <div class="flex gap-4 scroll-fade-in stagger-1">
        <div class="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="lucide lucide-circle-check w-6 h-6 text-[#D4C5AC]">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold">Local Market Knowledge</h4>
          <p class="text-[#D4C5AC] text-sm mt-1">
            On-ground understanding of Dubai communities, developers, and demand drivers.
          </p>
        </div>
      </div>

      <div class="flex gap-4 scroll-fade-in stagger-2">
        <div class="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="lucide lucide-circle-check w-6 h-6 text-[#D4C5AC]">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold">Strong Partner Network</h4>
          <p class="text-[#D4C5AC] text-sm mt-1">
            Access to reputable market partners for smoother, safer transactions.
          </p>
        </div>
      </div>

      <div class="flex gap-4 scroll-fade-in stagger-3">
        <div class="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="lucide lucide-circle-check w-6 h-6 text-[#D4C5AC]">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold">International-Grade Standards</h4>
          <p class="text-[#D4C5AC] text-sm mt-1">
            Clear documentation, transparent communication, and disciplined investment criteria.
          </p>
        </div>
      </div>

      <div class="flex gap-4 scroll-fade-in stagger-4">
        <div class="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="lucide lucide-circle-check w-6 h-6 text-[#D4C5AC]">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold">Focused on Serious Investors</h4>
          <p class="text-[#D4C5AC] text-sm mt-1">
            We work with clients who prioritize strategy, data, and long-term positioning.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-end')
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('.fade-up').forEach((el) => {
    el.classList.add('fade-up-start')
    observer.observe(el)
  })
})
</script>
