<script setup lang="ts">
import AccountList from "@views/hud/menu/components/account-list.vue";
</script>

<template>
  <v-navigation-drawer
    location="left"
    color="primary"
    temporary
  >
    <v-list density="compact" nav>
      <router-link :to="{ name: 'home' }">
        <v-list-item prepend-icon="mdi-home" title="Home"/>
      </router-link>
      <router-link :to="{ name: 'albums' }">
        <v-list-item prepend-icon="mdi-image-multiple" title="Fotoalben"/>
      </router-link>
    </v-list>
    <account-list />
  </v-navigation-drawer>
</template>
