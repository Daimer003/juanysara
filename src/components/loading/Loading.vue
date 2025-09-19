<template>
  <div>
    <!-- Loader con video -->
    <transition name="fade">
      <div
        v-if="showLoader"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <!-- Video de fondo -->
        <video
          autoplay
          loop
          muted
          playsinline
          class="absolute inset-0 w-full h-full object-cover
                 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_45%,transparent_100%)]
                 [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]"
        >
          <source
            src="https://res.cloudinary.com/diccp2984/video/upload/v1758308487/load-boda_mjzo75.mp4"
            type="video/mp4"
          />
        </video>

        <!-- Degradado superior -->
        <div
          class="absolute top-0 w-full h-1/3 bg-gradient-to-b from-black/90 via-black/100 to-transparent"
        ></div>

        <!-- Degradado inferior con nombres, cita y botón -->
        <div
          class="absolute bottom-0 w-full h-1/3 flex flex-col justify-center items-center
                 bg-gradient-to-t from-black/90 via-black/100 to-transparent"
        >
          <h2 class="text-white text-4xl font-semibold tracking-wide cormorant-garamond">
            Juan & Sara
          </h2>
          <p
            class="text-white text-center font-cormorant italic text-lg max-w-[500px] px-4 mb-4"
          >
            Por eso dejará el hombre a su padre y a su madre, y se unirá a su
            mujer, y serán una sola carne. <br />
            <span class="text-sm opacity-80">— Génesis 2:24</span>
          </p>

          <!-- Botón con contador -->
          <button
            @click="startInvitation"
            :disabled="isCounting"
            class="bg-white/20 text-white px-6 py-2 rounded-full 
                   border border-white/40 backdrop-blur-sm 
                   hover:bg-white/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isCounting ? `Cargando invitación... (${countdown})` : "Ver la invitación" }}
          </button>
        </div>

        <!-- Audio -->
        <audio id="bg-music" loop>
          <source
            src="https://res.cloudinary.com/diccp2984/video/upload/v1758311134/audio-1_jxocvi.mp3"
            type="audio/mpeg"
          />
          Tu navegador no soporta audio HTML5.
        </audio>
      </div>
    </transition>

    <!-- Página de invitación -->
    <transition name="fade">
      <div
        v-if="!showLoader"
        class="min-h-screen flex flex-col items-center justify-center bg-white"
      >
        <h1 class="text-5xl font-bold mb-6 text-gray-900">🌸 Invitación de Boda 🌸</h1>
        <p class="text-lg text-gray-700 max-w-[600px] text-center">
          Con la bendición de Dios y nuestras familias, tenemos el honor de invitarte a
          celebrar nuestra unión.  
          <br /><br />
          📍 Medellín, Colombia <br />
          📅 14 de Diciembre, 2025
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue"

const showLoader = ref(true)
const countdown = ref(20) // segundos
const isCounting = ref(false)

const startInvitation = () => {
  const audio = document.getElementById("bg-music")
  if (audio) {
    audio.volume = 1 // inicio con volumen normal
    audio.play().catch((err) => console.warn("Autoplay bloqueado:", err))
  }

  isCounting.value = true

  const interval = setInterval(() => {
    countdown.value--

    // En los últimos 3 segundos bajamos gradualmente el volumen
    if (countdown.value <= 3 && audio) {
      const newVolume = Math.max(0, audio.volume - 0.33) // baja en 3 pasos
      audio.volume = newVolume
    }

    if (countdown.value === 0) {
      clearInterval(interval)
      showLoader.value = false
      if (audio) audio.pause() // detenemos el audio al terminar la transición
    }
  }, 1000)
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>