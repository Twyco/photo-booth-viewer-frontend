<script setup lang="ts">
import {defineProps, defineEmits} from 'vue';
import AccountList from "@views/hud/menu/components/account-list.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const t = true;

const emit = defineEmits(['update:modelValue']);

function toggleDrawer(): void {
  emit('update:modelValue', !props.modelValue);
}
</script>

<template>
  <v-navigation-drawer
    :model-value="modelValue"
    location="left"
    color="primary"
    temporary
  >
    <v-list density="compact" nav>
      <router-link :to="{ name: 'home' }">
        <v-list-item prepend-icon="mdi-home" title="Home"/>
      </router-link>
      <router-link :to="{ name: 'albums' }">
        <v-list-item prepend-icon="mdi-image-multiple" title="Fotoalben"/>
      </router-link>
    </v-list>
    <account-list/>
  </v-navigation-drawer>
</template>

<style scoped>

</style>