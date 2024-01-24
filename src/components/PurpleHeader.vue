<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="font-mono text-purple-900 bg-purple-300 p-2 md:flex items-center md:justify-between grid grid-cols-2"
  >
    <div class="md:flex items-center">
      <img src="/./src/assets/store-shopping-ecommerce-svgrepo-com.svg" class="h-14 w-14" />
      <div class="md:text-2xl text-xl">Store</div>
    </div>
    <div class="md:flex items-center">
      <label for="cart" class="drawer-button btn">
        <ShoppingCartIcon class="w-5" />
      </label>
      <div class="md:text-base md:space-x-4 text-sm md:ml-4 space-x-1 mt-3">
        <RouterLink to="/purchases">Purchases</RouterLink>

        <RouterLink to="/">Products</RouterLink>
      </div>
    </div>
  </div>
</template>
