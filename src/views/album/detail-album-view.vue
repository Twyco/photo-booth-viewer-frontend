<script setup lang="ts">
import AppContainer from "@views/application/app-container.vue";
import {useRoute} from "vue-router";
import {nextTick, onMounted, ref, type Ref} from "vue";
import type {Album} from "@/types/Album";
import {useSingleAlbumStore} from "@/stores/singleAlbumStore";
import router from "@/router/router";
import {useDisplay} from "vuetify";
import DetailAlbumHeader from "@views/album/components/detail-album-header.vue";

const route = useRoute();

const {xs, sm, md, lg} = useDisplay();
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
        <detail-album-header v-if="album" :album="album" />
        <template>
          <div class="container mx-auto py-8">
            <h1 class="text-2xl font-bold text-center mb-6">Fotoalbum XYZ</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div
                v-for="(src, index) in images"
                :key="index"
                class="relative w-full pt-[150%] bg-gray-100 overflow-hidden rounded-lg"
              >
                <img
                  :src="src"
                  alt="Foto"
                  class="absolute inset-0 object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!--    <div v-if="album" class="w-full bg-red">-->
    <!--      <-->
    <!--    </div>-->
    <!--    <div v-if="images" class="grid grid-cols-1 gap-4 w-fit">-->
    <!--      <div v-for="(image, index) in images" :key="index">-->
    <!--        <img :src="image" alt="Album Image"/>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div v-else>-->
    <!--      <p>Loading...</p>-->
    <!--    </div>-->
  </app-container>
</template>

<style scoped>

</style>