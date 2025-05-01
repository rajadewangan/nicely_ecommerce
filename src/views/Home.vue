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
    <Slider heading="Best Sellers" />
    <!-- end of best seller  -->
    <!-- new Arrivals -->
    <Slider heading="New Arrivals" />
    <!-- end of new arrivals  -->

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
    <Slider heading="All Products" />
    <!-- end of all products  -->
</template>


<script setup>
import Slider from '../components/Slider.vue'
</script>