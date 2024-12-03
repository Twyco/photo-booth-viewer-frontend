<script setup lang="ts">

import AccountList from "@views/hud/menu/components/account-list.vue";
import {ref} from "vue";


const menu = ref<boolean>(false);
</script>

<template>
  <div class="text-center">
    <v-menu
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
      <v-card color="primary">
        <account-list bg="custom-white" @closeMenu="menu = false"/>
      </v-card>
    </v-menu>
  </div>
</template>

<style scoped>

</style>