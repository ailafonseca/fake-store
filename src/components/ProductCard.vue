<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['product'])
const emit = defineEmits(['show-modal'])

const cartStore = useCartStore()

const openModal = () => {
  emit('show-modal', props.product)
}
const getStarClasses = (index: number, rating: number) => {
  if (index < Math.floor(rating) || (index < Math.ceil(rating) && rating % 1 > 0.5)) {
    return 'mask mask-star bg-orange-600'
  } else {
    return 'mask mask-star bg-gray-400'
  }
}
</script>

<template>
  <div class="card card-compact bg-base-100 shadow-xl m-1 md:m-3 md:flex-col flex-row">
    <div class="flex justify-center items-center min-w-40">
      <img :src="product?.image" class="md:w-28 md:h-32 md:m-3 h-24 w-28 m-5" />
    </div>

    <div class="card-body font-mono justify-between">
      <div class="text-indigo-600 font-bold lg:line-clamp-1 line-clamp-2 text-xs md:text-lg">
        {{ product?.title }}
      </div>
      <div class="text-indigo-950 md:line-clamp-3 text-xs md:text-sm hide-description">
        {{ product?.description }}
      </div>
      <div class="flex md:justify-center items-center md:space-x-4 justify-start space-x-4">
        <div class="font-bold text-indigo-600">
          {{ cartStore.formatPrice(product?.price) }}
        </div>
        <div class="rating rating-xs">
          <input
            v-for="index in 5"
            :key="index"
            type="radio"
            name="rating-1"
            :class="getStarClasses(index - 1, product?.rating.rate)"
            disabled
          />
        </div>
      </div>

      <div class="flex md:justify-between justify-start space-x-4">
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
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .hide-description {
    display: none;
  }
}
</style>
