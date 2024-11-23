<script setup lang="ts">

import {ref} from "vue";

const count = ref<number>(0);

</script>

<template>
  <div class="w-full h-full grid place-items-center" style="user-select: none">
    <div class="w-fit h-fit grid place-items-center px-8 py-2 text-lg font-bold border-2 bg-secondary rounded-full text-primary" @click="(count == 100) ? count = 0 : count += 10">
      Hello World
    </div>
    <v-progress-circular :model-value="count" color="primary" />
    <v-progress-linear color="primary" indeterminate />
  </div>
</template>