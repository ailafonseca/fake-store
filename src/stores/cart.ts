import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    purchases: [],
    isDrawerOpen: false,
    status: 'empty'
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
    },

    removeItem(product) {
      const productAddedToCart = this.cart.find((item) => item.id === product.id)
      const index = this.cart.findIndex((item) => item.id === product.id)

      if (productAddedToCart.quantity > 1) {
        productAddedToCart.quantity--
      } else {
        this.cart.splice(index, 1)
      }
    },

    finishOrder() {
      this.purchases.push([...this.cart])
      this.cart = []
      this.status = 'finish'
    },

    cancelOrder() {
      this.cart = []
      this.status = 'cancel'
    },

    drawerToggle() {
      this.isDrawerOpen = !this.isDrawerOpen
      this.status = 'empty'
    }
  },

  getters: {
    calculateTotalAmount(state) {
      return state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    },
    calculateTotalProductsQuantity(state) {
      return state.cart.reduce((total, product) => total + product.quantity, 0)
    }
  }
})
