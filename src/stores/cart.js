import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
	const items = ref([]);
	const vat = computed(() => 1079)
	const shipping = computed(()=> 50)
	const totalPrice = computed(() => {
		let total;
		if (items.value.length === 0) {
			return (total = 0);
		}

		total = items.value
			.map((item) => {
				const quantity = parseInt(item.prodQuantity);
				const price = parseInt(item.prodPrice);
				const total = price * quantity;

				return total;
			})
			.reduce((acc, cur) => acc + cur, 0);

		return total;
	});
	const grandTotal = computed(()=> shipping.value + totalPrice.value)
	const itemsCount = computed(() => items.value.length);
	const displayItems = computed(() => items.value);

	const addToCart = (item) => {
		const alreadyInCart = items.value.some(
			(el) => item.prodName === el.prodName
		);

		if (alreadyInCart) {
      // console.log("in cart already");
      items.value = items.value.map(el => {
        if (el.prodName === item.prodName) {
          el.prodQuantity += parseInt(item.prodQuantity);
        }
        return el;
      })
      return;
		}
		items.value.unshift(item);
	};
	const removeAllItems = () => {
		items.value = [];
	};

	const incrementItemQuantity = (cartItem) => {
		// console.log("incrementItemQuantity---------------------------");
		// console.log(items.value);
		items.value = items.value.filter((e) => {
			if (e === cartItem) {
				e.prodQuantity++;
			}
			// console.log(items.value);
			return e;
		});
	};
  const decreaseQuantity = (item) => {
    items.value = items.value.map(el => {
      if (el.prodName === item.prodName) {
        if (el.prodQuantity === 1) {
          // console.log("quantity is one");
          return el;
        }
        el.prodQuantity--
      }
      return el;
    })
  };

  const deleteItem = (item) => {
    items.value = items.value.filter(el => el !== item)
  }


	return {
		itemsCount,
		addToCart,
		removeAllItems,

		// decrementPrice,
		displayItems,
		totalPrice,
    incrementItemQuantity,
    decreaseQuantity,
		deleteItem,
		
		vat,
		shipping,
		grandTotal
	};
});
