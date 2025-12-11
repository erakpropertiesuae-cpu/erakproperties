<template>
<section class="relative overflow-hidden text-center pt-20">

  <!-- HERO IMAGE BACKGROUND -->
  <div class="absolute inset-0 z-0">
    <img
      src="/src/assets/images/dubai-hero.jpg"
      alt="Dubai skyline"
      class="w-full h-[78vh] object-cover brightness-50"
    />

    <!-- TOP DARK GRADIENT -->
    <div class="absolute inset-0 bg-gradient-to-b from-shadow/90 via-shadow/70 to-shadow/40"></div>

    <!-- **BOTTOM FADE INTO BEIGE SECTION** -->
    <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#D4C5AC]"></div>
  </div>

  <!-- HERO CONTENT -->
  <div class="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 ">
    <div class="max-w-4xl mx-auto space-y-6">

      <div class="text-[#D4C5AC] text-sm sm:text-base font-medium tracking-widest uppercase">
        DUBAI REAL ESTATE INVESTMENTS
      </div>
            <!-- <div class="text-xs tracking-[0.3em] text-[#D4C5AC] mt-1 uppercase"> -->


      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight">
        Your Trusted Property<br />Investment Advisor
      </h1>

      <p class="mt-6 text-base md:text-lg text-[#D4C5AC] mx-auto leading-relaxed">
        Connecting global capital with high-potential assets in Dubai.
      </p>

      <div class="flex items-center justify-center pt-6">
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-[#D4C5AC] hover:bg-[#D4C5AC]/90 text-[#382E25] border-none shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto text-base sm:text-lg px-8 py-6"
        >
          Contact Us
        </button>
      </div>
<div class="-pt-2"></div>
<div class="-pt-2"></div>
    </div>
  </div>
  <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand to-transparent z-10"></div>

</section>
</template>
