<script setup lang="ts">

import MenuBar from "@views/hud/menu/menu-bar.vue";

</script>

<template>
  <v-app class="overflow-hidden h-screen">
    <menu-bar/>
    <v-main class="bg-custom-white overflow-y-auto h-full">
      <v-container>
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>‚