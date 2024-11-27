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
    <a
      href="https://staging.auth.bierpong.beer/login?client_id=2&redirect_uri=https://staging.fotobox.bierpong.beer&respone_type=code&scope=basic"
       rel="noopener noreferrer"
    >
      <v-list-item prepend-icon="mdi-login" title="Anmelden"/>
    </a>
    <a
      href="https://staging.auth.bierpong.beer/signup?client_id=2&redirect_uri=https://staging.fotobox.bierpong.beer&respone_type=code&scope=basic"
      rel="noopener noreferrer"
    >
      <v-list-item prepend-icon="mdi-account-plus" title="Registrieren"/>
    </a>
  </v-list>
  <v-divider />
  <v-list density="compact" nav :class="computedClass"> <!-- When not logged in-->
    <v-list-item prepend-icon="mdi-account" title="Account verwalten"/>
    <v-list-item prepend-icon="mdi-logout" title="Ausloggen" class="text-red"/>
  </v-list>
</template>
