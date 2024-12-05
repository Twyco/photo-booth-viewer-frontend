<script setup lang="ts">
import AppContainer from "@views/application/app-container.vue";
import {useRoute} from "vue-router";
import {nextTick, onMounted, ref, type Ref} from "vue";
import type {Album} from "@/types/Album";
import {useSingleAlbumStore} from "@/stores/singleAlbumStore";
import router from "@/router/router";
import {useDisplay} from "vuetify";
import DetailAlbumHeader from "@views/album/components/detail-album-header.vue";
import PhotoGrid from "@views/album/components/photo-grid.vue";

const route = useRoute();

const {xs, sm} = useDisplay();
const singleAlbumStore = useSingleAlbumStore();

const albumUuid = route.params.uuid as string;
const album: Ref<Album | null> = ref(null);
const images: Ref<string[]> = ref([]);

onMounted(async () => {
  await singleAlbumStore.fetchAlbum(albumUuid)
    .then(() => {
      if (singleAlbumStore.error) {
        nextTick(() => {
          router.push({name: 'home'});
        })
        return;
      }

      album.value = singleAlbumStore.album;
      images.value = singleAlbumStore.images.map((imageName) => {
        return `${import.meta.env.VITE_PHOTOBOOTH_API_URL}/albums/${album.value?.uuid}/images/${imageName}`;
      });

    })
    .catch((error) => {
      console.error('Error fetching album:', error);
      nextTick(() => {
        router.push({name: 'home'});
      });
    })
  ;
});

</script>

<template>
  <app-container>
    <div class="w-full h-full grid place-items-center text-justify text-primary">
      <div :class="`text-left w-full ${(xs || sm)? 'mb-20' : 'pt-4'}`">
        <detail-album-header v-if="album" :album="album"/>
        <div :class="(xs || sm) ? 'mt-4' : 'mt-16'"/>
        <photo-grid :images="images"/>
      </div>
    </div>
  </app-container>
</template>

<style scoped>

</style>