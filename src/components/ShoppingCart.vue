<script setup lang="ts">
import CartCard from '@/components/CartCard.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <CartCard
    :cartProduct="cartProduct"
    v-for="(cartProduct, i) in cartStore.cart"
    v-bind:key="i"
    :i="i"
  />
</template>
