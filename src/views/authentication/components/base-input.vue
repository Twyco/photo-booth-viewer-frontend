<script setup lang="ts">

import {computed, ref} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeHolder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  isPassword: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false
  },
});

const showPassword = ref<boolean>(false);

const computedIcon = computed(() => {
  if(props.isPassword) {
    if(showPassword.value){
      return 'mdi-eye';
    }
    return 'mdi-eye-off';
  }
  return '';
});

const computedType = computed(() => {
  if(props.isPassword) {
    if(showPassword.value){
      return 'text';
    }
    return 'password';
  }
  return 'text';
});


</script>

<template>
  <v-text-field
    ref="textFieldRef"
    :model-value="modelValue"
    :type="computedType"
    :append-inner-icon="computedIcon"
    :placeholder="placeHolder"
    :label="label"
    :prepend-inner-icon="icon"
    :error="error"
    aria-required="true"
    @click:append-inner="showPassword = !showPassword"
  />
</template>
