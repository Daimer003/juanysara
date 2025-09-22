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
      <div class="grid grid-cols-2 gap-6 relative">
        <!-- Línea vertical -->
        <div class="absolute top-0 bottom-0 left-1/2 border-l border-[#efc289]"></div>

        <div class="pr-6">
          <h3 class="font-semibold">Ceremonia</h3>
          <p>4:00pm</p>
          <p>Forest Campestre</p>
          <p>Envigado</p>
        </div>

        <div class="pl-6">
          <h3 class="font-semibold">Recepción</h3>
          <p>Después de la ceremonia</p>
          <p>Forest Campestre</p>
          <p>Envigado</p>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-[#efc289] my-8"></div>

      <!-- Dress Code -->
      <div class="text-gray-700">
        <h3 class="font-serif font-semibold">Dress Code</h3>
        <p class="mt-2">Smoking para los hombres (color negro o colores tierra)</p>
        <p>Para las mujeres solo colores tierra</p>
      </div>

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
          class="px-6 w-full h-[50px] py-2 bg-[#793710] text-white font-small font-serif rounded-lg shadow-md hover:bg-[#793720] transition-colors">
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
// Solo maquetación, sin lógica dinámica aún
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