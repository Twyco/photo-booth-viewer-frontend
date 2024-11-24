<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from "@views/authentication/components/base-input.vue";

const form = ref({
  email: '',
  password: '',
});

function handleSubmit() {
  console.log('Form submitted:', form.value);
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-700">Anmelden</h2>
      <p class="mt-2 text-sm text-center text-gray-600">Melde dich bei deinem Konto an</p>
      <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
        <base-input
          v-model="form.email"
          label="E-Mail-Adresse"
          type="email"
          placeholder="example@domain.com"
          icon="mdi-email"
        />
        <base-input
          v-model="form.password"
          label="Passwort"
          type="password"
          placeholder="Passwort"
          icon="mdi-lock"
        />
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Anmelden
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-600">
        Noch kein Konto?
        <router-link :to=" { name: 'register' } " class="text-indigo-500 hover:underline">Registrieren</router-link>
      </p>
      <p class="text-sm text-center text-gray-600">
        Password vergessen?
        <router-link :to=" { name: 'register' } " class="text-indigo-500 hover:underline">Zurücksetzen</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>