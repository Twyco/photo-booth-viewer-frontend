<script setup lang="ts">

import MenuBar from "@views/hud/menu/menu-bar.vue";

</script>

<template>
  <v-app>
    <menu-bar/>
    <v-main :class="'bg-custom-white'">
      <v-container>
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>‚