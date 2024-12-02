<script setup lang="ts">
import AppContainer from "@views/application/app-container.vue";
import {useRoute} from "vue-router";
import {onMounted, ref, type Ref} from "vue";
import type {Album} from "@/types/Album";
import {useSingleAlbumStore} from "@/stores/singleAlbumStore";
import {formatDate} from "@/utils/dateUtils";

const route = useRoute();
const singleAlbumStore = useSingleAlbumStore();

const albumUuid = route.params.uuid as string;
const album: Ref<Album | null> = ref(null);

onMounted(async () => {
  await singleAlbumStore.fetchAlbum(albumUuid).then(() => {
    album.value = singleAlbumStore.data;
  });
})


</script>

<template>
  <app-container>
    <div v-if="album" class="grid grid-cols-2 w-fit">
      <span>Name:</span>
      <span>{{ album.name }}</span>
      <span>Beschreibung:</span>
      <span>{{ album.description }}</span>
      <span>Event-Datum: </span>
      <span>{{ formatDate(album.event_date) }}</span>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </app-container>
</template>

<style scoped>

</style>