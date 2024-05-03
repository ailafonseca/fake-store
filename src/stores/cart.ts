import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    purchases: [],
    totalAmount: 0,
    quantity: 0,
    finishTriggered: false,
    cancelTriggered: false
  }),

  actions: {
    addCart(product) {
      this.cart.push(product)
      this.quantity++
      this.calculateTotalAmount()
    },

    removeItem(i) {
      this.cart.splice(i, 1)
      this.quantity--
      this.calculateTotalAmount()
    },
    finishOrder(product) {
      this.purchases.push(product)
      this.finishTriggered = true
      this.cancelTriggered = false
      this.cart = []
      this.quantity = 0
      this.calculateTotalAmount()
    },
    cancelOrder() {
      this.cart = []
      this.quantity = 0
      this.cancelTriggered = true
      this.finishTriggered = false
    },
    calculateTotalAmount() {
      this.totalAmount = this.cart.reduce((acc, product) => acc + product.price, 0)
    }
  }
})
