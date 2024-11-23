<script setup lang="ts">
import {ref} from 'vue'
import MenuBar from "@views/hud/menu/menu-bar.vue";

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <menu-bar/>
      </v-app-bar>

      <v-main>
        <v-container>
          <slot/>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>

</style>