<template>
<section id="testimonials" class="fade-up py-20 bg-sand">
  <div class="max-w-7xl mx-auto px-6 md:px-8">

    <h3 class="text-5xl font-extrabold text-[#382E25] text-center mb-4">
      What Our Clients Say
    </h3>
    <p class="text-center text-[#87745D] mb-12 max-w-2xl mx-auto">
      <!-- Trusted by international investors and local partners alike -->
    </p>

    <div class="relative">

      <!-- Left Arrow -->
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md border
               border-[#E0D7C8] w-10 h-10 rounded-full flex items-center justify-center
               text-[#382E25] text-xl hover:bg-[#F9F5EF] transition z-10"
      >
        ‹
      </button>

      <!-- Slider -->
      <div
        ref="slider"
        class="flex gap-6 overflow-x-auto scroll-smooth px-14 pb-4 no-scrollbar"
      >
<div
  v-for="(t, index) in testimonials"
  :key="index"
  class="min-w-[340px] max-w-[340px] bg-[#F8F5EC] rounded-2xl p-8
         shadow-sm border border-[#D4C5AC] flex-shrink-0"
>
  <!-- Quote Icon -->
  <div class="text-[#87745D] text-4xl mb-4 leading-none">“</div>

  <!-- Quote Text -->
  <p class="text-[#87745D] text-base leading-relaxed italic mb-8">
    {{ t.text }}
  </p>

  <!-- Divider -->
  <div class="h-px bg-[#D4C5AC] mb-5"></div>

  <!-- Author -->
  <div>
    <div class="text-[#382E25] font-semibold">
      {{ t.name }}
    </div>
    <div class="text-sm text-[#87745D]">
      {{ t.location }}
    </div>
  </div>
</div>

      </div>

      <!-- Right Arrow -->
      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md border
               border-[#E0D7C8] w-10 h-10 rounded-full flex items-center justify-center
               text-[#382E25] text-xl hover:bg-[#F9F5EF] transition z-10"
      >
        ›
      </button>

    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Alexander M.",
          initials: "AM",
          location: "UK Investor",
          text: "ERAK Properties provided exceptional market insights and helped me secure a prime Dubai Marina apartment with excellent ROI potential."
        },
        {
          name:"Karen Jenner ",
          location: "UK",
          text:"Excellent understanding of off-plan and resale opportunities. Every step was explained clearly, making the investment process stress-free."
        },
        {
          name:"William Benner ",
          location: "US",
          text:"As an overseas investor, I needed someone reliable on the ground in Dubai. Lawrence provided clear advice, handled everything professionally, and helped me secure a strong rental return."
        },
        {
          name:"Madhiarasan ",
          location: "Srilanka",
          text:"I have worked with ERAK properties in the Dubai real estate market for several years. His understanding of pricing, locations, and negotiation always delivers results. I fully trust him and his new company."
        },

        {
          name: "Sarah Chen",
          initials: "SC",
          location: "Singapore Investor",
          text: "The team's local expertise and attention to detail made my off-plan investment process seamless from start to finish."
        },
        {
          name: "Mohammed A.",
          initials: "MA",
          location: "UAE Resident",
          text: "Professional, transparent, and truly understands investor needs. Highly recommended for serious Dubai real estate investments."
        },
        {
          name: "Daniel R.",
          initials: "DR",
          location: "Germany Investor",
          text: "Excellent guidance from start to handover. Everything was smooth and well managed."
        },
        {
          name: "Priya K.",
          initials: "PK",
          location: "India Investor",
          text: "Clear communication, honest advice, and strong market knowledge."
        },
        {
          name: "Ahmed S.",
          initials: "AS",
          location: "Qatar Investor",
          text: "ERAK helped me diversify into Dubai with full confidence."
        }
      ]
    }
  },

  methods: {
    scrollLeft() {
      this.$refs.slider.scrollBy({ left: -350, behavior: 'smooth' })
    },
    scrollRight() {
      this.$refs.slider.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }
}
</script>
