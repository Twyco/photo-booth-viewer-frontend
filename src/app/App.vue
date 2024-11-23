<script setup lang="ts">
import {ref} from "vue";

const count = ref<number>(0);

</script>

<template>
  <div class="w-full h-full">
    <router-view />
  </div>
</template>