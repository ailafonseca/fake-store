import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    purchases: [],
    totalAmount: 0,
    totalProductsQuantity: 0,
    finishTriggered: false,
    cancelTriggered: false
  }),

  actions: {
    addCart(product) {
      if (product.quantity === undefined) {
        this.cart.push(product)
        product.quantity = 1
        this.calculateTotalAmount()
      } else {
        product.quantity++
      }
      this.calculateTotalAmount()
      this.calculateTotalProductsQuantity()
    },

    removeItem(product, i) {
      if (product.quantity > 1) {
        product.quantity--
      } else {
        this.cart.splice(i, 1)
      }
      this.calculateTotalAmount()
      this.calculateTotalProductsQuantity()
    },
    finishOrder(product) {
      this.purchases.push(product)
      this.finishTriggered = true
      this.cancelTriggered = false
      this.cart = []
      product.quantity = 0
      this.totalProductsQuantity = 0

      this.calculateTotalAmount()
    },
    cancelOrder() {
      this.cart = []
      this.cancelTriggered = true
      this.finishTriggered = false
      this.totalProductsQuantity = 0
    },
    calculateTotalAmount() {
      this.totalAmount = this.cart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      )
    },
    calculateTotalProductsQuantity() {
      this.totalProductsQuantity = this.cart.reduce((total, product) => total + product.quantity, 0)
    }
  }
})
