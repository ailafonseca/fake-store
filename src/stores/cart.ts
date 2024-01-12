import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),

  actions: {
    addCart(product) {
      this.cart.push(product)
    },

    removeProduct(i) {
      this.cart.splice(i, 1)
    }
  }
})