<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  bg: {
    type: String,
    default: '',
  },
});

const computedClass = computed(() => {
  return props.bg ? `bg-${props.bg}` : '';
});
</script>

<template>
  <v-divider />
  <v-list density="compact" nav :class="computedClass"> <!-- When not logged in-->
    <router-link :to="{ name: 'login' }">
      <v-list-item prepend-icon="mdi-login" title="Anmelden"/>
    </router-link>
    <router-link :to="{ name: 'register' }">
      <v-list-item prepend-icon="mdi-account-plus" title="Registrieren"/>
    </router-link>
  </v-list>
  <v-divider />
  <v-list density="compact" nav :class="computedClass"> <!-- When not logged in-->
    <v-list-item prepend-icon="mdi-account" title="Account verwalten"/>
    <v-list-item prepend-icon="mdi-logout" title="Ausloggen" class="text-red"/>
  </v-list>
</template>
