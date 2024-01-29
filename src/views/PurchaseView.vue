<script setup lang="ts">
import { usePurchaseStore } from '@/stores/purchase'
const purchaseStore = usePurchaseStore()
</script>

<template>
  <div>
    <div v-for="(purchase, i) in purchaseStore.purchases" :key="i">
      <div class="text-indigo-700 font-bold p-5 border-t">Pedido {{ i + 1 }}</div>
      <div class="items-center grid grid-cols-1 md:grid-cols-5 border-b">
        <div class="card bg-base-100" :key="j" v-for="(purchaseProduct, j) in purchase">
          <div class="card-body">
            <img
              :src="purchaseProduct?.image"
              class="md:w-36 md:h-40 md:m-3 w-28 h-32 m-2 flex items-center"
            />
            <h2 class="card-title line-clamp-1 md:line-clamp-2">{{ purchaseProduct?.title }}</h2>
            <p class="text-indigo-700 font-bold">R${{ purchaseProduct?.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
