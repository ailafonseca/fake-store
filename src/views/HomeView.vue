<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import type { Product } from '@/models'

const products = ref<Product[]>([])
const searchText = ref('')
const selectedProduct = ref<Product | null>(null)
const isLoading = ref(true)

const fetchProducts = async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products/')
    products.value = res.data
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchProducts()
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

const showModal = (product: Product) => {
  selectedProduct.value = product
}
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center h-96">
    <div class="loading loading-spinner text-primary loading-lg"></div>
  </div>

  <div v-else class="mt-16 bg-purple-300 p-4">
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" v-model="searchText" placeholder="Search" />
      <MagnifyingGlassIcon class="md:w-5 w-3" />
    </label>
  </div>

  <div class="bg-purple-100 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
    <ProductCard
      v-for="(product, i) in filteredProducts"
      v-bind:key="i"
      v-bind:product="product"
      @show-modal="showModal(product)"
    />
  </div>

  <input type="checkbox" id="my_modal_6" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle" role="dialog">
    <div class="modal-box">
      <div class="card card-compact bg-base-100 m-1 md:m-3">
        <div class="flex justify-center items-center w-auto">
          <img :src="selectedProduct?.image" class="md:w-44 md:h-52 md:m-3 h-36 w-44 m-5" />
        </div>
        <div class="card-body font-mono">
          <div class="text-indigo-600 font-bold text-base md:text-lg">
            {{ selectedProduct?.title }}
          </div>

          <div class="text-indigo-950 text-sm md:text-base">
            {{ selectedProduct?.description }}
          </div>
        </div>
      </div>

      <div class="modal-action">
        <label for="my_modal_6" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >x</label
        >
      </div>
    </div>
  </div>
</template>
