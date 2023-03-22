import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);
  const totalPrice = computed(() => {
    // let tp = 0
    // return items.value.length
    return 0
  });
  const itemsCount = computed(() => items.value.length);
  const displayItems = computed(() => items.value);

  const addToCart = (item) => {
    items.value.unshift(item)
    console.log('added', item, "to", items.value);
  }
  const removeAllItems = () => {
    items.value = []
  }
  const incrementPrice = () => {
    
  }
  const incrementItemQuantity = (cartItem) => {
    console.log("incrementItemQuantity---------------------------");
    console.log(items.value);
    items.value = items.value.filter(e => {
      if (e === cartItem) {
        e.prodQuantity++
      }
      console.log(items.value);
      return e
    })
    
  }
  const decrementPrice = () => {

  }
  // const calcTotalPrice = () => {

  // }
  // remove this line

  return {
    itemsCount,
    addToCart,
    removeAllItems,
    incrementPrice,
    decrementPrice,
    displayItems,
    totalPrice,
    incrementItemQuantity
  }
})
