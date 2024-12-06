<script setup lang="ts">
import BaseInput from "@views/authentication/components/base-input.vue";
import SubmitBtn from "@views/authentication/components/submit-btn.vue";
import FormBase from "@views/authentication/components/form-base.vue";
import {useDisplay} from "vuetify";
import AuthContainer from "@views/application/auth-container.vue";

const {xs} = useDisplay();

</script>

<template>
  <auth-container>
    <form-base>
      <template v-slot:title>
        Registrieren
      </template>
      <template v-slot:subtitle>
        <span class="text-gray-600">
          Du hast bereits einen Account?
        </span>
        <router-link :to="{ name: 'login' }" class="text-decoration-underline text-primary">
          Anmelden
        </router-link>
      </template>
      <base-input
        model-value=""
        label="Anzeigename"
        icon="mdi-account"
        :error="false"
      />
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
      <base-input
        label="Passwort bestätigen"
        icon="mdi-lock-check"
        :is-password="true"
        :error="false"
      />
      <div v-if="!xs">
        <submit-btn text="Registrieren" class="mt-6"/>
        <div v-if="xs" class="text-secondary text-center mt-8">
          Du hast bereits einen Account?
          <router-link :to="{ name: 'login' }" class="text-decoration-underline text-primary">
            Anmelden
          </router-link>
        </div>
      </div>
      <template v-slot:bottom v-if="xs">
        <submit-btn text="Registrieren" class="mt-6"/>
        <div v-if="xs" class="text-secondary text-center mt-8">
          Du hast bereits einen Account?
          <router-link :to="{ name: 'login' }" class="text-decoration-underline text-primary">
            Anmelden
          </router-link>
        </div>
      </template>
    </form-base>
  </auth-container>
</template>
