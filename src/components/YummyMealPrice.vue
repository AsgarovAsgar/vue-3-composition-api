<template>
  <p>{{ pricePretty }}</p>
</template>

<script>
import { computed } from 'vue';
export default {
  props: {
    currencySymbol:String,
    price: Number
  },
  setup(props) {
    const pricePretty = computed(() => {
      return `${props.currencySymbol}${props.price}`
    })

    return { pricePretty}
  }
}

</script>

<style scoped>
.yummy {
  display: flex;
  gap: 8px;
  margin: 4px;
}
</style>