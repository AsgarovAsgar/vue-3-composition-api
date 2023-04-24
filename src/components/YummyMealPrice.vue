<template>
  <span>{{ pricePretty }}</span>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  props: {
    price: Number
  },
  setup(props) {
    const currencySymbol = inject('currencySymbol')
    const pricePretty = computed(() => {
      return `${currencySymbol.value}${props.price}`
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