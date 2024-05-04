<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { RouterView } from 'vue-router'
import ShoppingCart from '@/components/ShoppingCart.vue'
import PurpleHeader from '@/components/PurpleHeader.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore() // o retorno de useCart é atribuido a cartStore, por causa do (). Este retorno é um objeto
</script>

<template>
  <div class="drawer drawer-start h-screen">
    <input id="cart" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <PurpleHeader class="fixed top-0 right-0 left-0 z-20" />

      <RouterView class="relative z-10" />
    </div>
    <div class="drawer-side z-30">
      <label for="cart" aria-label="close sidebar" class="drawer-overlay"></label>
      <div
        class="menu p-4 w-80 min-h-full max-h-full overflow-y-auto bg-base-200 text-base-content grid grid-cols-1"
      >
        <label for="cart" class="drawer-button btn absolute right-0">
          <XMarkIcon class="w-7" />
        </label>
        <div class="mt-4"><ShoppingCart /></div>
        <div
          v-if="cartStore.cart.length > 0"
          class="p-2 flex items-center text-sm justify-between md:text-base sticky bottom-0 bg-base-200"
        >
          <div class="font-bold text-sm">Total: R$ {{ cartStore.totalAmount.toFixed(2) }}</div>
          <button class="btn btn-primary btn-xs" @click="cartStore.finishOrder(cartStore.cart)">
            Finish Order
          </button>
          <button class="btn btn-error btn-circle btn-xs" @click="cartStore.cancelOrder">X</button>
        </div>
        <div
          v-if="
            cartStore.cart.length === 0 &&
            cartStore.finishTriggered === false &&
            cartStore.cancelTriggered === false
          "
          class="font-bold text-xl"
        >
          The cart is empty!
        </div>
        <div
          v-if="cartStore.cart.length === 0 && cartStore.cancelTriggered === true"
          class="font-bold text-xl"
        >
          Your order was canceled!
        </div>

        <div
          v-if="cartStore.cart.length === 0 && cartStore.finishTriggered === true"
          class="font-bold text-xl"
        >
          Purchase made!
        </div>
      </div>
    </div>
  </div>
</template>
