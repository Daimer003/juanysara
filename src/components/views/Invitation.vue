<template>
  <div 
  class="flex flex-col w-full max-w-[800px] relative mx-auto bg-texture"
  >
    <div class="flex justify-center  w-full relative">
      <Countdown />
      <!-- Imagen -->
      <div class="relative">
        <img src="https://res.cloudinary.com/diccp2984/image/upload/v1758553940/juan-sara-1440px_lh9rlj.jpg" alt="Pareja en la playa"  class="w-full min-h-[416px] md: h-auto object-cover fade-edges" />

    
      </div>
    </div>
 
    <Information />
    <Club />
    <Map />
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

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Club from '../club/Club.vue';
import Countdown from '../countdown/Countdown.vue';
import Information from '../information/Information.vue';
import Map from '../map/Map.vue';

const isMusicPlaying = ref(true);
let audio1: HTMLAudioElement | null = null;
let audio2: HTMLAudioElement | null = null;

onMounted(() => {
  audio1 = document.getElementById("bg-music-1") as HTMLAudioElement;
  audio2 = document.getElementById("bg-music-2") as HTMLAudioElement;

  // Escuchar cambios de visibilidad
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onBeforeUnmount(() => {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});

const toggleMusic = () => {
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

const handleVisibilityChange = () => {
  if (document.hidden) {
    // Minimizado o cambio de pestaña -> pausar
    const currentAudio = audio2 || audio1;
    if (currentAudio && isMusicPlaying.value) {
      currentAudio.pause();
      isMusicPlaying.value = false;
    }
  } else {
    // Opcional: reanudar cuando vuelve
    // const currentAudio = audio2 || audio1;
    // if (currentAudio && !isMusicPlaying.value) {
    //   currentAudio.play().catch(err => console.warn("Error al reanudar:", err));
    //   isMusicPlaying.value = true;
    // }
  }
};
</script>

<style>

.fade-edges {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
                      linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
               linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  mask-composite: intersect;
  mask-repeat: no-repeat;
  mask-size: cover;
}
</style>