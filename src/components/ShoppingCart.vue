<script setup lang="ts">
import { XCircleIcon } from '@heroicons/vue/24/solid'
import { useCartStore } from '@/stores/cart'
import { defineProps, ref } from 'vue'
defineProps(['product'])
const cartStore = useCartStore() // o retorno de useCart é atribuido a cartStore, por causa do (). Este retorno é um objeto
</script>

<template>
  <div class="drawer-side">
    <label for="cart" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <div v-for="(cartProduct, i) in cartStore.cart" :key="i">
        <div class="card card-compact bg-base-100 shadow-xl m-1 md:m-3">
          <div class="grid justify-items-end">
            <button @click="removeItem()"><XCircleIcon class="w-7 text-red-700" /></button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
