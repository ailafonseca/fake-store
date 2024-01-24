<script setup lang="ts">
import { RouterView } from 'vue-router'
import ShoppingCart from '@/components/ShoppingCart.vue'
import PurpleHeader from '@/components/PurpleHeader.vue'
</script>

<template>
  <div class="drawer drawer-start">
    <input id="cart" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <PurpleHeader />

      <RouterView />
    </div>
    <div class="drawer-side">
      <label for="cart" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <ShoppingCart />
      </div>
    </div>
  </div>
</template>
