<template>
    <section class="grid grid-cols-1 md:grid-cols-10 gap-4 min-h-screen">
        <div class="md:hidden">
            <button class="font-bold px-4" @click="isFilterOpen=!isFilterOpen">Filters<span class="ml-1">&#x25BC;</span>
            </button>
        </div>
        <div
            class="fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs bg-white shadown-lg p-4 transform transition-transform duration-300 ease-in-out md:static md:transform-none md:col-span-2"
            :class="{'translate-x-0':isFilterOpen,'translate-x-full':!isFilterOpen && !isDesktop}">
            <SearchFilter />
            <div class="flex justify-end md:hidden">
                <button @click="isFilterOpen" class="text-gray-600 hover:text-red-600 text-xl font-bold">
                    &times;
                </button>
            </div>

        </div>
        <div class="grid col-span-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2 px-2">
            <div class="col-span-1" v-if="searchResults.length>0" v-for="(product, index) in searchResults" :key="product.id">
                <Product :products="[product]" />
            </div>
            <div v-else class="text-3xl font-bold mx-auto ">
                No Result Found
            </div>
        </div>
    </section>
</template>

<script>
import SearchFilter from '../components/SearchFilter.vue';
import Product from '../components/Product.vue';
import { mapActions, mapGetters } from 'vuex/dist/vuex.cjs.js';


export default {
    name: "Search",
    created() {
        const searchKey = this.$route.params.searchQuery;
        if (searchKey) {
            this.fetchSearchResults(searchKey);
        }
    },
    components: {
        SearchFilter,
        Product,
    },
    computed: {
        ...mapGetters('search', ['searchResults']),
      

    }, methods: {
        ...mapActions('search', ['fetchSearchResults', 'clearSuggestions']),
    },
    watch: {
        '$route.params.searchQuery'(newVal) {
            if (newVal) {
                this.fetchSearchResults(newVal);
            }
        }
    },
    data() {
        return {
            isFilterOpen:false,
        }
    }

}</script>