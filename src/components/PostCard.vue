<template>
  <router-link :to="{ name: 'Post', params: { id: post.id } }" class="flex m-2 gap-2 items-center shadow-md w-1/4 flex-grow rounded overflow-hidden border">
    <img src="https://via.placeholder.com/150" class="w-[150px] h-[150px]" />
    <h1>
      {{ post.title }}
    </h1>
  </router-link>
</template>
<script setup>
const props = defineProps({
  post: Object,
});
const post = { ...props.post };
</script>