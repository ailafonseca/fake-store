<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
const products = ref([])
import { ref } from 'vue'
import axios from 'axios'

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
  <div class="bg-purple-100 grid sm:grid-cols-3 md:grid-cols-5">
    <ProductCard v-for="(product, i) in products" :key="i" :product="product" />
  </div>
</template>
