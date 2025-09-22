<template>
  <div class="flex justify-center bg-[#fdf6f1]">
    <div class="w-full max-w-[800px] text-center p-12">
      <!-- Nombres -->
      <div class="mb-2">
        <h1 class="font-script text-8xl text-gray-800">Juan</h1>
        <p class="font-serif text-lg text-gray-700">Guzman</p>
      </div>

      <p class="font-script text-3xl text-gray-800 mb-6">y</p>

      <div class="mb-2">
        <h1 class="font-script text-8xl text-gray-800">Sara</h1>
        <p class="font-serif text-lg text-gray-700">Franco</p>
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
        <h2 class="text-6xl font-bold text-[#efc289]">19</h2>
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
          class="px-6 w-full h-[50px] py-2 bg-[#efc289] text-black font-semibold rounded-lg shadow-md hover:bg-[#e6b872] transition-colors">
          Confirmar asistencia
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