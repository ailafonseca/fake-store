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
      <img src="/./src/assets/store-shopping-ecommerce-svgrepo-com.svg" class="h-14 w-14" />
      <div class="md:text-2xl text-xl">Store</div>
    </div>
    <div class="flex items-center justify-center md:mr-12">
      <div class="md:grid-flow-col grid grid-cols-1 md:text-base md:ml-4 md:space-x-4 mt-3 mr-4">
        <RouterLink to="/">Products</RouterLink>
        <RouterLink to="/purchases">Purchases</RouterLink>
      </div>
      <label for="cart" class="drawer-button btn btn-ghost btn-xs w-8 p-0">
        <ShoppingCartIcon class="w-6" />
        <div class="badge badge-ghost md:badge-sm badge-xs relative -top-9 -right-3">
          {{ cartStore.cart.length }}
        </div>
      </label>
    </div>
  </div>
</template>
