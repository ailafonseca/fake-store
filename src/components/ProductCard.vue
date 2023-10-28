<script setup lang="ts">
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
  <div class="bg-primary-content grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
    <div
      class="card card-compact bg-base-100 shadow-xl m-1 md:m-3"
      v-for="product in products"
      :key="product.id"
    >
      <div class="flex justify-center items-center w-auto"><img :src="product.image" class="md:w-28 md:h-48 md:m-3 w-14 h-32" /></div>
      <div class="text-center card-body font-mono">
        <div class="card-title text-indigo-600 line-clamp-1 md:line-clamp-2">{{ product.title }}</div>
        <div class="text-indigo-950 line-clamp-2 md:line-clamp-3">{{ product.description }}</div>

        <div class="card-actions justify-between mt-5">
          <div class="text-indigo-700 font-bold">R$ {{ product.price }}</div>
          <button class="btn btn-primary">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>
