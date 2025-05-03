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
    <Product :products="products" />
    <Slider heading="New Arrivals" />
    <Slider heading="Top Rated" />

</template>
<script>
import Product from '../components/Product.vue';
import Slider from '../components/Slider.vue';


export default {
    name: "Category",
    components: {
        Product,
        Slider,
    },
    data() {
        return {
            products: [{
                id: 1,
                title: "Essence Mascara Lash Princess",
                description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                category: "beauty",
                price: 9.99,
                discountPercentage: 7.17,
                rating: 4.94,
                stock: 5,
                tags: ["beauty", "mascara"],
                brand: "Essence",
                sku: "RCH45Q1A",
                weight: 2,
                dimensions: {
                    width: 23.17,
                    height: 14.43,
                    depth: 28.01,
                },
                warrantyInformation: "1 month warranty",
                shippingInformation: "Ships in 1 month",
                availabilityStatus: "Low Stock",
                reviews: [
                    {
                        rating: 2,
                        comment: "Very unhappy with my purchase!",
                        date: "2024-05-23T08:56:21.618Z",
                        reviewerName: "John Doe",
                        reviewerEmail: "john.doe@x.dummyjson.com",
                    },
                    {
                        rating: 2,
                        comment: "Not as described!",
                        date: "2024-05-23T08:56:21.618Z",
                        reviewerName: "Nolan Gonzalez",
                        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
                    },
                    {
                        rating: 5,
                        comment: "Very satisfied!",
                        date: "2024-05-23T08:56:21.618Z",
                        reviewerName: "Scarlett Wright",
                        reviewerEmail: "scarlett.wright@x.dummyjson.com",
                    },
                ],
                returnPolicy: "30 days return policy",
                minimumOrderQuantity: 24,
                meta: {
                    createdAt: "2024-05-23T08:56:21.618Z",
                    updatedAt: "2024-05-23T08:56:21.618Z",
                    barcode: "9164035109868",
                    qrCode: "...",
                },
                thumbnail: "...",
                images: ["...", "...", "..."],
            }]
        }
    }
}</script>