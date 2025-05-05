<template>
    <div class="w-full h-screen flex items-center justify-center bg-red-100 bg-right bg-no-repeat  bg-blend-multiply"
        style="background-image: url('/assets/image.png'); background-color: rgb(162 163 163 / 40%);">
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

    <!-- category wise products  -->
    <div class="mb-2 py-2 b" id="category">
        <div class="text-center mt-2">
            <h3 class="text-4xl font-bold mb-6 text-center border-b-4 border-primary pb-2 inline-block">Categories</h3>
        </div>
        <Swiper :slides-per-view="'auto'" :space-between="0" loop class="w-full">
            <SwiperSlide v-for="(category, index) in categoryList" :key="index" class="!w-auto !p-0">
                <div @click="activeCategory = category" :class="[
                    'cursor-pointer px-4 py-2 text-center shadow border font-bold mx-6',
                    activeCategory === category
                        ? 'bg-red-500 text-white border-red-600'
                        : 'bg-white text-gray-800 border-gray'
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
        <router-link :to="`/category/${activeCategory}`"
            class="block text-right font-bold text-primary mx-3 text-2xl hover:underline">View All >></router-link>
    </div>

    <!-- deal of the day section  -->
    <div class="deal_ofthe_week" style="background-color: rgb(162 163 163 / 40%);">
        <div class="container mx-auto px-4 py-8">
            <div class="flex items-center space-x-8">
                <!-- Image Section -->
                <div class="flex-1">
                    <div class="deal_ofthe_week_img">
                        <img src="/assets/image.png" alt="Deal of the Week" class="w-full rounded-lg shadow-lg" />
                    </div>
                </div>

                <!-- Content Section -->
                <div class="flex-1 text-right">
                    <div class=" flex flex-col items-center space-y-4">
                        <div class="">
                            <h2 class="text-3xl font-bold text-gray-800 text-center">Deal Of The Week</h2>
                        </div>
                        <ul class="flex flex-wrap justify-center gap-4 sm:gap-2 md:gap-4">
                            <li
                                class="flex flex-col justify-center items-center bg-white rounded-full w-24 h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 xs:w-12 xs:h-12">
                                <div
                                    class="text-4xl md:text-3xl sm:text-xl xs:text-sm font-bold text-gray-800 text-primary">
                                    {{ countDown.days }}
                                </div>
                                <div class="text-sm md:text-xs sm:text-[10px] xs:text-[8px] text-gray-600">Day</div>
                            </li>
                            <li
                                class="flex flex-col justify-center items-center bg-white rounded-full w-24 h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 xs:w-12 xs:h-12">
                                <div
                                    class="text-4xl md:text-3xl sm:text-xl xs:text-sm font-bold text-gray-800 text-primary">
                                    {{ countDown.hours }}
                                </div>
                                <div class="text-sm md:text-xs sm:text-[10px] xs:text-[8px] text-gray-600">Hours</div>
                            </li>
                            <li
                                class="flex flex-col justify-center items-center bg-white rounded-full w-24 h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 xs:w-12 xs:h-12">
                                <div
                                    class="text-4xl md:text-3xl sm:text-xl xs:text-sm font-bold text-gray-800 text-primary">
                                    {{ countDown.minutes }}
                                </div>
                                <div class="text-sm md:text-xs sm:text-[10px] xs:text-[8px] text-gray-600">Mins</div>
                            </li>
                            <li
                                class="flex flex-col justify-center items-center bg-white rounded-full w-24 h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 xs:w-12 xs:h-12">
                                <div
                                    class="text-4xl md:text-3xl sm:text-xl xs:text-sm font-bold text-gray-800 text-primary">
                                    {{ countDown.seconds }}
                                </div>
                                <div class="text-sm md:text-xs sm:text-[10px] xs:text-[8px] text-gray-600">Sec</div>
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
    <div class="text-center mt-2" id="products">
        <router-link to="/search"
            class="text-4xl font-bold mb-6 text-center border-b-4 border-gray-300 pb-2 inline-block"
            style="border-color: rgb(239, 68, 68);">All Products</router-link>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        <div class="col-span-1" v-for="(product, index) in allProducts" :key="product.id">
            <Product :products="[product]" />
        </div>
    </div>


    <!-- end of all products  -->

    <!-- benefit section  -->
    <div class="grid gird-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 py-4 px-20 ">
        <div class="col-span-1 flex space-x-4 items-center bg-gray-100 py-3 px-2">
            <div class="text-3xl text-primary">
                <i class="fa fa-truck"></i>
            </div>
            <div>
                <h6 class="text-lg font-semibold capitalize">Fast Shipping</h6>
                <p class="text-sm text-gray-600">Suffered Alteration in Some Form</p>
            </div>
        </div>
        <div class="col-span-1 flex space-x-4 items-center bg-gray-100 py-3 px-2">
            <div class="text-3xl text-primary">
                <i class="fa fa-money"></i>
            </div>
            <div>
                <h6 class="text-lg font-semibold capitalize">cash on delivery</h6>
                <p class="text-sm text-gray-600">The Internet Tend To Repeat</p>
            </div>
        </div>
        <div class="col-span-1 flex space-x-4 items-center bg-gray-100 py-3 px-2">
            <div class="text-3xl text-primary">
                <i class="fa fa-undo"></i>
            </div>
            <div>
                <h6 class="text-lg font-semibold capitalize">Return Policy</h6>
                <p class="text-sm text-gray-600">Making it Look Like Readable</p>
            </div>
        </div>
        <div class="col-span-1 flex space-x-4 items-center bg-gray-100 py-3 px-2">
            <div class="text-3xl text-primary">
                <i class="fa fa-clock-o"></i>
            </div>
            <div>
                <h6 class="text-lg font-semibold capitalize">opening all week</h6>
                <p class="text-sm text-gray-600">8AM - 09PM</p>
            </div>
        </div>
    </div>

    <!-- Testimonial Section -->
    <section class="bg-gray-100 py-12" id="customers">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center">

                <h2 class="font-bold text-4xl font-bold mb-6 text-center border-b-4 border-primary pb-2 inline-block">
                    What Our Customers Say</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- Testimonial Card -->
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                    <p class="text-gray-700 mb-4">"Amazing service and quality. Will definitely recommend to others!"
                    </p>
                    <div class="flex items-center space-x-4">
                        <img src="https://th.bing.com/th/id/OIP.FPu9JuEm97kbMMIJScxVIgAAAA?cb=iwc1&rs=1&pid=ImgDetMain"
                            alt="user" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h5 class="font-semibold">John Doe</h5>
                            <span class="text-sm text-gray-500">Verified Buyer</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                    <p class="text-gray-700 mb-4">"Great experience from start to finish. Excellent customer support."
                    </p>
                    <div class="flex items-center space-x-4">
                        <img src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?cb=iwc1&rs=1&pid=ImgDetMain"
                            alt="user" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h5 class="font-semibold">Jane Smith</h5>
                            <span class="text-sm text-gray-500">Loyal Customer</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                    <p class="text-gray-700 mb-4">"Delivery was quick and the product exceeded my expectations."</p>
                    <div class="flex items-center space-x-4">
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                            alt="user" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h5 class="font-semibold">Alice Johnson</h5>
                            <span class="text-sm text-gray-500">Happy Client</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { mapActions, mapGetters } from 'vuex/dist/vuex.cjs.js';
import Slider from '../components/Slider.vue'
import Product from '../components/Product.vue';
export default {
    name: "Home",
    data() {
        return {
            activeCategory: '',
            countDown: {
                days: 2,
                hours: 23,
                minutes: 4,
                seconds: 12
            },
            countdownInterval: null,
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
        this.startCountDown()
    },
    methods: {
        ...mapActions('products', ['fetchProducts', 'fetchMostBoughtProducts']),
        ...mapActions('category', ['fetchAllCategory', 'fetchCategoryproducts']),
        startCountDown() {
            let totalSeconds = (this.countDown.days * 86400) +
                (this.countDown.hours * 3600) + (this.countDown.minutes * 60) + this.countDown.seconds;
            this.countdownInterval = setInterval(() => {
                if (totalSeconds <= 0) {
                    clearInterval(this.countdownInterval);
                    return;
                }

                totalSeconds--;

                this.countDown.days = Math.floor(totalSeconds / 86400);
                this.countDown.hours = Math.floor((totalSeconds % 86400) / 3600);
                this.countDown.minutes = Math.floor((totalSeconds % 3600) / 60);
                this.countDown.seconds = totalSeconds % 60;
            }, 1000);

        }

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

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
</style>