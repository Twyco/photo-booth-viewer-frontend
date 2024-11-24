<script setup lang="ts">

import MenuBar from "@views/hud/menu/menu-bar.vue";
</script>
‚
<template>
  <v-responsive class="border rounded">
    <v-app>
      <menu-bar/>
      <v-main>
        <v-container>
          <slot/>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>

</style>‚