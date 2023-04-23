<template>
  <h1>{{ name }}</h1>
  <button @click="removeWatcher">Remove watcher</button>
  <button @click="placeOrder">Place Order</button>
  <YummyMeal v-for="meal in meals" :key="meal.name" :name="meal.name" :price="meal.price" @addToCart="addItemToCart" :currencySymbol="currencySymbol" />
</template>

<script>
import YummyMeal from './components/YummyMeal.vue'
import { ref, reactive, watch } from 'vue'

export default {
  components: { YummyMeal },
  setup() {
    const name = ref('Snazzy burger')
    const currencySymbol = '$'
    const cart = reactive([])
    const meal = reactive({ name: 'Hamburger', price: 5 })
    const meals = reactive([
    { name: 'Hamburger', price: 5 },
    { name: 'Cheeseburger', price: 6 },
    { name: 'Impossible burger', price: 7 },
    { name: 'Fries', price: 2 },
    ])
    const placeOrder = () => alert('your order has been placed!')
    const addItemToCart = (item) => cart.push(item)
    // watch(() => [...cart], (newName, oldName) => console.log(newName, oldName))
    // const removeWatcher = watch([name, () => [...cart]], (newName, oldName) => console.log(newName, oldName))
    const removeWatcher = watch([() => [...cart]], (newName, oldName) => alert(`${newName} added to the cart`))
    return { name, placeOrder, addItemToCart, meal, meals, removeWatcher, currencySymbol }
  }
}
</script>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
