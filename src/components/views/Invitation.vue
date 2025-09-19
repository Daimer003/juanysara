<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white relative"
  >
    <h1 class="text-5xl font-bold mb-6 text-gray-900">
      🌸 Invitación de Boda 🌸
    </h1>
    <p class="text-lg text-gray-700 max-w-[600px] text-center">
      Con la bendición de Dios y nuestras familias, tenemos el honor de invitarte a
      celebrar nuestra unión.
      <br /><br />
      📍 Medellín, Colombia <br />
      📅 14 de Diciembre, 2025
    </p>

    <!-- Audio de la invitación -->
    <audio id="invitation-music" loop>
      <source
        src="https://res.cloudinary.com/diccp2984/video/upload/v1758315071/audio-2_wfumoa.mp3"
        type="audio/mpeg"
      />
      Tu navegador no soporta audio HTML5.
    </audio>
  </div>
</template>

<script setup>
import { onMounted } from "vue"

onMounted(() => {
  const audio = document.getElementById("invitation-music")
  if (audio) {
    audio.volume = 0.8
    // El play está garantizado porque el loader ya desbloqueó el audio
    audio.play().catch((err) => console.warn("Autoplay bloqueado:", err))
  }
})
</script>