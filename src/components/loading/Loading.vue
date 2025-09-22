<template>
  <div class="flex justify-center w-full bg-[#fdf6f1] min-h-screen">
    
    <!-- Loader con video -->
    <transition name="fade">
      <div
        v-if="showLoader"
        class="fixed inset-0 z-50 flex items-center justify-center bg-[#fdf6f1]"
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
          class="absolute top-0 w-full h-1/3 bg-gradient-to-b from-[#fdf6f1]/90 via-[#fdf6f1]/100 to-transparent"
        ></div>

        <!-- Degradado inferior con nombres, cita y botón -->
        <div
          class="absolute bottom-0 w-full h-1/3 flex flex-col justify-center items-center
                 bg-gradient-to-t from-[#fdf6f1]/90 via-[#fdf6f1]/100 to-transparent"
        >
          <h2
            class="text-gray-800  tracking-wide font-script text-6xl mb-2"
          >
            Juan & Sara
          </h2>
          <p
            class="text-gray-700 text-center font-serif italic text-md max-w-[500px] px-4 mb-4"
          >
            Por eso dejará el hombre a su padre y a su madre, y se unirá a su
            mujer, y serán una sola carne. <br />
            <span class="text-sm font-serif opacity-80">— Génesis 2:24</span>
          </p>

          <!-- Botón con contador -->
          <button
            @click="startInvitation"
            :disabled="isCounting"
            class="bg-gray-800/20 text-gray-800 px-6 py-2 rounded-full 
                   border border-gray-800/40 backdrop-blur-sm 
                   hover:bg-gray-800/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{
              isCounting
                ? `Cargando invitación... (${countdown})`
                : "Ver la invitación"
            }}
          </button>
        </div>

        <!-- Audio del loader -->
        <audio id="bg-music-1" loop>
          <source
            src="https://res.cloudinary.com/diccp2984/video/upload/v1758311134/audio-1_jxocvi.mp3"
            type="audio/mpeg"
          />
          Tu navegador no soporta audio HTML5.
        </audio>
      </div>
    </transition>

    <!-- Audio de la invitación fuera del loader -->
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
const countdown = ref(20) // segundos
const isCounting = ref(false)

let interval = null
let audio1 = null
let audio2 = null

const startInvitation = async () => {
  audio1 = document.getElementById("bg-music-1")
  audio2 = document.getElementById("bg-music-2")

  // asignamos la fuente de audio 2
  audio2.src = "https://res.cloudinary.com/diccp2984/video/upload/v1758315071/audio-2_wfumoa.mp3"

  if (audio1) {
    audio1.volume = 1
    await audio1.play().catch((err) => console.warn("Autoplay bloqueado:", err))
  }

  isCounting.value = true

  interval = setInterval(async () => {
    countdown.value--

    // Fade out de la primera canción en los últimos 3 segundos
    if (countdown.value <= 3 && audio1) {
      audio1.volume = Math.max(0, audio1.volume - 0.33)
    }

    if (countdown.value === 0) {
      clearInterval(interval)

      // Detenemos primera canción
      if (audio1) {
        audio1.pause()
        audio1.currentTime = 0
      }

      // Arrancamos segunda canción sin límite de tiempo
      if (audio2) {
        audio2.volume = 0.7
        audio2.loop = true
        await audio2.play().catch((err) => console.warn("Reproducción bloqueada:", err))
      }

      // Mostramos la invitación
      showLoader.value = false
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600&display=swap');

.font-script {
  font-family: 'Great Vibes', cursive;
}
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>