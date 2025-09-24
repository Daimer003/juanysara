<template>
  <div class="w-full  relative mb-20 p-3">
   <div id="map" class="p-3 w-full  h-[400px] shadow-lg border-2  border-[#793710]">
     <div  class="w-full h-full"></div>
   </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

onMounted(() => {
  // Coordenadas del evento (puedes cambiarlas por las reales)
  const lat = 6.132300874452211
  const lng = -75.55375297116461

  // Crear mapa
  const map = L.map("map").setView([lat, lng], 15)

  // Cargar tiles (con fondo transparente o estilo elegante)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  // Agregar marcador
  const customIcon = L.icon({
    iconUrl: "/assets/img-map.png", // tu pin personalizado 🎯
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  })

  L.marker([lat, lng], { icon: customIcon })
    .addTo(map)
    .bindPopup("<b>Forest Campestre:</b><br>Aquí celebramos nuestra boda")
    .openPopup()
})
</script>

<style>
/* Ajuste para que Leaflet no corte los íconos */
.leaflet-container {
  z-index: 1;
}
</style>