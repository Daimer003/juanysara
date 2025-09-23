<template>
  <div class="flex justify-center mt-8 w-full text-center absolute z-50">
    <!-- Título -->
    <div class="flex items-center justify-between text-gray-700 mb-4">
      <div class="flex-1 border-t border-[#efc289]"></div>
      <span class="px-3 font-serif">Faltan</span>
      <div class="flex-1 border-t border-[#efc289]"></div>
    </div>

    <!-- Contador -->
    <div class="grid grid-cols-4 gap-4 justify-center">
      <!-- Días -->
      <div class="flex flex-col items-center">
        <span class="text-4xl md:text-5xl font-script font-bold text-[#793710]">{{ timeLeft.days }}</span>
        <span class="font-serif text-sm font-script text-gray-700">Días</span>
      </div>
      <!-- Horas -->
      <div class="flex flex-col items-center">
        <span class="text-4xl md:text-5xl font-script font-bold text-[#793710]">{{ timeLeft.hours }}</span>
        <span class="font-serif text-sm font-script text-gray-700">Horas</span>
      </div>
      <!-- Minutos -->
      <div class="flex flex-col items-center">
        <span class="text-4xl md:text-5xl font-script font-bold text-[#793710]">{{ timeLeft.minutes }}</span>
        <span class="font-serif text-sm font-script text-gray-700">Min</span>
      </div>
      <!-- Segundos -->
      <div class="flex flex-col items-center">
        <span class="text-4xl md:text-5xl font-script font-bold text-[#793710]">{{ timeLeft.seconds }}</span>
        <span class="font-serif text-sm font-script text-gray-700">Seg</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Fecha del gran evento (ejemplo: 19 Noviembre 2025, 16:00)
const targetDate = new Date("2025-11-19T16:00:00");

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return;
  }

  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

let interval;
onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600&display=swap');

.font-script {
  font-family: 'Great Vibes', cursive;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>