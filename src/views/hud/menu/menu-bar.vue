<script setup lang="ts">

import {ref} from "vue";
import {useDisplay} from "vuetify";
import IconBtn from "@views/hud/menu/components/icon-btn.vue";
import MobileNavDrawer from "@views/hud/menu/components/mobile-nav-drawer.vue";
import AccountList from "@views/hud/menu/components/account-list.vue";

const {xs, sm} = useDisplay();

const drawer = ref<boolean>(true);
const menu = ref<boolean>(false);

</script>

<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon v-if="xs || sm" variant="text" @click.stop="drawer = !drawer" />
    <v-toolbar-title>Domes Fotobox</v-toolbar-title>
    <v-spacer/>
    <router-link v-if="!(xs || sm)" :to="{ name: 'home' }">
      <icon-btn text="Home" icon="mdi-home" />
    </router-link>
    <router-link v-if="!(xs || sm)" :to="{ name: 'albums' }" >
      <icon-btn text="Fotoalben" icon="mdi-image-multiple" />
    </router-link>
    <div class="text-center">
      <v-menu
        v-if="!(xs || sm)"
        v-model="menu"
        :close-on-content-click="false"
        location="bottom"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-account"
            variant="text"
            v-bind="props"
          />
        </template>
        <v-card color="primary" >
          <account-list bg="primary" />
        </v-card>
      </v-menu>
    </div>
  </v-app-bar>
  <mobile-nav-drawer
    v-if="xs || sm"
    v-model="drawer"
  />
</template>
