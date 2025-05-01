<template>
    <header class=" fixed w-full bg-white shadow z-50">
        <div class="container mx-auto px-2 py-4 flex justify-between items-center">

            <!-- Logo -->
            <div class="text-2xl font-bold text-gray-800">
                <router-link to="/" class="hover:text-blue-600">
                    colo<span class="text-blue-500">shop</span>
                </router-link>
            </div>

            <!-- Navigation Links -->
            <nav class="hidden md:flex space-x-6 text-sm font-medium">
                <router-link to="/" class="text-gray-700 hover:text-blue-600">Home</router-link>
                <a href="#" class="text-gray-700 hover:text-blue-600">Shop</a>
                <a href="#" class="text-gray-700 hover:text-blue-600">Promotion</a>
                <a href="#" class="text-gray-700 hover:text-blue-600">Pages</a>
                <a href="#" class="text-gray-700 hover:text-blue-600">Blog</a>
                <a href="contact.html" class="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>

            <!-- Icons -->
            <div class="flex items-center space-x-4">
                <div class="relative w-full max-w-xs">
                    <input type="text" placeholder="Search..."
                        class="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-blue-600">
                        <i class="fa fa-search"></i>
                    </button>
                </div>

                <a href="#" class="text-gray-600 hover:text-blue-600">
                    <i class="fa fa-user"></i>
                </a>
                <div class="relative">
                    <a href="#" class="text-gray-600 hover:text-blue-600">
                        <i class="fa fa-shopping-cart"></i>
                    </a>
                    <span
                        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        2
                    </span>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="toggleMenu" class="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none">
                    <i class="fa fa-bars"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isOpen" class="md:hidden bg-white px-4 py-3 border-t">
            <nav class="flex flex-col space-y-2 text-sm font-medium">
                <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#" class="text-gray-700 hover:text-blue-600">Shop</a>
                <a href="#" class="text-gray-700 hover:text-blue-600">Promotion</a>
                <a href="#" class="text-gray-700 hover:text-blue-600">Pages</a>
                <a href="#" class="text-gray-700 hover:text-blue-600">Blog</a>
                <a href="contact.html" class="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped></style>