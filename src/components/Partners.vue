<template>
<section class="fade-up bg-[#F3EBDC] py-16">
  <div class="max-w-7xl mx-auto px-6 md:px-8 text-center">

    <h3 class="text-4xl font-extrabold text-[#382E25] mb-4">Our Trusted Partners</h3>
    <p class="text-[#7A654A] text-sm md:text-base mb-10 max-w-3xl mx-auto">
      We collaborate with leading developers and institutions to bring our investors 
      access to high-quality opportunities across Dubai and the UAE.
    </p>

    <div class="relative max-w-6xl mx-auto">

      <!-- Left Arrow -->
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md border 
               border-[#E0D7C8] w-10 h-10 rounded-full flex items-center justify-center 
               text-[#382E25] text-xl hover:bg-[#F9F5EF] transition z-10"
      >
        &lt;
      </button>

      <!-- Slider Wrapper -->
      <div
        ref="slider"
        class="flex gap-6 overflow-x-auto scroll-smooth px-14 py-4 no-scrollbar"
      >
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="min-w-[160px] h-[120px] rounded-2xl bg-[#F8F3EA] border border-[#E8DFD3] 
                 flex items-center justify-center shadow-sm cursor-pointer 
                 hover:shadow-md hover:scale-[1.02] transition"
        >
          <img :src="partner.logo" :alt="partner.name" class="h-12 object-contain" />
        </div>
      </div>

      <!-- Right Arrow -->
      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md border 
               border-[#E0D7C8] w-10 h-10 rounded-full flex items-center justify-center 
               text-[#382E25] text-xl hover:bg-[#F9F5EF] transition z-10"
      >
        &gt;
      </button>

    </div>

  </div>
</section>
</template>
<script>
export default {
  data() {
    return {
      partners: [
        { name: "Omniyat",   logo: "/src/assets/images/omniyat.png" },
        { name: "Binghatti", logo: "/src/assets/images/binghatti.png" },
        { name: "Damac",     logo: "/src/assets/images/damac.png" },
        { name: "Ellington", logo: "/src/assets/images/ellington.png" },
        { name: "Emaar",     logo: "/src/assets/images/emaar.png" },
        { name: "Meraas",    logo: "/src/assets/images/meeras.png" },
        { name: "Nakheel",   logo: "/src/assets/images/nakheel.png" },
        { name: "Sobha",     logo: "/src/assets/images/sobha.png" }
      ]
    };
  },

  methods: {
    scrollLeft() {
      this.$refs.slider.scrollBy({ left: -250, behavior: "smooth" });
    },
    scrollRight() {
      this.$refs.slider.scrollBy({ left: 250, behavior: "smooth" });
    }
  }
};
</script>
