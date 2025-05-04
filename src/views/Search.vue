<template>
    <section class="grid grid-cols-1 md:grid-cols-10 gap-4 min-h-screen">
        <div class="md:col-span-2 p-4">
            <SearchFilter />

        </div>
        <div class="grid col-span-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <div class="col-span-1" v-for="(product, index) in searchResults" :key="product.id">
                <Product :products="[product]" />
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
        }
    }

}</script>