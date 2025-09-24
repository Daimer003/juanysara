<template>
  <div class="flex justify-center bg-texture">
    <div class="w-full max-w-[800px] text-center p-4">
      <!-- Nombres + flor -->
      <div class="flex flex-col items-center">
        <!-- Imagen de flores arriba -->
        <img src="/assets/flores-3.png" alt="Decoración flores" class="w-30 h-auto " />

        <!-- Nombres en fila -->
        <div class="flex items-end space-x-6">
          <!-- Nombre 1 -->
          <div class="text-center">
            <h1 class="font-script text-7xl md:text-8xl text-gray-800">Juan</h1>
            <p class="font-serif text-lg text-gray-700">Guzmán</p>
          </div>

          <!-- "&" en el centro -->
          <p class="font-script text-3xl md:text-4xl text-gray-800 mb-3">&</p>

          <!-- Nombre 2 -->
          <div class="text-center">
            <h1 class="font-script text-7xl md:text-8xl text-gray-800">Sara</h1>
            <p class="font-serif text-lg text-gray-700">Franco</p>
          </div>
        </div>
      </div>

      <!-- Texto principal -->
      <p class="mt-4 font-serif text-base text-gray-700 mt-10">
        Tenemos el honor de invitarlos a celebrar nuestra unión matrimonial
      </p>

      <p class="mt-2 font-serif text-[#793710]">
        <span class="font-script text-4xl">
          {{ companion }}
        </span> — Número de invitados: {{ invitados }}
      </p>

      <!-- Fecha con líneas -->
      <div class="mt-8">
        <div class="flex items-center justify-between text-gray-700">
          <div class="flex-1 border-t border-[#efc289]"></div>
          <span class="px-3 font-serif">Miércoles</span>
          <div class="flex-1 border-t border-[#efc289]"></div>
        </div>

        <p class="mt-2 font-serif text-gray-700">Noviembre</p>
        <h2 class="text-7xl font-serif font-bold text-[#793710]">19</h2>
        <p class="font-serif text-gray-700">2025</p>

        <div class="flex items-center justify-between mt-2 text-gray-700">
          <div class="flex-1 border-t border-[#efc289]"></div>
          <span class="px-3 font-serif">4:00pm</span>
          <div class="flex-1 border-t border-[#efc289]"></div>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <!-- Ceremonia y Recepción -->
      <div class="grid grid-cols-2 gap-0 relative">
        <div class="absolute top-0 bottom-0 left-1/2 border-l border-[#efc289]"></div>

        <div class="pr-6">
          <h3 class="font-serif font-semibold">Ceremonia</h3>
          <p class="text-xs font-serif md:text-sm">4:00pm</p>
          <p class="text-xs font-serif md:text-sm">Forest Campestre</p>
          <p class="text-xs font-serif md:text-sm">Envigado</p>
        </div>

        <div class="pl-6">
          <h3 class="font-serif font-semibold">Recepción</h3>
          <p class="text-xs font-serif md:text-sm">Después de la ceremonia</p>
          <p class="text-xs font-serif md:text-sm">Forest Campestre</p>
          <p class="text-xs font-serif md:text-sm">Envigado</p>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <!-- Dress Code -->
      <div class="text-gray-700">
        <h3 class="font-serif font-semibold">Colores reservados</h3>
        <p class="mt-2 font-serif text-sm">Estos colores están destinados exclusivamente a los novios</p>

        <div class="flex justify-center space-x-8 mt-4">
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full border-2 border-gray-400" style="background: black;"></div>
            <p class="mt-1 text-xs font-serif text-gray-700">Juan Guzmán — Negro</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full border-2 border-gray-400" style="background: white;"></div>
            <p class="mt-1 text-xs font-serif text-gray-700">Sara Franco — Blanco</p>
          </div>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <!-- Colores invitados -->
      <div class="text-gray-700">
        <h3 class="font-serif font-semibold">Colores sugeridos para invitados</h3>
        <p class="mt-2 font-serif">Smoking para los hombres en colores tierra o gris</p>
        <p class="font-serif">Para las mujeres solo colores tierra</p>
      </div>

      <!-- Vestimenta interactiva -->
      <div class="mt-6 grid grid-cols-2 gap-3 items-start">
        <!-- HOMBRES -->
        <div class="flex flex-col items-center">
          <div class="relative w-full max-w-[320px]">
            <img :src="manImages[selectedMan]" alt="Smoking hombre"
              class="w-full h-auto shadow-md object-cover" />
          </div>
          <p class="mt-3 font-serif text-sm text-gray-700">Hombres — elija color</p>

          <div class="flex items-center space-x-4 mt-3 flex-wrap justify-center">
            <button
              v-for="(color, key) in manColors"
              :key="key"
              @click="selectedMan = key"
              :aria-pressed="selectedMan === key"
              class="w-10 h-10 rounded-full border-2 flex items-center justify-center focus:outline-none transition"
              :class="selectedMan === key ? 'ring-2 ring-[#efc289] border-[#efc289]' : 'border-gray-300'"
              :title="color.name"
              :style="{ background: color.hex }">
            </button>
          </div>
        </div>

        <!-- MUJERES -->
        <div class="flex flex-col items-center">
          <div class="relative w-full max-w-[320px]">
            <img :src="womanImages[selectedWoman]" alt="Vestido mujer"
              class="w-full h-auto shadow-md object-cover" />
          </div>
          <p class="mt-3 font-serif text-sm text-gray-700">Mujeres — elija color</p>

          <div class="flex flex-wrap justify-center gap-3 mt-3">
            <button
              v-for="(color, key) in womanColors"
              :key="key"
              @click="selectedWoman = key"
              :aria-pressed="selectedWoman === key"
              class="w-10 h-10 rounded-full border-2 flex items-center justify-center focus:outline-none transition"
              :class="selectedWoman === key ? 'ring-2 ring-[#efc289] border-[#efc289]' : 'border-gray-300'"
              :title="color.name"
              :style="{ background: color.hex }">
            </button>
          </div>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <!-- Confirmación -->
      <div class="flex items-center justify-between text-gray-700">
        <div class="flex-1 border-t border-[#efc289]"></div>
        <span class="px-3 font-serif">Confirma tu asistencia</span>
        <div class="flex-1 border-t border-[#efc289]"></div>
      </div>

      <div class="flex justify-center mt-4">
        <button @click="confirmarAsistencia"
          class="px-6 w-full h-[50px] py-2 bg-[#793710] text-white font-small font-serif shadow-md hover:bg-[#793720] transition-colors">
          Confirmar
        </button>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <p class="mt-2 font-serif text-gray-700">
        Nuestra felicidad solo está completa cuando la compartimos con las personas a las que amamos
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Capitalizar palabras
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const rawCompanion = route.query.companion || "Invitado";
const companion = capitalizeWords(rawCompanion.replace(/-/g, " "));
const invitados = route.query.invitados || 1;

