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

    <!-- best seller -->
    <!-- <Slider heading="Best Sellers" /> -->
    <div>

        <div class="text-center mt-2">
            <router-link to="/search"
                class="text-4xl font-bold mb-6 text-center border-b-4 border-gray-300 pb-2 inline-block"
                style="border-color: rgb(239, 68, 68);">Most Selling Products</router-link>
        </div>
        <Swiper :slides-per-view="'auto'" :space-between="5" :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 }
        }" loop class="w-full">
            <SwiperSlide v-for="(product, index) in mostBoughtProducts" :key="product.id">
                <div class="cursor-pointer px-4 py-2 text-center bg-white text-gray-800 shadow mx-auto w-full ">
                    <Product :products="[product]" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <!-- end of best seller  -->
    <!-- new Arrivals -->
    <!-- <Slider heading="New Arrivals" /> -->
    <!-- end of new arrivals  -->

    <!-- category wise products  -->
    <div class="mb-2">
        <div class="text-center mt-2">
            <h3 to="/search" class="text-4xl font-bold mb-6 text-center border-b-4 border-gray-300 pb-2 inline-block"
                style="border-color: rgb(239, 68, 68);">Categories</h3>
        </div>
        <Swiper :slides-per-view="'auto'" :space-between="0" loop class="w-full">
            <SwiperSlide v-for="(category, index) in categoryList" :key="index" class="!w-auto !p-0">
                <div @click="activeCategory = category" :class="[
                    'cursor-pointer px-4 py-2 text-center shadow border font-bold',
                    activeCategory === category
                        ? 'bg-red-500 text-white border-red-600'
                        : 'bg-white text-gray-800 border-black'
                ]">
                    {{ category }}
                </div>
            </SwiperSlide>
        </Swiper>


        <div class="p-2">
            <Swiper :slides-per-view="'auto'" :space-between="5" :breakpoints="{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }" loop class="w-full">
                <SwiperSlide v-for="(product, index) in categoryProducts" :key="product.id">
                    <div class="cursor-pointer px-4 py-2 text-center bg-white text-gray-800 shadow mx-auto w-full ">
                        <Product :products="[product]" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <router-link :to="`/category/${activeCategory}`" class="block text-right font-bold text-primary mx-3 text-2xl hover:underline">View All >></router-link>
    </div>

    <!-- deal of the day section  -->
    <div class="deal_ofthe_week" style="background-color: rgb(162 163 163 / 40%);">
        <div class="container mx-auto px-4 py-8">
            <div class="flex items-center space-x-8">
                <!-- Image Section -->
                <div class="flex-1">
                    <div class="deal_ofthe_week_img">
                        <img src="/src/assets/image.png" alt="Deal of the Week" class="w-full rounded-lg shadow-lg" />
                    </div>
                </div>

                <!-- Content Section -->
                <div class="flex-1 text-right">
                    <div class="deal_ofthe_week_content flex flex-col items-center space-y-4">
                        <div class="section_title">
                            <h2 class="text-3xl font-semibold text-gray-800">Deal Of The Week</h2>
                        </div>
                        <ul class="flex space-x-6">
                            <li class="flex flex-col justify-center items-center">
                                <div id="day" class="timer_num text-4xl font-bold text-gray-800">2</div>
                                <div class="timer_unit text-sm text-gray-600">Day</div>
                            </li>
                            <li class="flex flex-col justify-center items-center">
                                <div id="hour" class="timer_num text-4xl font-bold text-gray-800">23</div>
                                <div class="timer_unit text-sm text-gray-600">Hours</div>
                            </li>
                            <li class="flex flex-col justify-center items-center">
                                <div id="minute" class="timer_num text-4xl font-bold text-gray-800">4</div>
                                <div class="timer_unit text-sm text-gray-600">Mins</div>
                            </li>
                            <li class="flex flex-col justify-center items-center">
                                <div id="second" class="timer_num text-4xl font-bold text-gray-800">12</div>
                                <div class="timer_unit text-sm text-gray-600">Sec</div>
                            </li>
                        </ul>
                        <div
                            class="red_button deal_ofthe_week_button bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end of deal of the dat  -->
    <!-- all products  -->
    <!-- <Slider heading="All Products" /> -->
    <div class="text-center mt-2">
        <router-link to="/search"
            class="text-4xl font-bold mb-6 text-center border-b-4 border-gray-300 pb-2 inline-block"
            style="border-color: rgb(239, 68, 68);">All Products</router-link>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="col-span-1" v-for="(product, index) in allProducts" :key="product.id">
            <Product :products="[product]" />
        </div>
    </div>


    <!-- end of all products  -->
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { mapActions, mapGetters } from 'vuex/dist/vuex.cjs.js';
import Slider from '../components/Slider.vue'
import Product from '../components/Product.vue';
import products from '../store/modules/products';
import ProductCart from '../components/ProductCart.vue';
export default {
    name: "Home",
    data() {
        return {
            activeCategory: '',
        }
    },
    computed: {
        ...mapGetters('products', ['allProducts', 'mostBoughtProducts', 'isLoading', 'error']),
        ...mapGetters('category', ['categoryList', 'categoryProducts', 'isLoading', 'error'])
    },
    created() {
        this.fetchProducts()
        this.fetchMostBoughtProducts()
        this.fetchAllCategory()
    },
    methods: {
        ...mapActions('products', ['fetchProducts', 'fetchMostBoughtProducts']),
        ...mapActions('category', ['fetchAllCategory', 'fetchCategoryproducts']),

    },
    components: {
        Slider,
        Product,
        Swiper,
        SwiperSlide,
    },
    watch: {
        activeCategory(category) {
            if (category) {
                this.fetchCategoryproducts(category, 10);
            }
        },
        categoryList: {
            immediate: true,
            handler(newList) {
                if (newList.length && !this.activeCategory) {
                    this.activeCategory = newList[0];
                }
            }
        }
    }
}
</script>