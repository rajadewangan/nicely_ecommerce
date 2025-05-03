<template>
  <div
    class="relative w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300">
    <!-- Discount Badge -->
    <div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
      -$20
    </div>

    <!-- Product Image -->
    <div class="p-4">
      <div class="w-full overflow-hidden rounded-md">
        <img src="/src/assets/image.png" alt="Fujifilm X100T"
          class="w-full h-auto object-cover transition-transform duration-300 hover:scale-105">
      </div>

      <!-- Product Info -->
      <div class="mt-4">
        <h3 class="text-sm font-medium text-gray-700 hover:text-blue-600 line-clamp-2">
          <router-link to="/product/1">Fujifilm X100T 16 MP Digital Camera (Silver)</router-link>
        </h3>
        <div class="mt-2 text-lg font-semibold text-gray-900">
          $520.00 <span class="text-sm line-through text-gray-500 ml-2">$590.00</span>
        </div>
      </div>
    </div>

    <!-- Add to Cart Button -->
    <div class="bg-primary text-white text-center py-2 rounded-b-lg hover:bg-primary-600 transition duration-300">
      <a href="#">Add to cart</a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>