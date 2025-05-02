<template>

    <!-- Product Details -->
    <div class="space-y-4">
        <h1 class="text-2xl font-bold">Essence Mascara Lash Princess</h1>
        <p class="text-gray-600 text-sm">Brand: <span class="text-black">Essence</span></p>

        <!-- Rating -->
        <div class="flex items-center gap-2 text-yellow-500">
            <div class="flex items-center">
                <template v-for="i in 5">
                    <svg v-if="i <= Math.floor(product.rating)" :key="'full-' + i" xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                    </svg>
                    <svg v-else-if="i - product.rating <= 0.5" :key="'half-' + i" xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <defs>
                            <linearGradient id="half">
                                <stop offset="50%" stop-color="currentColor" />
                                <stop offset="50%" stop-color="transparent" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#half)"
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                    </svg>
                    <svg v-else :key="'empty-' + i" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300"
                        viewBox="0 0 20 20" fill="currentColor">
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
            <span class="text-sm text-gray-500 line-through ml-2">${{ (product.price / (1 - product.discountPercentage /
                100)).toFixed(2) }}</span>
        </div>

        <!-- Stock Info -->
        <p class="text-sm font-medium" :class="product.stock < 10 ? 'text-red-500' : 'text-green-600'">
            {{ product.availabilityStatus }}
        </p>

        <!-- Description -->
        <p class="text-gray-700">{{ product.description }}</p>
        <!-- replacement and delivery  -->
        <div class="flex gap-6 mt-4 text-center">
            <div class="flex flex-col items-center text-gray-700 w-24">
                <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png"
                    alt="Shipping" class="w-10 h-10 mb-1" />
                <span class="text-xs">{{ product.returnPolicy }}</span>
            </div>
            <div class="flex flex-col items-center text-gray-700 w-24">
                <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                    alt="Shipping" class="w-10 h-10 mb-1" />
                <span class="text-xs">{{ product.warrantyInformation }}</span>
            </div>
            <div class="flex flex-col items-center text-gray-700 w-24">
                <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png"
                    alt="Shipping" class="w-10 h-10 mb-1" />
                <span class="text-xs">{{ product.shippingInformation }}</span>
            </div>
        </div>
        <!-- Additional Info -->
        <ul class="text-sm text-gray-600 space-y-1">
            <li><strong>SKU:</strong> {{ product.sku }}</li>
            <li><strong>Weight:</strong> {{ product.weight }} kg</li>
            <li><strong>Dimensions:</strong> {{ product.dimensions.width }} x {{ product.dimensions.height }} x {{
                product.dimensions.depth }} cm</li>
            <li><strong>Minimum Order:</strong> {{ product.minimumOrderQuantity }}</li>
            <li><strong>Tags:</strong> <span v-for="(tag, i) in product.tags" :key="i"
                    class="inline-block bg-gray-200 px-2 py-1 rounded text-xs mr-1">{{ tag }}</span></li>
        </ul>
        <div>
            <label for="quantity" class="mr-2 font-medium">Qty:</label>
            <select id="quantity" v-model="quantity"
                class="border border-gray-300 rounded px-2 py-1 focus:outline-none">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
            <!-- Actions -->
            <button
                class="mt-4 mx-3 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">
                Add to Cart
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductInfo",
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        };
    },
    watch: {

    },
};
</script>