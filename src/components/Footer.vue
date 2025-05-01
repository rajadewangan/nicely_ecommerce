<template>
    <footer class="bg-gray-900 text-gray-300 py-10 mt-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
  
        <!-- Company Info -->
        <div>
          <h2 class="text-white text-xl font-semibold mb-4">Nicely Commerce</h2>
          <p class="text-sm">
            Your one-stop shop for all your needs. Quality products, fast delivery.
          </p>
        </div>
  
        <!-- Links -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Home</a></li>
            <li><a href="#" class="hover:text-white">Shop</a></li>
            <li><a href="#" class="hover:text-white">About</a></li>
            <li><a href="#" class="hover:text-white">Contact</a></li>
          </ul>
        </div>
  
        <!-- Customer Service -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-3">Customer Service</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">FAQ</a></li>
            <li><a href="#" class="hover:text-white">Returns</a></li>
            <li><a href="#" class="hover:text-white">Shipping</a></li>
            <li><a href="#" class="hover:text-white">Support</a></li>
          </ul>
        </div>
  
        <!-- Social + Newsletter -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-3">Stay Connected</h3>
          <div class="flex space-x-4 mb-4">
            <a href="#" class="hover:text-white">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="hover:text-white">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="hover:text-white">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            class="w-full px-3 py-2 rounded bg-gray-800 text-gray-200 text-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
      </div>
  
      <div class="text-center text-xs mt-10 text-gray-500 border-t border-gray-800 pt-4">
        © {{ new Date().getFullYear() }} Nicely Commerce. All rights reserved.
      </div>
    </footer>
  </template>
  
  <script setup>
  // Nothing needed here for now
  </script>
  
  <style scoped>
  /* Optional: Include Font Awesome if not already */
  </style>
  