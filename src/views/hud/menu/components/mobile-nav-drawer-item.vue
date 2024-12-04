<script setup lang="ts">

import MobileNavDrawerItemBase from "@views/hud/menu/components/mobile-nav-drawer-item-base.vue";

defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '',
  },
  router: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['update:showMobileMenu']);

</script>

<template>
  <mobile-nav-drawer-item-base
    :link="link"
    :router="router"
  >
    <div class="flex gap-x-4 w-full align-center">
      <div class="bg-secondary w-fit px-3 aspect-square grid place-items-center rounded-full">
        <i
          :class="`mdi ${icon} text-primary text-4xl`"
          @click="() =>emit('update:showMobileMenu')"
        />
      </div>
      <div
        class="h-fit w-full px-3 py-1 grid place-items-center bg-secondary text-xl text-primary font-bold uppercase rounded-lg"
        @click="() =>emit('update:showMobileMenu')"
      >
        {{ title }}
      </div>
    </div>
  </mobile-nav-drawer-item-base>
</template>
