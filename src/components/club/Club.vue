<template>
  <div class="flex flex-col items-center justify-center p-4">
    <h3 class="font-script text-4xl text-gray-800">Forest Campestre</h3>

    <!-- Galería de imágenes -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 w-full">
      <div class="relative w-full">
        <img src="/assets/img-2.jpg" alt="Lugar 1" class="w-full h-64 object-cover  shadow-md" />
        <div class="absolute inset-0 "></div>
      </div>

      <div class="relative w-full">
        <img src="/assets/img-3.jpg" alt="Lugar 2" class="w-full h-64 object-cover  shadow-md" />
        <div class="absolute inset-0  "></div>
      </div>

      <div class="relative w-full">
        <img src="/assets/club-3.jpg" alt="Lugar 3" class="w-full h-64 object-cover  shadow-md" />
        <div class="absolute inset-0  "></div>
      </div>
    </div>

    <!-- Firma -->
    <h3 class="mt-8 font-script text-3xl text-gray-800">¡Te esperamos!</h3>
  </div>
</template>

<script setup>
// Sin lógica adicional por ahora
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