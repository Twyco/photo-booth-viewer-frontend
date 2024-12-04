<script setup lang="ts">
import NavMenu from "@views/hud/menu/components/nav-menu.vue";
import {computed} from "vue";

const borderStyle = computed(() => {
  return {borderBottom: '4px solid'};
});
</script>

<template>
  <v-app-bar
    color="custom-white "
    class="text-lg text-primary uppercase font-bold"
    :style="borderStyle"
    prominent>
    <v-toolbar-title><span class="uppercase font-bold">Domes Fotobox</span></v-toolbar-title>
    <v-spacer/>
    <router-link :to="{ name: 'home' }" class="mr-4 hover:underline">
      Home
    </router-link>
    <router-link :to="{ name: 'albums' }" class="mr-4 hover:underline">
      Fotoalben
    </router-link>
    <nav-menu/>
  </v-app-bar>
</template>
