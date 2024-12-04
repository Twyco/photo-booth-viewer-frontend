<script setup lang="ts">

import {useDisplay} from "vuetify";

const {xs} = useDisplay();

</script>

<template>
  <div class="absolute top-0 left-0 h-full w-full bg-primary z-20 opacity-90">
  </div>
  <div
    :class="`absolute top-0 left-0 w-[830px] aspect-square transform
    ${xs ? '-translate-x-[375px] -translate-y-[75px]' : '-translate-x-[250px] -translate-y-[125px]'}
     rounded-full bg-secondary z-20 opacity-40`"
  >
  </div>
  <div class="absolute top-0 left-0 h-full w-full bg-transparent z-20 opacity-100">
    <slot/>
  </div>
</template>