<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <div
    class="font-mono text-purple-900 bg-purple-300 p-2 md:flex items-center md:justify-between grid grid-cols-2 w-auto"
  >
    <div class="flex items-center justify-center md:ml-12">
      <RouterLink to="/">
        <img src="/./src/assets/store-shopping-ecommerce-svgrepo-com.svg" class="h-14 w-14" />
      </RouterLink>

      <div class="md:text-2xl text-xl">
        <RouterLink to="/"> Store</RouterLink>
      </div>
    </div>
    <div class="flex items-center justify-center md:mr-12">
      <div class="md:grid-flow-col grid grid-cols-1 md:text-base md:ml-4 md:space-x-4 mt-3 mr-4">
        <RouterLink to="/">Products</RouterLink>
        <RouterLink to="/purchases">Purchases</RouterLink>
      </div>
      <div @click="cartStore.drawerToggle" class="relative cursor-pointer">
        <ShoppingCartIcon class="w-6" />
        <div class="badge badge-ghost md:badge-sm badge-xs absolute -top-2 -right-3">
          {{ cartStore.calculateTotalProductsQuantity }}
        </div>
      </div>
    </div>
  </div>
</template>
