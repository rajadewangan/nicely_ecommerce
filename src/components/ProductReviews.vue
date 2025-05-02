<template>
    <div class="grid md:grid-cols-3 gap-2 mt-8">
        <div class="col-span-1">
            <h2 class="text-xl font-semibold mb-4">Write Your Review</h2>

            <!-- Star Rating -->
            <div class="flex mb-4">
                <template v-for="star in 5">
                    <svg @click="setRating(star)" @mouseover="hoverRating = star" @mouseleave="hoverRating = 0"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="[
                            'w-8 h-8 cursor-pointer transition-colors duration-200',
                            (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                        ]" viewBox="0 0 20 20">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.183c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.078 9.4c-.783-.57-.38-1.81.588-1.81h4.183a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                </template>
            </div>

            <!-- Review Input -->
            <textarea class="w-full h-64 border border-black rounded shadow-sm p-2"
                placeholder="Write your review here..."></textarea>
            <button class="text-white font-semibold py-2 px-4 rounded mt-3"
                style="background-color:rgb(239 68 68 )">Post a
                Review</button>
        </div>
        <div class="col-span-2">
            <h2 class="text-xl font-semibold mb-4">Customer Reviews</h2>
            <div v-for="(review, index) in reviews" :key="index"
                class="border border-gray-200 rounded-xl p-4 mb-4 shadow-sm">
                <!-- Reviewer Info -->
                <div class="flex items-center justify-between mb-2">
                    <div class="font-semibold text-gray-800">{{ review.reviewerName }}</div>
                    <div class="text-sm text-gray-500">{{ formatDate(review.date) }}</div>
                </div>

                <!-- Star Rating -->
                <div class="flex items-center mb-2">
                    <template v-for="i in 5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1"
                            :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                        </svg>
                    </template>
                </div>

                <!-- Comment -->
                <p class="text-gray-700">{{ review.comment }}</p>
            </div>

        </div>


    </div>
</template>
<script>
export default {
    name: "ProductReview",
    props: {
        reviews: Array,

    },
    data() {
        return {
            rating: 0,
            hoverRating: 0,
            reviewText: ''
        }
    },
    methods: {
        setRating(value) {
            this.rating = value;
            console.log(this.rating)
        },
        formatDate(dateStr) {
            const options = { year: "numeric", month: "short", day: "numeric" };
            return new Date(dateStr).toLocaleDateString(undefined, options);
        },
    },
};
</script>