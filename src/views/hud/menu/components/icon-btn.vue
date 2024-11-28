<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <v-btn color="white">
    <v-icon class="mr-1">{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>
