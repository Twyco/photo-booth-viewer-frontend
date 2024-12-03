<script setup lang="ts">

import {ref} from "vue";
import {useDisplay} from "vuetify";
import MobileNavDrawer from "@views/hud/menu/components/mobile-nav-drawer.vue";
import NavMenu from "@views/hud/menu/components/nav-menu.vue";

const {xs, sm} = useDisplay();

const drawer = ref<boolean>(false);

function toggleDrawer(): void {
  drawer.value = !drawer.value;
}

</script>

<template>
  <v-app-bar
    color="custom-white text-primary custom-bar-border"
    class="text-lg"
    prominent>
    <v-app-bar-nav-icon v-if="xs || sm" variant="text" @click.stop="toggleDrawer"/>
    <v-toolbar-title>Domes Fotobox</v-toolbar-title>
    <v-spacer/>
    <router-link v-if="!(xs || sm)" :to="{ name: 'home' }" class="mr-4 hover:underline">
      Home
    </router-link>
    <router-link v-if="!(xs || sm)" :to="{ name: 'albums' }" class="mr-4 hover:underline">
      Fotoalben
    </router-link>
    <nav-menu
      v-if="!(xs || sm)"
    />
  </v-app-bar>
  <mobile-nav-drawer
    v-if="(xs || sm)"
    v-model="drawer"
  />
</template>

<style scoped>
.custom-bar-border {
  border-bottom: 4px solid;
}
</style>