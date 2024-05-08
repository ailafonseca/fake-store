<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import ProductCard from '@/components/ProductCard.vue'
import { ref, computed } from 'vue'
import axios from 'axios'

const products = ref([])
const searchText = ref('')

axios
  .get('https://fakestoreapi.com/products/')
  .then((res) => {
    products.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })

const filteredProducts = computed(() => {
  if (!searchText.value) {
    return products.value
  } else {
    return products.value.filter((product) =>
      product.title.toLowerCase().includes(searchText.value.toLowerCase())
    )
  }
})
</script>

<template>
  <div class="mt-16 bg-purple-300 p-4">
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" v-model="searchText" placeholder="Search" />

      <MagnifyingGlassIcon class="w-5" />
    </label>
  </div>

  <div class="bg-purple-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    <ProductCard v-for="(product, i) in filteredProducts" v-bind:key="i" :product="product" />
  </div>
</template>
