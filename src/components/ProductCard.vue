<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { defineProps } from 'vue'
defineProps(['product'])

const cartStore = useCartStore()
</script>

<template>
  <div class="card card-compact bg-base-100 shadow-xl m-1 md:m-3 w-auto">
    <div class="flex justify-center items-center w-auto">
      <img :src="product?.image" class="md:w-28 md:h-32 md:m-3 w-18 h-32 m-2" />
    </div>
    <div class="text-center card-body font-mono">
      <div class="card-title text-indigo-600 line-clamp-1 md:line-clamp-2">
        {{ product?.title }}
      </div>
      <div class="text-indigo-950 line-clamp-2 md:line-clamp-3">{{ product?.description }}</div>

      <div class="card-actions justify-between items-center mt-5">
        <div class="text-indigo-700 font-bold">R$ {{ product?.price }}</div>
        <button class="btn btn-primary btn-xs" @click="cartStore.addCart(product)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
