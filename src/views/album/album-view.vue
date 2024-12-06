<script setup lang="ts">

import AppContainer from "@views/application/app-container.vue";
import {computed, nextTick, onMounted, ref, type Ref} from "vue";
import {useAlbumCollectionStore} from "@/stores/albumCollectionStore";
import CoverTile from "@views/album/components/cover-tile.vue";
import type {AxiosResponse} from "axios";
import axiosInstance from "@app/axiosInstance";
import {useDisplay} from "vuetify";
import {useRouter} from "vue-router";

const albumCollectionStore = useAlbumCollectionStore();
const albumCovers: Ref<Record<string, string>> = ref({});

// onMounted(async () => {
//   await albumCollectionStore.fetchAlbums().then(() => {
//     albumCollectionStore.data.map((album) => {
//       albumCovers.value[album.uuid] = `${import.meta.env.VITE_PHOTOBOOTH_API_URL}/albums/${album.uuid}/cover`;
//     });
//   });
// });

const router = useRouter();

const {xs, sm, md, lg} = useDisplay();

const code = ref<string>('');
const codeInput = ref<HTMLInputElement>();

function cutInput(event: InputEvent) {
  if (code.value.length >= 29 && !event.inputType.includes('delete') && event.inputType !== 'insertLineBreak') {
    event.preventDefault();
  }
}

function handleInput(event: InputEvent): void {
  //TODO deleteByCut maybe prüfen ob delete
  const inputElement = event.target as HTMLInputElement;
  let cursorPos = codeInput.value?.selectionStart || 0;

  if (cursorPos % 6 === 0 && !event.inputType.includes('delete')) {
    cursorPos++;
  } else if (cursorPos % 6 === 0 && cursorPos !== 0 && !event.inputType.includes('delete')) {
    cursorPos--;
  }

  let cleanedValue = code.value.replace(/[^a-zA-Z0-9]/g, '');
  cleanedValue = cleanedValue.toUpperCase();

  let formattedValue = cleanedValue.slice(0, 25);
  formattedValue = formattedValue.replace(/(.{5})(?=.)/g, '$1-');
  code.value = formattedValue;

  nextTick(() => {
    inputElement.selectionStart = cursorPos;
    inputElement.selectionEnd = cursorPos;
  });
}

const loading: Ref<boolean> = ref(false);

async function handleSubmit(): Promise<void> {
  loading.value = true;
  let cleanedCode = code.value.replace(/-/g, '');
  cleanedCode = cleanedCode.toLowerCase();
  if (cleanedCode.length < 25 || cleanedCode.length > 25) {
    hasError.value = true;
    setTimeout(() => (hasError.value = false), 3000);
    loading.value = false;
    return
  }

  try {
    const response: AxiosResponse = await axiosInstance.get(`/access/${cleanedCode}`);
    await router.push({name: 'album-detail', params: {uuid: response.data.album.uuid}});
  } catch (error: any) {
    hasError.value = true;
    setTimeout(() => (hasError.value = false), 3000);
    error = error.response?.data || '';
    console.error('Error while fetching accesscode', error);
  } finally {
    loading.value = false;
  }

}

const appWidth = computed(() => {
  if (xs.value) {
    return {
      width: '100%',
      marginBottom: '5rem',
    };
  } else if (sm.value) {
    return {
      width: '80%',
    };
  } else if (md.value) {
    return {
      width: '70%',
    };
  } else if (lg.value) {
    return {
      width: '60%',
    };
  } else {
    return {
      width: '50%',
    }
  }
});

const hasError = ref(false);

</script>

<template>
  <app-container>
    <div class="px-16 py-4 grid grid-cols-1 place-items-center gap-y-4">
<!--      <router-link-->
<!--        v-for="album in albumCollectionStore.data"-->
<!--        :to="{ name: 'album-detail', params: {uuid: album.uuid} }"-->
<!--        class="max-w-[384px]">-->
<!--        <cover-tile :cover-src="albumCovers[album.uuid]" :album="album" />-->
<!--      </router-link>-->
      <p>Du musst angemeldet sein, um deine Gespeicherten Alben hier zu sehen zu können.</p>
      <div class="w-full grid place-items-center" :style="appWidth">
        <v-form
          :class="`border-2 border-primary ${xs ? 'p-4' : 'p-10'} rounded-xl mt-10 w-full code-field-max-width`"
          @submit.prevent="handleSubmit"
          :disabled="loading"
        >
          <div class="text-3xl text-center font-bold mb-8 text-primary">
            Hier zum Album
          </div>
          <v-text-field
            ref="codeInput"
            type="text"
            v-model="code"
            prepend-inner-icon="mdi-lock-outline"
            placeholder="#####-#####-#####-#####-#####"
            variant="outlined"
            :error="hasError"
            :class="`custom-input w-full mb-2 font-mono ${hasError ? 'animate-shake' : ''}`"
            @beforeinput="cutInput"
            @input="handleInput"
            rounded="lg"
          >
            <template v-slot:label class="font-sans">
              Album Code hier eingeben
            </template>
          </v-text-field>
          <v-btn
            text="Album Anzeigen"
            color="primary"
            size="large"
            class="w-full"
            @click="handleSubmit"
            :disabled="loading"
          />
        </v-form>
      </div>
    </div>
  </app-container>
</template>

<style scoped>

</style>