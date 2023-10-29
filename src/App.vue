<script setup lang="ts">
import ShoppingCart from './components/ShoppingCart.vue'
import ProductCard from './components/ProductCard.vue'
import { ref } from 'vue'
import axios from 'axios'

const products = ref([])

axios
  .get('https://fakestoreapi.com/products/')
  .then((res) => {
    products.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })
</script>

<template>
  <div class="bg-primary h-auto p-2 flex items-center justify-start">
    <img src="/./src/assets/store-shopping-ecommerce-svgrepo-com.svg" class="h-14 w-14" />
    <div
      class="font-mono text-2xl text-white underline decoration-purple-600 decoration-wavy underline-offset-4"
    >
      Store
    </div>
  </div>
  <div class="flex items-center justify-end">
    <ShoppingCart />
  </div>
  <div class="bg-primary-content grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
