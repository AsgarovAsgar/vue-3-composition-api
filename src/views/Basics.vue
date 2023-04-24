<template>
  <div class="flex flex-col m-8 gap-4 text-base w-1/6 ">
    <h1 class="text-lg font-medium">{{ name }}</h1>
    <button class="border px-3 py-2 shadow rounded" @click="removeWatcher">Remove watcher</button>
    <button class="border px-3 py-2 shadow rounded" @click="placeOrder">Place Order</button>
    <div class="flex">
      <label for="currencySymbol">currency =></label>
      <select id="currencySymbol" v-model="currencySymbol" class="border p-1 rounded">
        <option value="$">dollar</option>
        <option value="€">euro</option>
      </select>
    </div>
    <YummyMeal v-for="meal in meals" :key="meal.name" :name="meal.name" :price="meal.price" @addToCart="addItemToCart" />
  </div>
</template>

<script setup>
import YummyMeal from '../components/YummyMeal.vue'
import { ref, reactive, watch, provide } from 'vue'
const currencySymbol = ref('$')
provide('currencySymbol', currencySymbol)
const name = ref('Snazzy burger')
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
