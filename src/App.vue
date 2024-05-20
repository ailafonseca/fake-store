<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { RouterView } from 'vue-router'
import ShoppingCart from '@/components/ShoppingCart.vue'
import PurpleHeader from '@/components/PurpleHeader.vue'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
const cartStore = useCartStore() // o retorno de useCart é atribuido a cartStore, por causa do (). Este retorno é um objeto

const cartMessage = computed(() => {
  if (cartStore.cart.length === 0) {
    if (cartStore.status === 'empty') {
      return 'The cart is empty!'
    } else if (cartStore.status === 'cancel') {
      return 'Your order was canceled!'
    } else if (cartStore.status === 'finish') {
      return 'Purchase made!'
    }
  }

  return null
})
</script>

<template>
  <div class="drawer drawer-start h-screen">
    <input id="cart" type="checkbox" class="drawer-toggle" v-model="cartStore.isDrawerOpen" />
    <div class="drawer-content">
      <PurpleHeader class="fixed top-0 right-0 left-0 z-20" />

      <RouterView class="relative z-10" />
    </div>
    <div class="drawer-side z-30">
      <label for="cart" aria-label="close sidebar" class="drawer-overlay"></label>
      <div
        class="menu p-0 w-80 min-h-full max-h-full overflow-y-auto bg-base-200 text-base-content flex-nowrap"
      >
        <label
          for="cart"
          class="drawer-button btn absolute right-0"
          @click="cartStore.drawerToggle"
        >
          <XMarkIcon class="w-7" />
        </label>
        <div class="mt-8 p-2"><ShoppingCart /></div>
        <div class="text-xl text-center font-bold">
          {{ cartMessage }}
        </div>
        <div
          v-if="cartStore.cart.length > 0"
          class="flex items-end text-sm justify-between md:text-base sticky bottom-0 bg-base-200 p-2 mt-auto"
        >
          <div class="font-bold text-sm">
            Total: R$ {{ cartStore.calculateTotalAmount.toFixed(2) }}
          </div>
          <button class="btn btn-primary btn-xs" @click="cartStore.finishOrder(cartStore.cart)">
            Finish Order
          </button>
          <button class="btn btn-error btn-circle btn-xs" @click="cartStore.cancelOrder">X</button>
        </div>
      </div>
    </div>
  </div>
</template>
