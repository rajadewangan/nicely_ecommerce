<template>

    <div class="w-full h-screen flex items-center justify-center bg-red-100 bg-right bg-no-repeat  bg-blend-multiply"
        style="background-image: url('/src/assets/image.png'); background-color: rgb(162 163 163 / 40%);">
        <div class="container mx-auto  p-8 rounded">
            <div class="flex items-center h-full">
                <div class="w-full">
                    <div class="space-y-4 text-center lg:text-left">
                        <h6 class="text-sm uppercase tracking-wide text-gray-700">Spring / Summer Collection 2017</h6>
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-800">Get up to 30% Off New Arrivals</h1>
                        <div>
                            <a href="#"
                                class="inline-block bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        <div class="col-span-1" v-for="(product, index) in categoryProducts" :key="product.id">
            <Product :products="[product]" />
        </div>
    </div>

    <!-- new arrivals  -->
    <div>
        <div class="text-center mt-2">
            <router-link to="/search"
                class="text-4xl font-bold mb-6 text-center border-b-4 border-gray-300 pb-2 inline-block"
                style="border-color: rgb(239, 68, 68);">New Arrivals</router-link>
        </div>
        <Swiper :slides-per-view="'auto'" :space-between="3" :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 }
        }" loop class="w-full">
            <SwiperSlide v-for="(product) in newCategoryProducts" :key="product.id">
                <div class="cursor-pointer px-4 py-2 text-center bg-white text-gray-800 shadow mx-auto w-full ">
                    <Product :products="[product]" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>

</template>
<script>
import { mapActions, mapGetters } from 'vuex/dist/vuex.cjs.js';
import Product from '../components/Product.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
    name: "Category",
    components: {
        Product,
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapGetters('category', ['categoryProducts', 'newCategoryProducts', 'isLoading', 'error'])
    },
    created() {
        const category = this.$route.params.category;
        this.fetchCategoryproducts(category).then(() => this.fetchNewCategoryProducts())

    },
    methods: {
        ...mapActions('category', ['fetchCategoryproducts', 'fetchNewCategoryProducts']),
    },
    
}</script>