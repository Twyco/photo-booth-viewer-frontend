<script setup lang="ts">
import BaseInput from "@views/authentication/components/base-input.vue";
import SubmitBtn from "@views/authentication/components/submit-btn.vue";
import AuthContainer from "@views/application/auth-container.vue";
import FormBase from "@views/authentication/components/form-base.vue";
import {useDisplay} from "vuetify";

const {xs} = useDisplay();

</script>

<template>
  <auth-container>
    <form-base>
      <template v-slot:title>
        Anmelden
      </template>
      <template v-slot:subtitle>
        <span class="text-gray-600">
          Du hast noch keinen Account?
        </span>
        <router-link :to="{ name: 'signup' }" class="text-decoration-underline text-primary">
          Registrieren
        </router-link>
      </template>
      <base-input
        model-value=""
        place-holder="example@domain.com"
        label="Email"
        icon="mdi-email"
        :error="false"
      />
      <base-input
        label="Password"
        icon="mdi-lock"
        :is-password="true"
        :error="false"
      />
      <div class="w-full h-fit -mt-2">
        <v-row no-gutters>
          <v-col align-self="center" cols="6">
            <v-checkbox-btn
              color="primary"
              label="Angemeldet bleiben"
              hide-details
              disabled
            />
          </v-col>
          <v-col class="text-right" align-self="center" cols="6">
            <router-link :to="{ name: 'pwReset' }" class="text-decoration-underline text-primary">
              Passwort vergessen?
            </router-link>
          </v-col>
        </v-row>
      </div>
      <div v-if="!xs">
        <submit-btn text="Anmelden" class="mt-6"/>
        <div v-if="xs" class="text-secondary text-center mt-8">
          Du hast noch keinen Account?
          <router-link :to="{ name: 'signup' }" class="text-decoration-underline text-primary">
            Registrieren
          </router-link>
        </div>
      </div>
      <template v-slot:bottom v-if="xs">
        <submit-btn text="Anmelden" class="mt-6"/>
        <div v-if="xs" class="text-secondary text-center mt-8">
          Du hast noch keinen Account?
          <router-link :to="{ name: 'signup' }" class="text-decoration-underline text-primary">
            Registrieren
          </router-link>
        </div>
      </template>
    </form-base>
  </auth-container>
</template>