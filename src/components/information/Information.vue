<template>
  <div class="flex justify-center bg-[#fdf6f1]">
    <div class="w-full max-w-[800px] text-center p-4">
      <!-- Nombres -->

      <!-- Nombres + flor -->
      <div class="flex flex-col items-center">
        <!-- Imagen de flores arriba -->
        <img src="/assets/flores-3.png" alt="Decoración flores" class="w-40 h-auto mb-6" />

        <!-- Nombres en fila -->
        <div class="flex items-end space-x-6">
          <!-- Nombre 1 -->
          <div class="text-center">
            <h1 class="font-script text-7xl md:text-8xl text-gray-800">Juan</h1>
            <p class="font-serif text-lg text-gray-700">Guzmán</p>
          </div>

          <!-- "y" en el centro -->
          <p class="font-script text-3xl md:text-4xl text-gray-800 mb-3">y</p>

          <!-- Nombre 2 -->
          <div class="text-center">
            <h1 class="font-script text-7xl md:text-8xl text-gray-800">Sara</h1>
            <p class="font-serif text-lg text-gray-700">Franco</p>
          </div>
        </div>
      </div>


      <!-- Texto principal -->
      <p class="mt-4 font-serif text-base text-gray-700">
        Tenemos el honor de invitarlos a celebrar nuestra unión matrimonial
      </p>

      <!-- Fecha con líneas -->
      <div class="mt-8">
        <div class="flex items-center justify-between text-gray-700">
          <div class="flex-1 border-t border-[#efc289]"></div>
          <span class="px-3 font-serif">Miércoles</span>
          <div class="flex-1 border-t border-[#efc289]"></div>
        </div>

        <p class="mt-2 font-serif text-gray-700">Noviembre</p>
        <h2 class="text-6xl font-bold text-[#793710]">19</h2>
        <p class="font-serif text-gray-700">2025</p>

        <div class="flex items-center justify-between mt-2 text-gray-700">
          <div class="flex-1 border-t border-[#efc289]"></div>
          <span class="px-3 font-serif">4:00pm</span>
          <div class="flex-1 border-t border-[#efc289]"></div>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <!-- Ceremonia y Recepción con línea vertical -->
      <div class="grid grid-cols-2 gap-0 relative">
        <!-- Línea vertical -->
        <div class="absolute top-0 bottom-0 left-1/2 border-l border-[#efc289]"></div>

        <div class="pr-6">
          <h3 class="font-semibold">Ceremonia</h3>
          <p class="text-xs font-serif  md:text-lg">4:00pm</p>
          <p class="text-xs font-serif md:text-lg">Forest Campestre</p>
          <p class="text-xs font-serif md:text-lg">Envigado</p>
        </div>

        <div class="pl-6">
          <h3 class="font-semibold">Recepción</h3>
          <p class="text-xs font-serif md:text-lg">Después de la ceremonia</p>
          <p class="text-xs font-serif md:text-lg">Forest Campestre</p>
          <p class="text-xs font-serif md:text-lg">Envigado</p>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <!-- Dress Code (texto original) -->
      <div class="text-gray-700">
        <h3 class="font-serif font-semibold">Dress Code</h3>
        <p class="mt-2">Smoking para los hombres (color negro o colores tierra)</p>
        <p>Para las mujeres solo colores tierra</p>
      </div>

      <!-- ============================
           Sección añadida: imágenes con selectores de color
           ============================ -->
      <div class="mt-6 grid grid-cols-2 gap-3 items-start">
        <!-- HOMBRES: imagen + selectores -->
        <div class="flex flex-col items-center">
          <div class="relative w-full max-w-[320px]">
            <!-- imagen que cambia según selección -->
            <img
              :src="selectedMan === 'tierra' ? '/assets/c-tierra.jpg' : '/assets/c-negro.jpg'"
              alt="Smoking hombre"
              class="w-full h-auto shadow-md object-cover"
            />
            <!-- pequeño overlay degradado para que combine con el diseño -->
          </div>

          <!-- etiquetas -->
          <p class="mt-3 font-serif text-sm text-gray-700">Hombres — elija color</p>

          <!-- opciones de color -->
          <div class="flex items-center space-x-4 mt-3">
            <!-- Negro -->
            <button
              @click="selectedMan = 'negro'"
              :aria-pressed="selectedMan === 'negro'"
              class="w-10 h-10 rounded-full border-2 flex items-center justify-center focus:outline-none transition"
              :class="selectedMan === 'negro' ? 'ring-2 ring-[#efc289] border-[#efc289]' : 'border-gray-300'"
              title="Negro"
              style="background: black"
            ></button>

            <!-- Tierra -->
            <button
              @click="selectedMan = 'tierra'"
              :aria-pressed="selectedMan === 'tierra'"
              class="w-10 h-10 rounded-full border-2 flex items-center justify-center focus:outline-none transition"
              :class="selectedMan === 'tierra' ? 'ring-2 ring-[#efc289] border-[#efc289]' : 'border-gray-300'"
              title="Tierra"
              style="background: #a17c56"
            ></button>
          </div>
        </div>

        <!-- MUJERES: imagen + indicador de color tierra -->
        <div class="flex flex-col items-center">
          <div class="relative w-full max-w-[320px]">
            <img
              src="/assets/c-tierra-d.jpg"
              alt="Vestido mujer - color tierra"
              class="w-full h-auto shadow-md object-cover"
            />
          </div>

          <p class="mt-3 font-serif text-sm text-gray-700">Mujeres — color recomendado</p>

          <div class="flex justify-center mt-3">
            <div
              class="w-10 h-10 rounded-full border-2 border-[#efc289]"
              style="background: #a17c56"
              title="Tierra"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
      <!-- ============================ fin sección añadida ============================ -->

      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <!-- Nota con líneas -->
      <div class="flex items-center justify-between text-gray-700">
        <div class="flex-1 border-t border-[#efc289]"></div>
        <span class="px-3 font-serif">Confirma tu asistencia</span>
        <div class="flex-1 border-t border-[#efc289]"></div>
      </div>

      <!-- Botón de confirmación -->
      <div class="flex justify-center mt-4">
        <button
          class="px-6 w-full h-[50px] py-2 bg-[#793710] text-white font-small font-serif shadow-md hover:bg-[#793720] transition-colors">
          Confirmar
        </button>
      </div>


      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <!-- Frase -->
      <p class="mt-2 font-serif text-gray-700">
        Nuestra felicidad solo está completa cuando la compartimos con las personas a las que amamos
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedMan = ref("tierra"); // valor inicial (negro o tierra)
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