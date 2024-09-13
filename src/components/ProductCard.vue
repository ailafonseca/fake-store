<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { defineProps, defineEmits, computed } from 'vue'
import { CaSearchAdvanced } from '@kalimahapps/vue-icons'

const props = defineProps(['product'])
const emit = defineEmits(['show-modal'])

const cartStore = useCartStore()

const openModal = () => {
  emit('show-modal', props.product)
}

const checkedStars = computed(() => {
  if (!props.product?.rating?.rate) return 0

  let rate = props.product?.rating?.rate
  let fractionalPart = rate % 1
  let roundedRate

  if (fractionalPart < 0.39) {
    roundedRate = Math.floor(rate)
  } else if (fractionalPart > 0.79) {
    roundedRate = Math.ceil(rate)
  } else {
    roundedRate = Math.floor(rate) + 0.5
  }

  return roundedRate * 2
})
</script>

<template>
  <div class="card card-compact bg-base-100 shadow-xl m-1 md:m-3 md:flex-col flex-row">
    <div class="flex justify-center items-center min-w-40">
      <img :src="product?.image" class="md:w-28 md:h-32 md:m-3 h-24 w-28 m-5" />
    </div>

    <div class="card-body font-mono justify-between">
      <div
        class="text-indigo-600 font-bold lg:line-clamp-1 line-clamp-2 text-xs md:text-md md:text-center p-0"
      >
        {{ product?.title }}
      </div>
      <div class="text-indigo-950 md:line-clamp-3 text-xs md:text-sm hide-description text-center">
        {{ product?.description }}
      </div>
      <div class="flex md:justify-center items-center md:space-x-4 justify-start space-x-4">
        <div class="font-bold text-indigo-600">
          {{ cartStore.formatPrice(product?.price) }}
        </div>
        <div class="rating rating-sm rating-half">
          <input
            v-for="i in 10"
            :key="i"
            type="radio"
            :name="'rating-' + product.id"
            class="mask mask-star-2 bg-orange-600"
            :class="i % 2 ? 'mask-half-1' : 'mask-half-2'"
            :checked="checkedStars === i"
            disabled
          />
        </div>
        <!-- <div>{{ props.product?.rating?.rate }}</div>-->
      </div>

      <div class="flex md:justify-between justify-start space-x-4">
        <label for="my_modal_6" class="btn btn-xs" @click="openModal">
          <CaSearchAdvanced class="text-lg" />
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
.card-body {
  padding-top: 0rem;
}
</style>
