<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div class="relative w-full max-w-[600px] h-screen flex items-center justify-center">
      <!-- Video con bordes difuminados -->
      <video autoplay loop muted playsinline class="h-[100%] w-[100%] object-cover
               [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_45%,transparent_100%)]
               [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]">
        <source src="https://res.cloudinary.com/diccp2984/video/upload/v1758308487/load-boda_mjzo75.mp4"
          type="video/mp4" />
      </video>

      <!-- Degradado superior -->
      <div class="absolute top-0 w-full h-1/3 bg-gradient-to-b from-black/90 via-black/100 to-transparent"></div>

      <!-- Degradado inferior con nombres y cita -->
      <div class="absolute bottom-0 w-full h-1/3 flex flex-col justify-center items-center
                  bg-gradient-to-t from-black/90 via-black/100 to-transparent ">
        <h2 class="text-white text-4xl font-semibold tracking-wide cormorant-garamond">
          Juan & Sara
        </h2>
        <p class="text-white text-center font-cormorant italic text-lg max-w-[500px] px-4 mb-0">
          Por eso dejará el hombre a su padre y a su madre, y se unirá a su
          mujer, y serán una sola carne. <br />
          <span class="text-sm opacity-80">— Génesis 2:24</span>
        </p>
      </div>
    </div>

    <!-- Audio de fondo -->
    <audio id="bg-music" autoplay loop>
      <source src="https://res.cloudinary.com/diccp2984/video/upload/v1758311134/audio-1_jxocvi.mp3" type="audio/mpeg">
      Tu navegador no soporta audio HTML5.
    </audio>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const audio = document.getElementById("bg-music");
  // Forzar play en algunos navegadores que bloquean autoplay
  const playAudio = () => {
    audio.play().catch(() => {});
    document.removeEventListener("click", playAudio);
  };
  document.addEventListener("click", playAudio);
});
</script>