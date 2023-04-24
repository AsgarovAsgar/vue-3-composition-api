<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import useResource from '../composables/useResource'

const route = useRoute()

// Post
const { item: post, fetchOne: fetchPost } = useResource('posts')
fetchPost(route.params.id) // 3. using watch

// User
const { item: user, fetchOne: fetchUser } = useResource('users')
// 1. using then method
// fetchPost(route.params.id).then(() => {
//   fetchUser(post.value.userId)
// })


// 2. using IIFE function (did not work :D)
// (async () => {
//   await fetchPost(route.params.id)
//   fetchUser(post.value.userId)
// })()

// 3. using watch
watch(
  () => ({...post.value}),
  () => fetchUser(post.value.userId)
)
</script>