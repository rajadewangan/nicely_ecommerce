<template>
    <header class=" w-full bg-white shadow z-50">
        <div class="container mx-auto px-2 py-4 flex justify-between items-center">

            <!-- Logo -->
            <div class="text-2xl font-bold text-gray-800">
                <router-link to="/" class="hover:text-blue-600">
                    Nicely<span class="text-primary">Commerce</span>
                </router-link>
            </div>

            <!-- Navigation Links -->
            <nav class="hidden md:flex space-x-6 text-sm font-medium">
                <router-link to="/"
                    :class="activeMenu === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'home'">Home</router-link>
                <router-link :to="{ path: '/', hash: '#category' }"
                    :class="activeMenu === 'category' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'category'">Category</router-link>
                <router-link :to="{ path: '/', hash: '#products' }"
                    :class="activeMenu === 'products' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'products'">Products</router-link>
                <router-link :to="{ path: '/', hash: '#customers' }"
                    :class="activeMenu === 'customers' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'customers'">Customers</router-link>
                <router-link to="/orders"
                    :class="activeMenu === 'orders' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'orders'">Orders</router-link>
            </nav>

            <!-- Icons -->
            <div class="flex items-center space-x-4">
                <div class="relative w-full max-w-xs">
                    <input v-model="searchKeyword" @keyup.enter="search" type="text" placeholder="Search..."
                        class="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button @click="search"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-blue-600">
                        <i class="fa fa-search"></i>
                    </button>

                    <!-- suggestions dropdown  -->
                    <div class="absolute left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10"
                        v-if="searchKeyword.length > 1 && searchSuggestions.length">
                        <ul>
                            <li v-for="(suggestion, index) in searchSuggestions" :key="index"
                                @click="searchKeyword = suggestion.title; search()"
                                class="cursor-pointer px-4 py-2 hover:bg-blue-100">
                                {{ suggestion.title }}
                            </li>
                        </ul>

                    </div>

                </div>

                <router-link to="/login" :class="activeMenu === 'login' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                @click="activeMenu = 'login'">
                    <i class="fa fa-user"></i>
                </router-link>
                <div class="relative">
                    <router-link to="/cart" :class="activeMenu === 'cart' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'cart'">
                        <i class="fa fa-shopping-cart"></i>
                    </router-link>
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
        <div v-if="isOpen" class="md:hidden bg-white px-4 py-3 border-t absolute right-0 z-50">
            <!-- Navigation Links -->
            <nav class="flex md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm font-medium z-50">
                <router-link to="/"
                    :class="activeMenu === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'home'; isOpen = false">Home</router-link>
                <router-link :to="{ path: '/', hash: '#category' }"
                    :class="activeMenu === 'category' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'category'; isOpen = false">Category</router-link>
                <router-link :to="{ path: '/', hash: '#products' }"
                    :class="activeMenu === 'products' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'products'; isOpen = false">Products</router-link>
                <router-link :to="{ path: '/', hash: '#customers' }"
                    :class="activeMenu === 'customers' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'customers'; isOpen = false">Customers</router-link>
                <router-link to="/orders"
                    :class="activeMenu === 'orders' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'"
                    @click="activeMenu = 'orders'; isOpen = false">Orders</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
import { debounce } from 'lodash';
import { mapActions, mapGetters } from 'vuex/dist/vuex.cjs.js';

export default {
    name: "Navbar",
    data() {
        return {
            searchKeyword: '',
            debouncefetch: null,
            activeMenu: 'home',
            isOpen: false,
        }
    },
    computed: {
        ...mapGetters('search', ['searchSuggestions']),

    },
    created() {
        this.debouncefetch = debounce(this.fetchSearchSuggestions, 300);
    },
    watch: {
        searchKeyword(newVal) {
            if (newVal.length >= 2) {
                this.debouncefetch(newVal);
            }
        }
    },
    methods: {
        ...mapActions('search', ['fetchSearchSuggestions', 'clearSuggestions']),
        async search() {
            if (this.searchKeyword.trim()) {
                this.clearSuggestions();
                await this.$router.push(`/search/${this.searchKeyword}`);
                this.searchKeyword = ''
            }
        },
        toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    }

}
</script>

<style scoped></style>