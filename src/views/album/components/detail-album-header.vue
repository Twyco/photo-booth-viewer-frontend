<script setup lang="ts">

import {formatDate} from "@/helpers/dateUtils";
import {useDisplay} from "vuetify";
import type {Album} from "@/types/Album";
import type {PropType} from "vue";

const {xs, sm} = useDisplay();

defineProps({
  album: {
    type: Object as PropType<Album>,
    default: ''
  }
});

</script>

<template>
  <div v-if="album" class="w-full h-fit">
    <div v-if="(xs || sm)" class="w-full flex flex-column">
      <span class="text-2xl font-bold">{{ formatDate(album.event_date) }}</span>
      <span class="text-4xl font-bold">{{ album.name }}</span>
      <span v-if="album.description?.length" class="text-sm mt-2 text-justify">{{ album.description }}</span>
    </div>
    <div v-else class="w-full grid grid-cols-2">
      <div class="w-full h-full flex flex-column">
        <span class="text-5xl font-bold">{{ album.name }}</span>
        <span class="text-3xl font-bold">{{ formatDate(album.event_date) }}</span>
      </div>
      <div v-if="album.description?.length" class="w-full h-full border-l-4 border-primary p-4">
        <span class="text-base mt-2 text-justify">{{ album.description }}</span>
      </div>
    </div>
  </div>
</template>
