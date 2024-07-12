<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { defineProps, defineEmits } from 'vue'
const props = defineProps(['product'])
const emit = defineEmits(['show-modal'])

const cartStore = useCartStore()

const openModal = () => {
  emit('show-modal', props.product)
}
</script>

<template>
  <div
    class="card card-compact bg-base-100 shadow-xl m-1 md:m-3 overflow-hidden md:flex-col flex-row"
  >
    <div class="flex justify-center items-center w-auto">
      <img :src="product?.image" class="md:w-28 md:h-32 md:m-3 h-20 w-20 m-5" />
    </div>
    <div class="card-body font-mono">
      <div class="text-indigo-600 font-bold line-clamp-1 md:line-clamp-2 text-xs md:text-lg">
        {{ product?.title }}
      </div>
      <div class="text-indigo-950 line-clamp-1 md:line-clamp-3 text-xs md:text-sm">
        {{ product?.description }}
      </div>
      <!--tirar descrição no mobile-->

      <div class="card-actions md:justify-between items-center">
        <div class="text-indigo-700 font-bold text-xs">
          {{ cartStore.formatPrice(product?.price) }}
        </div>

        <button
          class="btn btn-primary btn-xs"
          @click="
            () => {
              cartStore.addCart(product)
            }
          "
        >
          Add to Cart
        </button>
        <label for="my_modal_6" class="btn btn-xs" @click="openModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
            />
          </svg>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-description {
  display: block;
}

@media (max-width: 640px) {
  .hide-description {
    display: none;
  }
}
</style>