// Hombre colores + imágenes
const selectedMan = ref("terracota");
const manColors = {
  terracota: { name: "Terracota", hex: "#b35832" },
  azul: { name: "Azul Marino", hex: "#1a2a44" },
  oxido: { name: "Óxido", hex: "#a0522d" },
  oliva: { name: "Verde Oliva", hex: "#556b2f" },
  gris: { name: "Gris", hex: "#9e9e9e" },
  matcha: { name: "Matcha", hex: "#6b8e23" }
};
const manImages = {
  terracota: "https://res.cloudinary.com/diccp2984/image/upload/v1758736374/Mask_group_tbepox.jpg",
  azul: "https://res.cloudinary.com/diccp2984/image/upload/v1758736374/Mask_group_1_gioydf.jpg",
  oxido: "https://res.cloudinary.com/diccp2984/image/upload/v1758736373/Mask_group_2_w4altc.jpg",
  oliva: "https://res.cloudinary.com/diccp2984/image/upload/v1758736373/Mask_group_3_vsrrnv.jpg",
  gris: "https://res.cloudinary.com/diccp2984/image/upload/v1758736373/Mask_group_4_lci2so.jpg",
  matcha: "https://res.cloudinary.com/diccp2984/image/upload/v1758736373/Mask_group_5_bsalqx.jpg"
};

// Mujer colores + imágenes
const selectedWoman = ref("terracota");
const womanColors = {
  terracota: { name: "Terracota", hex: "#b35832" },
  matcha: { name: "Matcha", hex: "#809671" },
  pistacho: { name: "Pistacho", hex: "#B3B792" },
  azul: { name: "Azul Suave", hex: "#87a6c0" }
};
const womanImages = {
  terracota: "https://res.cloudinary.com/diccp2984/image/upload/v1758736374/Mask_group_10_crpzme.jpg",
  matcha: "https://res.cloudinary.com/diccp2984/image/upload/v1758736374/Mask_group_7_qvjivh.jpg",
  pistacho: "https://res.cloudinary.com/diccp2984/image/upload/v1758736374/Mask_group_8_yg01hj.jpg",
  azul: "https://res.cloudinary.com/diccp2984/image/upload/v1758736373/Mask_group_9_qonegx.jpg"
};

// WhatsApp confirmación
const telefono = "573125660618";
function confirmarAsistencia() {
  const mensaje = `Confirmación de asistencia:\n\nInvitado principal: ${companion}\nNúmero de invitados: ${invitados}`;
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.location.href = url;
}
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