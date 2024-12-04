<script setup lang="ts">

import {useDisplay} from "vuetify";

const {xs} = useDisplay();

</script>

<template>
  <div class="absolute top-0 left-0 h-full w-full bg-primary z-20 opacity-90">
  </div>
  <div
    :class="`absolute top-0 left-0 aspect-square transform
    ${xs ? 'w-[600px] -translate-x-[200px] -translate-y-[100px]' : 'w-[650px] -translate-x-[200px] -translate-y-[100px]'}
     rounded-full bg-accent z-20 opacity-20`"
  >
  </div>
  <div class="absolute top-0 left-0 h-full w-full bg-transparent z-20 opacity-100">
    <slot/>
  </div>
</template>