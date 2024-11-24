<script setup lang="ts">
defineProps({
  modelValue: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  icon: String,
  id: String,
  error: String,
});

defineEmits(['update:modelValue']);

const updateValue = (event) => {
  const value = event.target.value;
  emit('update:modelValue', value);
};

</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" :for="id" class="text-sm text-gray-600">{{ label }}</label>
    <div class="relative">
      <span v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
        <i :class="icon"></i>
      </span>
      <input
        :id="id"
        :value="modelValue"
        @input="updateValue($event)"
        :type="type"
        :placeholder="placeholder"
        :class="[
          'w-full px-4 py-2 text-gray-900 bg-white border rounded-md focus:outline-none focus:ring',
          icon ? 'pl-10' : '',
          error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-indigo-400',
        ]"
      />
    </div>
    <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>

<style scoped>

</style>