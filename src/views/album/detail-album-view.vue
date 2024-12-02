<script setup lang="ts">
import AppContainer from "@views/application/app-container.vue";
import {useRoute} from "vue-router";
import {nextTick, onMounted, ref, type Ref} from "vue";
import type {Album} from "@/types/Album";
import {useSingleAlbumStore} from "@/stores/singleAlbumStore";
import {formatDate} from "@/utils/dateUtils";
import router from "@/router/router";

const route = useRoute();
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
    <div v-if="album" class="grid grid-cols-2 gap-4 w-fit">
      <span>Name:</span>
      <span>{{ album.name }}</span>
      <span>Beschreibung:</span>
      <span>{{ album.description }}</span>
      <span>Event-Datum: </span>
      <span>{{ formatDate(album.event_date) }}</span>
    </div>
    <div v-if="images" class="grid grid-cols-1 gap-4 w-fit">
      <div v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Album Image"/>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </app-container>
</template>

<style scoped>

</style>