<template>
    <div class="container mx-auto px-4 py-8">
        <div class="grid md:grid-cols-2 gap-6">
            <ProductImage :images="product.images" :thumbnail="product.thumbnail" />
            <ProductInfo :product="product" />
        </div>
        <ProductReviews :reviews="product.reviews" />
    </div>
   
</template>

<script>
import { mapActions, mapGetters } from 'vuex/dist/vuex.cjs.js';
import ProductImage from '../components/ProductImage.vue'
import ProductInfo from '../components/ProductInfo.vue';
import ProductReviews from '../components/ProductReviews.vue';
import Product from '../components/Product.vue';

export default {
    name: "Product",
    computed: {
        ...mapGetters('products', ['product', 'isLoading', 'error']),
        ...mapGetters('category', ['categoryProducts', 'isLoading', 'error'])

    },
    created() {
        const productId = this.$route.params.productId;
        this.fetchProductById(productId)
    },
    watch:{
       
    },
    methods: {
        ...mapActions('products', ['fetchProductById']),
        ...mapActions('category', ['fetchCategoryproducts']),


    },
    data() {
        return {

        }
    },
    components: {
        ProductImage,
        ProductInfo,
        ProductReviews,
        Product,
    }
}
</script>
