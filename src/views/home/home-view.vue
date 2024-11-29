<script setup lang="ts">

import AppContainer from "@views/application/app-container.vue";
import {useDisplay} from "vuetify";
import {computed, nextTick, ref} from "vue";

const {xs, sm, md, lg} = useDisplay();

const steps = [
  {
    boldText: 'Code eingeben:',
    text: 'Auf der Startseite gibst du den Code ein, den du bei der Fotobox bekommen hast. Damit kannst du das dazugehörige Album ansehen.',
  },
  {
    boldText: 'Codes speichern:',
    text: 'Wenn du nur mal reinschauen willst, geht das auch ohne Anmeldung. Aber: Wenn du dir ein Konto anlegst und dich einloggst, werden alle Codes, die du hier eingibst, automatisch in deinem Konto gespeichert. Das heißt,  du musst die nicht jedes Mal neu eingeben.',
  },
  {
    boldText: 'Alle Alben im Überblick:',
    text: 'Wenn du angemeldet bist, kannst du unter Fotoalben alle Alben sehen, dessen Codes in deinem Konto gespeichert sind.',
  }
];

const code = ref<string>('');
const codeInput = ref<HTMLInputElement>();

function handleInput(event: InputEvent): void {
  const inputElement = event.target as HTMLInputElement;
  let cursorPos = codeInput.value?.selectionStart || 0;


  if (code.value.length >= 23 && event.inputType !== 'deleteContentBackward') {
    event.preventDefault();
    return;
  }

  if (cursorPos % 6 === 0 && event.inputType !== 'deleteContentBackward') {
    cursorPos++;
  } else if (cursorPos % 6 === 0 && cursorPos !== 0 && event.inputType === 'deleteContentBackward') {
    cursorPos--;
  }

  let cleanedValue = code.value.replace(/[^a-zA-Z0-9]/g, '');
  cleanedValue = cleanedValue.toUpperCase();

  let formattedValue = cleanedValue.slice(0, 20);
  formattedValue = formattedValue.replace(/(.{5})(?=.)/g, '$1-');
  code.value = formattedValue;

  nextTick(() => {
    inputElement.selectionStart = cursorPos;
    inputElement.selectionEnd = cursorPos;
  });
}

function handleSubmit(): void {
  let cleanedCode = code.value.replace(/-/g, '');
  cleanedCode = cleanedCode.toLowerCase();
  console.log(cleanedCode);
}

const appWidth = computed(() => {
  if (xs.value || sm.value) {
    return 'w-full p-4'
  } else if (md.value) {
    return 'w-75 p-4'
  } else if (lg.value) {
    return 'w-50 p-4'
  }
});
</script>

<template>
  <app-container>
    <div class="w-full h-full grid place-items-center text-justify">
      <v-row :class="appWidth" justify="center">
        <h1 class="text-3xl font-bold mb-4">Anleitung</h1>
        <ol class="list-decimal list-outside space-y-2 text-lg">
          <li v-for="step in steps" class="mb-6">
            <b>{{ step.boldText }}</b>
            {{ step.text }}
          </li>
        </ol>
      </v-row>
      <v-form
        @submit.prevent="handleSubmit" class="w-full"
        :class="appWidth + ` ${ xs ? ' grid grid-cols-1 gap-2 place-items-center' : ' flex items-center space-x-2'}`"
      >
        <v-text-field
          ref="codeInput"
          type="text"
          v-model="code"
          prepend-inner-icon="mdi-key"
          placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
          label="Album Code hier eingeben"
          variant="outlined"
          class="custom-input w-full"
          @input="handleInput"
        />
        <v-btn
          text="Album Anzeigen"
          :class="`mb-${!xs ?'[22px]' : ''} w-48`"
          @click="handleSubmit"
        />
      </v-form>
    </div>
  </app-container>
</template>

<style scoped>

</style>