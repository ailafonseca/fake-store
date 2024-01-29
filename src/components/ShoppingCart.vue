<script setup lang="ts">
import CartCard from '@/components/CartCard.vue'
import { useCartStore } from '@/stores/cart'
import { usePurchaseStore } from '@/stores/purchase'
const cartStore = useCartStore()
const purchaseStore = usePurchaseStore() // o retorno de useCart é atribuido a cartStore, por causa do (). Este retorno é um objeto
const finishOrder = () => {
  purchaseStore.finishOrder(cartStore.cart)
  cartStore.clearCart()
}
</script>

<template>
  <div>
    <div class="flex flex-wrap">
      <CartCard
        :cart-product="cartProduct"
        v-for="(cartProduct, i) in cartStore.cart"
        :key="i"
        :i="i"
      />
    </div>
    <div class="fixed bottom-4 right-4">
      <button class="btn btn-primary btn-sm" @click="finishOrder">Finish Order</button>
    </div>
  </div>
</template>
