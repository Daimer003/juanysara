<script setup>
import loaderVideo from "@/assets/video/load-boda.mp4";
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div class="relative w-full max-w-[600px] h-screen flex items-center justify-center">
      <!-- Video con bordes difuminados -->
      <video autoplay loop muted playsinline class="h-[100%] w-[100%] object-cover
               [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_45%,transparent_100%)]
               [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]">
        <source :src="loaderVideo" type="video/mp4" />
      </video>

      <div class="absolute bottom-0 w-full h-1/3 flex items-end justify-center
                  bg-gradient-to-t from-black/90 via-black/100 to-transparent">
        <h2 class="text-white text-3xl font-semibold tracking-wide mb-20 cormorant-garamond text-5xl ">
          Juan & Sara
        </h2>
      </div>
    </div>
  </div>
</template>