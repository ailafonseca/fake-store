<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="font-mono text-purple-900 bg-purple-300 p-2 md:flex items-center md:justify-between grid grid-cols-2"
  >
    <div class="flex items-center justify-center">
      <img src="/./src/assets/store-shopping-ecommerce-svgrepo-com.svg" class="h-14 w-14" />
      <div class="md:text-2xl text-xl">Store</div>
    </div>
    <div class="flex items-center justify-center">
      <div class="md:grid-flow-col grid grid-cols-1 md:text-base md:ml-4 md:space-x-4 mt-3">
        <RouterLink to="/">Products</RouterLink>
        <RouterLink to="/purchases">Purchases</RouterLink>
      </div>
      <label for="cart" class="drawer-button btn ml-3">
        <ShoppingCartIcon class="w-5" />
      </label>
    </div>
  </div>
</template>
