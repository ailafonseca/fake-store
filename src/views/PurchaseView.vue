<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <div v-if="cartStore.purchases.length > 0" class="mt-16 pt-2">
    <div v-for="(purchase, i) in cartStore.purchases" :key="i">
      <!--loop nos arrays de compras-->
      <div class="text-indigo-700 font-bold p-5 border-t">Order {{ i + 1 }}</div>
      <div class="items-center grid grid-cols-1 md:grid-cols-5 border-b">
        <div class="card bg-base-100" :key="j" v-for="(purchaseProduct, j) in purchase">
          <!--loop em cada compra  -->
          <div class="card-body">
            <img
              :src="purchaseProduct?.image"
              class="md:w-36 md:h-40 md:m-3 w-28 h-32 m-2 flex items-center"
            />
            <h2 class="card-title line-clamp-1 md:line-clamp-2">{{ purchaseProduct?.title }}</h2>
            <p class="text-indigo-700 font-bold">
              {{ cartStore.formatPrice(purchaseProduct?.price) }} x
              {{ purchaseProduct?.quantity }} =
              {{ cartStore.formatPrice(purchaseProduct?.price * purchaseProduct?.quantity) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="grid grid-cols-1 place-items-center font-bold text-xl mt-16 pt-2">
    No purchases yet!
  </div>
</template>
