<script setup lang="ts">

import {computed, onMounted, ref} from "vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['update:showMobileMenu', 'update:barHeight']);

const menuBar = ref<HTMLElement | null>(null);
const menuBarCollider = ref<HTMLElement | null>(null);

onMounted(async () => {
  if (menuBar.value) {
    if (menuBarCollider.value) {
      menuBarCollider.value.style.marginTop = menuBar.value.offsetHeight + 'px';
    }
  }
});

const borderStyle = computed(() => {
  return {borderBottom: '4px solid #002566'};
});


</script>

<template>
  <div class="relative w-full h-full">
    <div ref="menuBar" class="absolute top-0 left-0 w-full h-fit">
      <v-row class="p-4 text-center bg-custom-white custom-bar-border" :style="borderStyle" align="center" no-gutters>
        <v-icon
          icon="mdi-menu"
          color="primary"
          size="x-large"
          @click="() => emit('update:showMobileMenu')"
          class="z-50"
        />
        <span
          class="ml-3 pt-1 text-xl uppercase font-bold text-primary z-50"
        >
          Domes Fotobox
        </span>
      </v-row>
    </div>
    <div ref="menuBarCollider"/>
  </div>
</template>

