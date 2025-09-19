<template>
  <div>
    <!-- Loader -->
    <transition name="fade">
      <div v-if="showLoader" class="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <!-- Botón -->
        <button @click="startInvitation" :disabled="isCounting">
          {{ isCounting ? `Cargando invitación... (${countdown})` : "Ver la invitación" }}
        </button>

        <!-- Música loader -->
        <audio id="bg-music" loop>
          <source src="https://res.cloudinary.com/diccp2984/video/upload/v1758311134/audio-1_jxocvi.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </transition>

    <!-- Invitation con prop para activar música -->
    <transition name="fade">
      <Invitation v-if="!showLoader" :startMusic="playInvitationMusic" />
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Invitation from "../views/Invitation.vue"

const showLoader = ref(true)
const countdown = ref(10)
const isCounting = ref(false)
const playInvitationMusic = ref(false)

const startInvitation = () => {
  const audio = document.getElementById("bg-music")
  if (audio) {
    audio.volume = 1
    audio.play().catch(err => console.warn("Autoplay bloqueado:", err))
  }

  isCounting.value = true
  const interval = setInterval(() => {
    countdown.value--

    if (countdown.value <= 3 && audio) {
      audio.volume = Math.max(0, audio.volume - 0.33)
    }

    if (countdown.value === 0) {
      clearInterval(interval)
      showLoader.value = false
      if (audio) audio.pause()
      playInvitationMusic.value = true // 🔑 Disparamos la música de Invitation
    }
  }, 1000)
}
</script>