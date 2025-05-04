<template>
    <div class="px-3 py-2">
        <div class="mb-2">
            <label for="quantity" class="mr-2 font-bold text-base">Sort by:</label>
            <select id="quantity" v-model="quantity"
                class="border border-gray-300 rounded px-2 py-1 focus:outline-none w-full">
                <option>Price : High to Low</option>
                <option>Price : Low to High </option>
                <option>Avg. Customer Review </option>
                <option>New Arrivals </option>
                <option>Best Sellers</option>
            </select>
        </div>
        <hr>
        <div class="mb-2">
            <h3 class="font-bold text-base">
                Categories
            </h3>
            <div class="">
                <ul>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Mens</label>
                    </li>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Women</label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mb-2">

            <h3 class="font-bold text-base">
                Price
            </h3>
            <div class="">
                <input type="range" v-model=price min="1" max="100000" step="1" class="w-full accent-blue-500">
                <div class="w-full text-right font-bold">
                    {{ price }}
                </div>
            </div>
        </div>
        <div class="mb-2">
            <h3 class="font-bold text-base">
                Rating
            </h3>
            <div class="flex">
                <div v-for="star in 5">
                    <svg @click="setRating(star)" @mouseover="hoverRating = star" @mouseleave="hoverRating = 0"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="[
                            'w-8 h-8 cursor-pointer transition-colors duration-200',
                            (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                        ]" viewBox="0 0 20 20">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.183c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.078 9.4c-.783-.57-.38-1.81.588-1.81h4.183a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SearchFilter",
    data() {
        return {
            price: 100,
            rating: 0,
            hoverRating: 0,
        }
    },
    methods: {
        setRating(value) {
            this.rating = value;
        },
    }
}
</script>