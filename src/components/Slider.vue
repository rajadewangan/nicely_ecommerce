<template>
    <!-- best seller -->
    <div class="py-8 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center">
            <h2 class="text-4xl font-bold mb-6 text-center border-b-4 border-gray-300 pb-2 inline-block" style="border-color: rgb(239, 68, 68);">{{heading}}</h2>
        </div>

        <Swiper
          :slides-per-view="1"
          :space-between="16"
          :breakpoints="{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }"
           :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
          loop
          class="w-full"
        >
          <SwiperSlide v-for="n in 6" :key="n">
            <ProductCart />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <!-- end of best seller -->
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import { Navigation, Autoplay } from 'swiper/modules'
  import SwiperCore from 'swiper';
  import ProductCart from './ProductCart.vue'
  SwiperCore.use([Navigation, Autoplay])

export default{
  name:"Slider",
  props:{
    heading:{
        type:String,
    }
  },
  components:{
    ProductCart,
  }
}
  </script>
  