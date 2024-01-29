import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),

  actions: {
    addCart(product) {
      this.cart.push(product)
    },

    removeItem(i) {
      this.cart.splice(i, 1)
    },
    clearCart() {
      this.cart.length = 0
    }
  }
})
