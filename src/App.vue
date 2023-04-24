<template>
  <nav class="p-5 bg-green-400 text-white mb-10 flex gap-4">
    <router-link :to="{ name: 'Home' }">Snazzy Fake Blog</router-link>
    <router-link :to="{ name: 'Basics' }">Basics</router-link>
  </nav>
  <div class="container mx-auto">
    <router-view></router-view>
  </div>
</template>

<script setup></script>
<style lang="css">
</style>