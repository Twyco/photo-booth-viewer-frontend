<script setup lang="ts">

defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <v-btn
    size="x-large"
    width="100%"
    rounded="xl"
    color="primary"
  >
    {{ text }}
  </v-btn>
</template>
