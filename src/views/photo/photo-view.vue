<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {useSingleAlbumStore} from "@/stores/singleAlbumStore";
import {computed, nextTick, onMounted, ref, type Ref, watch} from "vue";
import type {Album} from "@/types/Album";
import {useDisplay} from "vuetify";
import ArrowLeft from "@views/photo/components/arrow-left.vue";
import ArrowRight from "@views/photo/components/arrow-right.vue";

const route = useRoute();
const router = useRouter()
const {xs, sm, md} = useDisplay();
const singleAlbumStore = useSingleAlbumStore();

const albumUuid = route.params.uuid as string;
const photoNumber = route.params.number as string;
if (photoNumber != null) {
  router.push({name: ''})
}
const currentIndex = ref(parseInt(photoNumber) || 1);

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

watch(
  () => route.params.number,
  (newNumber) => {
    currentIndex.value = parseInt(newNumber as string) || 1;
  }
);


const currentImage = computed(() => images.value[currentIndex.value - 1]);
const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
    updateURL();
  }
};
const nextImage = () => {
  if (currentIndex.value < images.value.length) {
    currentIndex.value += 1;
    updateURL();
  }
};

function updateURL(): void {
  router.push({name: 'photo-detail', params: {uuid: route.params.uuid, number: currentIndex.value.toString()}});
}

function closeView(): void {
  router.push({name: 'album-detail', params: {uuid: route.params.uuid, number: currentIndex.value.toString()}});
}

const startX: Ref<number> = ref(0);

function startTouch(event: any) {
  startX.value = event.touches[0].clientX;
}

function endTouch(event: any) {
  const endX = event.changedTouches[0].clientX;
  const distance = startX.value - endX;
  console.log(Math.abs(distance));
  if (Math.abs(distance) > 50) {
    if (distance > 0) {
      nextImage();
    } else {
      previousImage();
    }
  }
}


function downloadImage() {
  const url = images.value[currentIndex.value - 1];
  console.log(url);
  if (url) {
    const link = document.createElement('a');
    link.href = url + '/download';
    link.click();
  }
}


</script>

<template>
  <div
    class="relative flex items-center justify-center h-screen w-screen bg-gray-900 overflow-hidden"
    @touchstart="startTouch"
    @touchend="endTouch"
  >
    <div
      class="relative"
      :class="(xs || sm || md) ? 'w-full h-full' : 'w-3/4 h-3/4'"
    >
      <img
        :src="images[currentIndex - 1]"
        alt="Album Image"
        class="object-contain w-full h-full"
      />
      <div v-if="(xs || sm || md)">
        <button
          v-if="!(currentIndex <= 1)"
          class="absolute left-1 top-1/2 transform btn-style opacity-80 -translate-y-1/2 rounded-full p-2"
          @click="previousImage"
        >
          <arrow-left/>
        </button>

        <button
          v-if="!(currentIndex >= images.length)"
          class="absolute right-1 top-1/2 transform btn-style -translate-y-1/2 rounded-full p-2"
          @click="nextImage"
        >
          <arrow-right/>
        </button>
      </div>
      <div v-else>
        <button
          v-if="!(currentIndex <= 1)"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full px-3 py-5"
          @click="previousImage"
        >
          <arrow-left/>
        </button>

        <button
          v-if="!(currentIndex >= images.length)"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full px-3 py-5"
          @click="nextImage"
        >

          <arrow-right/>
        </button>
      </div>
    </div>

    <button
      class="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2"
      @click="closeView"
    >
      <v-icon>mdi-close</v-icon>
    </button>

    <button
      class="absolute top-4 right-16 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2"
      @click="downloadImage"
    >
      <v-icon>mdi-download</v-icon>
    </button>
  </div>
</template>

<style scoped>
.btn-style {
  opacity: 80;
  background: rgba(200, 211, 229, 0.4) !important;
}

.btn-style:hover {
  opacity: 100;
  background: rgba(200, 211, 229, 0.8) !important;
}
</style>