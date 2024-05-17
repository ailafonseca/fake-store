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
      const productCopy = { ...product }
      const productAddedToCart = this.cart.find((item) => item.id === productCopy.id)

      if (!productAddedToCart) {
        productCopy.quantity = 1
        this.cart.push(productCopy)
      } else {
        productAddedToCart.quantity++
      }

      this.calculateTotalAmount()
      this.calculateTotalProductsQuantity()
    },

    removeItem(product) {
      const productAddedToCart = this.cart.find((item) => item.id === product.id)
      const index = this.cart.findIndex((item) => item.id === product.id)

      if (productAddedToCart.quantity > 1) {
        productAddedToCart.quantity--
      } else {
        this.cart.splice(index, 1)
      }
      this.calculateTotalAmount()
      this.calculateTotalProductsQuantity()
    },

    finishOrder() {
      this.purchases.push([...this.cart])
      this.finishTriggered = true
      this.cancelTriggered = false
      this.cart = []
      console.log('este é o carrinho:', this.cart)
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
