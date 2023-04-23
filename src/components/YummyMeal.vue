<template>
  <div class="yummy">
    <p>{{ name }}</p>
    <YummyMealPrice :price="price" :currencySymbol="currencySymbol" />
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import YummyMealPrice from './YummyMealPrice.vue';
export default {
  components: { YummyMealPrice },
  props: {
    name: String,
    price: Number,
    currencySymbol: String
  },
  setup(props, { emit }) {
    const addToCart = () => emit("addToCart", props.name);
    const pricePretty = computed(() => {
      return `$${props.price}`;
    });
    return { addToCart, pricePretty };
  },
}

</script>

<style scoped>
.yummy {
  display: flex;
  gap: 8px;
  margin: 4px;
}
</style>