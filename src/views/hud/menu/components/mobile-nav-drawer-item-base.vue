<script setup lang="ts" xmlns="http://www.w3.org/1999/html">

defineProps({
  link: {
    type: String,
    default: '',
  },
  router: {
    type: Boolean,
    default: false,
  }
});

</script>

<template>
  <router-link v-if="router" :to="{ name: link }">
    <slot/>
  </router-link>

  <a
    v-else
    :href="link"
    rel="noopener noreferrer"
  >
    <slot/>
  </a>
</template>
