<script setup lang="ts">

import AppContainer from "@views/application/app-container.vue";
import {onMounted, ref, type Ref} from "vue";
import {useAlbumCollectionStore} from "@/stores/albumCollectionStore";
import CoverTile from "@views/album/cover-tile.vue";

const albumCollectionStore = useAlbumCollectionStore();
const albumCovers: Ref<Record<string, string>> = ref({});

onMounted(async () => {
  await albumCollectionStore.fetchAlbums().then(() => {
    albumCollectionStore.data.map((album) => {
      albumCovers.value[album.uuid] = `${import.meta.env.VITE_PHOTOBOOTH_API_URL}/albums/${album.uuid}/cover`;
    });
  });
});

</script>

<template>
  <app-container>
    <div class="px-16 py-4 grid grid-cols-1 place-items-center gap-y-4">
      <router-link
        v-for="album in albumCollectionStore.data"
        :to="{ name: 'album-detail', params: {uuid: album.uuid} }"
        class="max-w-[384px]">
        <cover-tile :cover-src="albumCovers[album.uuid]" :album="album" />
      </router-link>
    </div>
  </app-container>
</template>

<style scoped>

</style>