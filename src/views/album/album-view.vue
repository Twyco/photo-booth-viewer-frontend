<script setup lang="ts">

import AppContainer from "@views/application/app-container.vue";
import {onMounted} from "vue";
import {formatDate} from "@/utils/dateUtils";
import {useAlbumCollectionStore} from "@/stores/albumCollectionStore";

const albumCollectionStore = useAlbumCollectionStore();

onMounted(async () => {
  await albumCollectionStore.fetchAlbums();
})

</script>

<template>
  <app-container>
    <div class="px-48 py-20 grid grid-cols-4 gap-12">
      <router-link
        v-for="album in albumCollectionStore.data"
        :to="{ name: 'album-detail', params: {uuid: album.uuid} }"
        class="grid grid-cols-1 items-center justify-center text-center w-48 h-48 bg-red text-black text-2xl font-bold">
        <v-row class="bg-yellow mt-auto" justify="center" no-gutters>
          {{ album.name }}
        </v-row>
        <v-row class="bg-orange mb-auto" justify="center" no-gutters>
          {{ formatDate(album.event_date) }}
        </v-row>
      </router-link>
    </div>
  </app-container>
</template>

<style scoped>

</style>