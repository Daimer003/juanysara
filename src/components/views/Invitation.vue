<template>
  <div class="flex flex-col w-full  w-full max-w-[800px] ">
    <div class="bg-[#fdf6f1] w-full relative">
      <Countdown />
      <!-- Imagen -->
      <div class="relative">
        <img src="/assets/juan-sara.jpeg" alt="Pareja en la playa" class="w-full object-cover" />

        <!-- Degradado inferior encima de la imagen -->
        <div
          class="absolute bottom-0 w-full h-[220px] bg-gradient-to-t from-[#fdf6f1] via-[#fdf6f1]/80 to-transparent z-10">
        </div>
      </div>
    </div>
 
    <Information />
    <Club />


  </div>
</template>

<script setup>
import Club from '../club/Club.vue';
import Countdown from '../countdown/Countdown.vue';
import Information from '../information/Information.vue';

// No necesitas lógica por ahora, es puramente UI
</script>

<style scoped>
/* Aquí puedes importar una fuente cursiva elegante si quieres */
</style>