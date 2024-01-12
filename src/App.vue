<script setup lang="ts">
import ShoppingCart from './components/ShoppingCart.vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
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
  <div class="drawer drawer-start">
    <input id="cart" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="bg-purple-300 p-2 flex items-center md:justify-between justify-evenly">
        <div class="flex items-center justify-start">
          <img src="/./src/assets/store-shopping-ecommerce-svgrepo-com.svg" class="h-14 w-14" />
          <div class="font-mono text-2xl text-purple-900">Store</div>
        </div>
        <div>
          <label for="cart" class="drawer-button btn"><ShoppingCartIcon class="w-5" /></label>
        </div>
      </div>

      <div class="bg-purple-100 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
        <ProductCard v-for="(product, i) in products" :key="i" :product="product" />
      </div>
    </div>
    <ShoppingCart />
  </div>
</template>
