<script setup lang="ts">
import { usePurchaseStore } from '@/stores/purchase'
const purchaseStore = usePurchaseStore()
</script>

<template>
  <div>
    <div v-for="(purchase, i) in purchaseStore.purchases" :key="i">
      Pedido {{ i + 1 }}
      <div class="flex justify-center items-center">
        <div class="card w-96 bg-base-100" :key="j" v-for="(purchaseProduct, j) in purchase">
          <div class="card-body w-auto">
            <img :src="purchaseProduct?.image" class="md:w-28 md:h-32 md:m-3 w-18 h-32 m-2" />
            <h2 class="card-title">{{ purchaseProduct?.title }}</h2>
            <p class="text-indigo-700 font-bold">R${{ purchaseProduct?.price }}</p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
