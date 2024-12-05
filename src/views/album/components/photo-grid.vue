<script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter();

defineProps({
  albumUuid: {
    type: String,
    default: ''
  },
  images: {
    type: Array<string>,
    default: []
  }
});

function openPhoto(photoIndex: number): void {
  router.push({name: 'photo-detail', params: {number: photoIndex + 1}});
}

</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div
      v-for="(src, index) in images"
      :key="index"
      class="relative w-full pt-[66.6667%] bg-gray-100 overflow-hidden rounded-lg"
    >
      <img
        :src="src"
        alt="Foto"
        class="absolute inset-0 object-cover w-full h-full"
        @click="openPhoto(index)"
      />
    </div>
  </div>
</template>

<style scoped>

</style>