import { defineStore } from 'pinia'
import type { Product, Purchase } from '@/models'
import router from '../router/index'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Product[],
    purchases: [] as Purchase[][],
    isDrawerOpen: false,
    status: 'empty'
  }),

  actions: {
    addCart(product: Product) {
      const productCopy = { ...product }
      const productAddedToCart = this.cart.find((item) => item.id === productCopy.id)

      if (!productAddedToCart) {
        productCopy.quantity = 1
        this.cart.push(productCopy)
      } else {
        productAddedToCart.quantity++
      }
    },

    removeItem(product: Product) {
      const productAddedToCart = this.cart.find((item) => item.id === product.id)
      const index = this.cart.findIndex((item) => item.id === product.id)
      if (!productAddedToCart) return // fixing typescript error
      if (productAddedToCart.quantity > 1) {
        productAddedToCart.quantity--
      } else {
        this.cart.splice(index, 1)
      }
    },

    finishOrder() {
      this.purchases.push(this.cart)
      this.cart = []
      this.status = 'finish'
      router.replace('/purchases')
    },

    clearCart() {
      this.cart = []
      this.status = 'empty'
    },

    drawerToggle() {
      this.isDrawerOpen = !this.isDrawerOpen
      this.status = 'empty'
    },
    formatPrice(price: number) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
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
