<script setup lang="ts">

import {useDisplay} from "vuetify";
import {computed} from "vue";

const {xs} = useDisplay();


const computedClass = computed(() => {
  if(xs.value) {
    return 'w-full h-full grid place-items-center'
  }else {
    return 'w-[45%] h-150 grid place-items-center'
  }
});

</script>

<template>
  <div class="w-full h-full grid place-items-center">
    <div :class="computedClass">
      <v-card
        width="100%"
        :height="!xs ? 'fit' : '100%'"
        :class="!xs ? 'px-10 py-16 d-flex flex-column' : 'px-4 py-16 d-flex flex-column h-full'"
        color="custom-white"
        :rounded="!xs ? 'xl' : ''"
        :elevation="!xs ? 20 : ''"
      >
        <div :class="`text-custom-black font-bold text-4xl mb-6`">
          <slot name="title" />
        </div>
        <v-card-subtitle v-if="!xs" opacity="1" class="text-secondary -mt-2 mb-6 px-0">
          <slot name="subtitle" />
        </v-card-subtitle>

        <v-card-text class="px-0">
          <slot name="default"/>
        </v-card-text>
        <div class="mt-auto">
          <slot name="bottom"/>
        </div>
      </v-card>
    </div>
  </div>
</template>
