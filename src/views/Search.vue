<template>
    <section class="grid grid-cols-1 md:grid-cols-10 gap-4 min-h-screen">
        <div class="md:col-span-2 p-4">
            <SearchFilter />

        </div>
        <div class="md:col-span-8 py-4">
            <Product :products="products" />
        </div>
    </section>
</template>

<script>
import SearchFilter from '../components/SearchFilter.vue';
import Product from '../components/Product.vue';


export default {
    name: "Search",
    components: {
        SearchFilter,
        Product,
    }, data() {
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