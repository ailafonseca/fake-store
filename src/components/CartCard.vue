<script setup lang="ts">
import { XCircleIcon } from '@heroicons/vue/24/solid'
import { useCartStore } from '@/stores/cart'
import { defineProps } from 'vue'
defineProps(['cartProduct', 'product', 'i'])
const cartStore = useCartStore()
</script>

<template>
  <div class="card card-compact bg-base-100 shadow-xl m-1 md:m-3 flex-row">
    <div class="flex justify-center items-center min-w-20 ml-5">
      <img :src="cartProduct?.image" class="h-20 w-24" />
    </div>

    <div class="card-body font-mono text-center">
      <div class="card-title text-indigo-600 line-clamp-2 text-sm ml-2">
        {{ cartProduct?.title }}
      </div>

      <div class="flex-col card-actions items-center mt-5 leading-3">
        <div class="text-indigo-700 font-bold">
          {{ cartStore.formatPrice(cartProduct?.price) }}
        </div>
        <div class="qty-size">(Qty: {{ cartProduct?.quantity }})</div>
      </div>
    </div>
    <div>
      <button
        @click="
          () => {
            cartStore.removeItem(cartProduct)
          }
        "
      >
        <XCircleIcon class="w-7 text-red-700" />
      </button>
    </div>
  </div>
</template>

<style>
.qty-size {
  font-size: 9px;
}
</style>
