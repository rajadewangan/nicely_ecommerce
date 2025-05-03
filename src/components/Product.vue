<template>
    <div class="grid grid-cols-3 gap-4 mt-2 px-4">
        <div v-for="n in 5" class="grid grid-col-3 shadow-sm">
            <div :class="`${layoutClass} gap-4 bg-gray-100 py-2 shadow-sm mb-4 px-2`" v-for="product in products"
                :key="product.id">

                <div class="col-span-1 h-64 overlow-hidden flex item-center justify-center">
                    <img src="/src/assets/image1.jpg" alt="Product Img" class="h-full w-auto object-cover">
                </div>
                <div class="col-span-2">
                    <h3 class="font-bold text-4xl">{{ product.title }}</h3>
                    <h4>{{ product.brand }}</h4>
                    <!-- Rating -->
                    <div class="flex items-center gap-2 text-yellow-500">
                        <div class="flex items-center">
                            <template v-for="i in 5">
                                <svg v-if="i <= Math.floor(product.rating)" :key="'full-' + i"
                                    xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current text-yellow-500"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                                </svg>
                                <svg v-else-if="i - product.rating <= 0.5" :key="'half-' + i"
                                    xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-500"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <defs>
                                        <linearGradient id="half">
                                            <stop offset="50%" stop-color="currentColor" />
                                            <stop offset="50%" stop-color="transparent" />
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#half)"
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                                </svg>
                                <svg v-else :key="'empty-' + i" xmlns="http://www.w3.org/2000/svg"
                                    class="w-4 h-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                                </svg>
                            </template>
                        </div>
                        <span class="font-semibold">{{ product.rating }}</span>
                        <span class="text-gray-500">({{ product.reviews.length }} reviews)</span>
                    </div>
                    <!-- Price & Discount -->
                    <div class="text-3xl font-bold text-red-600">
                        ${{ product.price }}
                        <span class="text-sm text-gray-500 line-through ml-2">${{ (product.price / (1 -
                            product.discountPercentage /
                            100)).toFixed(2) }}</span>
                        <span class="text-sm text-gray-500 ml-2">({{ product.discountPercentage }}%)</span>
                    </div>
                    <!-- Stock Info -->
                    <p class="text-sm font-medium" :class="product.stock < 10 ? 'text-red-500' : 'text-green-600'">
                        {{ product.availabilityStatus }}
                    </p>

                    <!-- shipping info  -->
                    <p class="text-sm font-medium">
                        {{ product.shippingInformation }}
                    </p>

                    <!-- return policy  -->
                    <p class="text-sm font-bold">
                        {{ product.returnPolicy }}
                    </p>
                    <!-- add to cart  -->
                    <div>
                        <!-- <label for="quantity" class="mr-2 font-medium">Qty:</label>
                    <select id="quantity" v-model="quantity"
                        class="border border-gray-300 rounded px-2 py-1 focus:outline-none">
                        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                    </select> -->
                        <!-- Actions -->
                        <button
                            class="mt-4 px-6 py-2 bg-secondary text-black font-semibold rounded hover:bg-primary-500 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Product",
    props: {
        products: {
            type: Array,
        },
        grid: {
            type: String,
        }
    },
    methods: {
    },
    mounted() {
        // console.log(this.products)
    },
    computed: {
  
    }

}
</script>