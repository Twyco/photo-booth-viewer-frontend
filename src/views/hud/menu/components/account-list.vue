<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const emit = defineEmits(['closeMenu']);

const props = defineProps({
  bg: {
    type: String,
    default: '',
  },
});

const clientID = import.meta.env.VITE_APP_ID;
const redirect_uri = import.meta.env.VITE_APP_URL;

const loginURL = computed(() => {
  return `${import.meta.env.VITE_LOGIN_AUTH_URL}?app_id=${clientID}&redirect_uri=${redirect_uri}${route.path}`;
});
const registerURL = computed(() => {
  return `${import.meta.env.VITE_REGISTER_AUTH_URL}?app_id=${clientID}&redirect_uri=${redirect_uri}${route.path}`;
});

const computedClass = computed(() => {
  return props.bg ? `bg-${props.bg}` : '';
});

function closeMenu(): void {
  emit('closeMenu');
}
</script>

<template>
  <v-divider/>
  <v-list density="compact" nav :class="computedClass"> <!-- When not logged in-->
    <a
      :href="loginURL"
      rel="noopener noreferrer"
    >
      <v-list-item prepend-icon="mdi-login" title="Anmelden" @click="closeMenu"/>
    </a>
    <a
      :href="registerURL"
      rel="noopener noreferrer"
    >
      <v-list-item prepend-icon="mdi-account-plus" title="Registrieren" @click="closeMenu"/>
    </a>
  </v-list>
  <v-divider/>
  <v-list density="compact" nav :class="computedClass"> <!-- When not logged in-->
    <v-list-item prepend-icon="mdi-account" title="Account verwalten" @click="closeMenu"/>
    <v-list-item prepend-icon="mdi-logout" title="Ausloggen" class="text-red" @click="closeMenu"/>
  </v-list>
</template>
