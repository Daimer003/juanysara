<template>
  <div class="flex justify-center w-full bg-texture min-h-screen">

    <!-- Loader con video -->
    <transition name="fade">
      <div v-if="showLoader" class="fixed inset-0 z-50 flex items-center justify-center bg-[#fdf6f1]">
        <!-- Video de fondo -->
        <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover
                 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_45%,transparent_100%)]
                 [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]">
          <source src="https://res.cloudinary.com/diccp2984/video/upload/v1758308487/load-boda_mjzo75.mp4"
            type="video/mp4" />
        </video>

        <!-- Degradado superior -->
        <div class="absolute top-0 w-full h-1/3 bg-gradient-to-b from-[#fdf6f1]/90 via-[#fdf6f1]/100 to-transparent">
        </div>

        <!-- Degradado inferior con nombres, cita y botones -->
        <div class="absolute bottom-0 w-full h-1/3 flex flex-col justify-center items-center
                 bg-gradient-to-t from-[#fdf6f1]/90 via-[#fdf6f1]/100 to-transparent">
          <h2 class="text-gray-800 tracking-wide font-script text-6xl mb-2">
            Juan & Sara
          </h2>
          <p class="text-gray-700 text-center font-serif italic text-md max-w-[500px] px-4 mb-3">
            Por eso dejará el hombre a su padre y a su madre, y se unirá a su
            mujer, y serán una sola carne. <br />
            <span class="text-sm font-serif opacity-80">— Génesis 2:24</span>
          </p>

          <!-- Botón con contador -->
          <button @click="startInvitation" :disabled="isCounting" class="bg-gray-800/20 text-gray-800 px-6 py-2 rounded-full 
                   border border-gray-800/40 backdrop-blur-sm 
                   hover:bg-gray-800/30 transition disabled:opacity-50 disabled:cursor-not-allowed mb-2">
            {{
              isCounting
                ? `Cargando invitación... (${countdown})`
                : "Ver la invitación"
            }}
          </button>

          <!-- Botón para pausar/reanudar música -->
          <button @click="toggleMusic" class="fixed bottom-4 right-4 z-50 bg-gray-800/20 text-gray-800 px-4 py-2 rounded-full 
         border border-gray-800/40 backdrop-blur-sm hover:bg-gray-800/30 transition">
            {{ isMusicPlaying ? "⏸️" : "▶️" }}
          </button>
        </div>

        <!-- Audio del loader -->
        <audio id="bg-music-1" loop>
          <source src="https://res.cloudinary.com/diccp2984/video/upload/v1758311134/audio-1_jxocvi.mp3"
            type="audio/mpeg" />
          Tu navegador no soporta audio HTML5.
        </audio>
      </div>
    </transition>

    <!-- Audio de la invitación -->
    <audio id="bg-music-2" loop></audio>

    <!-- Página de invitación -->
    <transition name="fade">
      <Invitation v-if="!showLoader" />
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Invitation from "../views/Invitation.vue"

const showLoader = ref(true)
const countdown = ref(11)
const isCounting = ref(false)
const isMusicPlaying = ref(true) // estado para el botón

let interval = null
let audio1 = null
let audio2 = null
let fadingStarted = false // 👈 bandera para no repetir fadeOut

// Función para hacer fade out
function fadeOut(audio, duration = 3000) {
  if (!audio) return
  const step = audio.volume / (duration / 100)
  const fade = setInterval(() => {
    if (audio.volume > step) {
      audio.volume = Math.max(0, audio.volume - step)
    } else {
      audio.volume = 0
      clearInterval(fade)
      audio.pause()
      audio.currentTime = 0
    }
  }, 100) // cada 100ms baja volumen
}

// Función para hacer fade in
function fadeIn(audio, targetVolume = 0.7, duration = 3000) {
  if (!audio) return
  audio.volume = 0
  audio.play().catch((err) => console.warn("Autoplay bloqueado:", err))
  const step = targetVolume / (duration / 100)
  const fade = setInterval(() => {
    if (audio.volume < targetVolume - step) {
      audio.volume = Math.min(targetVolume, audio.volume + step)
    } else {
      audio.volume = targetVolume
      clearInterval(fade)
    }
  }, 100) // cada 100ms sube volumen
}

const startInvitation = async () => {
  audio1 = document.getElementById("bg-music-1")
  audio2 = document.getElementById("bg-music-2")

  // asignamos la fuente de audio 2
  audio2.src =
    "https://res.cloudinary.com/diccp2984/video/upload/v1758315071/audio-2_wfumoa.mp3"

  if (audio1) {
    audio1.volume = 1
    await audio1.play().catch((err) => console.warn("Autoplay bloqueado:", err))
  }

  isCounting.value = true

  interval = setInterval(async () => {
    countdown.value--

    // 👇 Cuando llegue a 5 empieza fadeOut
    if (countdown.value === 5 && !fadingStarted) {
      fadeOut(audio1, 5000) // 5 segundos de fade
      fadingStarted = true
    }

    if (countdown.value === 0) {
      clearInterval(interval)

      // fade in de la segunda canción
      fadeIn(audio2, 0.7, 4000)

      showLoader.value = false
    }
  }, 1000)
}

// Función para pausar/reanudar música
const toggleMusic = () => {
  const currentAudio = !showLoader.value ? audio2 : audio1
  if (currentAudio) {
    if (isMusicPlaying.value) {
      currentAudio.pause()
      isMusicPlaying.value = false
    } else {
      currentAudio.play().catch((err) => console.warn("Error al reanudar:", err))
      isMusicPlaying.value = true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600&display=swap');

.font-script {
  font-family: 'Great Vibes', cursive;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

.bg {
  background-color: #8a008a;
  background-image: url(http://www.transparenttextures.com/patterns/concrete-wall-3.png);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>