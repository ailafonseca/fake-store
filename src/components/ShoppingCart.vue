<script setup lang="ts">
import CartCard from '@/components/CartCard.vue'
import { useCartStore } from '@/stores/cart'
import { usePurchaseStore } from '@/stores/purchase'
const cartStore = useCartStore()
const purchaseStore = usePurchaseStore() // o retorno de useCart é atribuido a cartStore, por causa do (). Este retorno é um objeto
</script>

<template>
  <CartCard :cart-product="cartProduct" v-for="(cartProduct, i) in cartStore.cart" :key="i" />
  <div class="flex justify-end">
    <button class="btn btn-primary btn-sm" @click="purchaseStore.finishOrder(cartStore.cart)">
      Finish Order
    </button>
  </div>
</template>
