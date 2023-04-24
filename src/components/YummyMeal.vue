<template>
  <div class="flex flex-col gap-2 border p-2 rounded shadow">
    <p>{{ name }} <YummyMealPrice :price="price" /></p>
    <button class="border rounded px-3 py-2" @click="addToCart">Add to cart</button>
  </div>
</template>

<script setup>
import YummyMealPrice from './YummyMealPrice.vue';

const props = defineProps({
  name: String,
  price: Number,
})
const emit = defineEmits('addToCart')
const addToCart = () => emit("addToCart", props.name);

</script>

<style scoped>
</style>