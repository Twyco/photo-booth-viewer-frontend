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
  <v-list density="compact" nav :class="computedClass"> <!-- When not logged in-->
    <router-link :to="{name: 'login'}">
      <v-list-item prepend-icon="mdi-login" title="Anmelden" @click="closeMenu"/>
    </router-link>
    <router-link :to="{name: 'signup'}">
      <v-list-item prepend-icon="mdi-account-plus" title="Registrieren" @click="closeMenu"/>
    </router-link>
  </v-list>
  <v-list density="compact" nav :class="computedClass"> <!-- When not logged in-->
<!--    <v-list-item prepend-icon="mdi-account" title="Account verwalten" @click="closeMenu"/>-->
<!--    <router-link :to="{name: 'logout'}">-->
      <v-list-item prepend-icon="mdi-logout" title="Ausloggen" class="text-red" @click="closeMenu"/>
<!--    </router-link>-->
  </v-list>
</template>
