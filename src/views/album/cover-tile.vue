<script setup lang="ts">

import {type PropType} from "vue";
import type {Album} from "@/types/Album";
import {formatDate} from "@/utils/dateUtils";
import {useDisplay} from "vuetify";

defineProps({
  coverSrc: {
    type: String,
    default: ''
  },
  album: {
    type: Object as PropType<Album>,
    default: ''
  }
});

const {xs, sm, } = useDisplay();

</script>

<template>
  <div class="relative w-full h-full">
    <div class="absolute top-0 left-0 w-full h-full bg-primary opacity-60"/>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
      :class="{'w-full': true, 'px-4': xs || sm}"
    >
      <div class="text-custom-white font-bold" :class="xs ? 'text-3xl' : 'text-5xl'">{{ album.name }}</div>
      <div class="text-custom-white font-bold" :class="xs ? 'text-2xl' : 'text-3xl'">vom {{ formatDate(album.event_date) }}</div>
    </div>
    <img :src="coverSrc" :alt="album.name" class="w-full h-full object-cover"/>
  </div>
</template>

<style scoped>

</style>