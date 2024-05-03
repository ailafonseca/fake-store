<script setup lang="ts">
import { XCircleIcon } from '@heroicons/vue/24/solid'
import { useCartStore } from '@/stores/cart'
import { defineProps } from 'vue'
defineProps(['cartProduct', 'i'])
const cartStore = useCartStore()
</script>

<template>
  <div class="card card-compact bg-base-100 shadow-xl m-1 md:m-3">
    <div class="grid justify-items-end">
      <button
        @click="
          () => {
            cartStore.removeItem(i)
          }
        "
      >
        <XCircleIcon class="w-7 text-red-700" />
      </button>
    </div>
    <div class="flex justify-center items-center w-auto">
      <img :src="cartProduct?.image" class="md:w-28 md:h-32 md:m-3 w-18 h-32 m-2" />
    </div>
    <div class="text-center card-body font-mono">
      <div class="card-title text-indigo-600 line-clamp-1 md:line-clamp-2">
        {{ cartProduct?.title }}
      </div>

      <div class="card-actions justify-between items-center mt-5">
        <div class="text-indigo-700 font-bold">R$ {{ cartProduct?.price }}</div>
        <div>Qty: {{ cartStore.quantity }}</div>
      </div>
    </div>
  </div>
</template>
