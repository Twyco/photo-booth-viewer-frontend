<script setup lang="ts">

import {ref} from "vue";
import {useDisplay} from "vuetify";
import MobileNavDrawer from "@views/hud/menu/components/mobile-nav-drawer.vue";
import MenuBar from "@views/hud/menu/menu-bar.vue";
import MobileMenuBar from "@views/hud/menu/mobile-menu-bar.vue";

const {xs, sm} = useDisplay();

const showMobileMenu = ref<boolean>(false);

function toggleMobileMenu(): void {
  showMobileMenu.value = !showMobileMenu.value;
}

</script>

<template>
  <v-app class="overflow-hidden h-screen">
    <mobile-menu-bar
      v-if="xs || sm"
      :model-value="showMobileMenu"
      @update:showMobileMenu="toggleMobileMenu"
    />
    <menu-bar v-else/>
    <mobile-nav-drawer
      v-if="(xs || sm) && showMobileMenu"
      @update:showMobileMenu="toggleMobileMenu"
    />
    <v-main class="bg-custom-white overflow-y-auto h-full">
      <v-container>
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>
