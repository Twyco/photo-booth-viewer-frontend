<script setup lang="ts">

import AppContainer from "@views/application/app-container.vue";
import {useDisplay} from "vuetify";
import {computed, nextTick, ref} from "vue";

const {xs, sm, md, lg} = useDisplay();

const steps = [
  {
    title: 'Code eingeben:',
    description: 'Auf der Startseite gibst du den Code ein, den du bei der Fotobox bekommen hast. ' +
      'Damit kannst du das dazugehörige Album ansehen.',
  },
  {
    title: 'Codes speichern:',
    description: 'Wenn du nur mal reinschauen willst, geht das auch ohne Anmeldung. ' +
      'Aber: Wenn du dir ein Konto anlegst und dich einloggst, werden alle Codes, die du hier eingibst, ' +
      'automatisch in deinem Konto gespeichert. Das heißt,  du musst die nicht jedes Mal neu eingeben.',
  },
  {
    title: 'Alle Alben im Überblick:',
    description: 'Wenn du angemeldet bist, kannst du unter Fotoalben alle Alben sehen, ' +
      'dessen Codes in deinem Konto gespeichert sind.',
  }
];

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

function handleSubmit(): void {
  let cleanedCode = code.value.replace(/-/g, '');
  cleanedCode = cleanedCode.toLowerCase();
  console.log(cleanedCode);
  if (cleanedCode.length < 25 || cleanedCode.length > 25) {
    hasError.value = true;
    setTimeout(() => (hasError.value = false), 500);
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
    <div class="w-full h-full grid place-items-center text-justify text-primary">
      <div class="text-left pt-4" :style="appWidth">
        <h1 class="text-5xl font-bold mb-4">Wie funktioniert es?</h1>
        <v-timeline
          line-color="primary"
          line-thickness="2"
          side="end"
          class="w-fit"
        >
          <v-timeline-item
            v-for="(step, index) in steps"
            dot-color="primary"
            size="default"
            fill-dot
          >
            <template v-slot:icon>
              <span class="text-secondary text-xl font-bold">{{ index + 1 }}</span>
            </template>
            <div class="mb-2">
              <div class="text-2xl font-bold mb-1">
                {{ step.title }}
              </div>
              <p class="text-justify text-base leading-tight">
                {{ step.description }}
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
        <div class="w-full grid place-items-center">
          <v-form
            :class="`border-2 border-primary ${xs ? 'p-4' : 'p-10'} rounded-xl mt-10 w-full code-field-max-width`"
            @submit.prevent="handleSubmit"
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
            />
          </v-form>
        </div>
      </div>
    </div>
  </app-container>
</template>

<style scoped>
.code-field-max-width {
  max-width: 30rem;
}
</style>