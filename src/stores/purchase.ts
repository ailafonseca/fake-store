import { defineStore } from 'pinia'

export const usePurchaseStore = defineStore('purchase', {
  state: () => ({
    purchases: []
  }),

  actions: {
    finishOrder(products) {
      this.purchases.push([...products])
    }
  }
})
