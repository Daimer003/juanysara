<template>
  <div class="flex flex-col w-full max-w-[800px] relative mx-auto">
    <div class="flex justify-center bg-[#fdf6f1] w-full relative">
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

    <!-- Botón fijo para pausar/reanudar música -->
    <button
      @click="toggleMusic"
      class="fixed bottom-4 right-4 z-50 bg-gray-800/20 text-gray-800 px-4 py-2 rounded-full 
             border border-gray-800/40 backdrop-blur-sm hover:bg-gray-800/30 transition"
    >
      {{ isMusicPlaying ? "⏸️ Pausar música" : "▶️ Reanudar música" }}
    </button>
  </div>
</template>

<script setup>
import Club from '../club/Club.vue';
import Countdown from '../countdown/Countdown.vue';
import Information from '../information/Information.vue';
import { ref } from 'vue';

const isMusicPlaying = ref(true);
let audio1 = document.getElementById("bg-music-1");
let audio2 = document.getElementById("bg-music-2");

// Función para pausar/reanudar música
const toggleMusic = () => {
  // Elegimos qué audio está activo
  const currentAudio = audio2 || audio1;
  if (currentAudio) {
    if (isMusicPlaying.value) {
      currentAudio.pause();
      isMusicPlaying.value = false;
    } else {
      currentAudio.play().catch(err => console.warn("Error al reanudar:", err));
      isMusicPlaying.value = true;
    }
  }
};
</script>