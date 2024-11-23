<script setup lang="ts">

</script>

<template>
  <router-link :to="{ name: 'home' }" class="mr-4">Home</router-link>
  <router-link :to="{ name: 'albums' }">Album</router-link>

  <v-spacer/>
  <v-btn
    :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
    text="Toggle Theme"
    slim
    @click="onClick"
  ></v-btn>
</template>

<style scoped>

</style>