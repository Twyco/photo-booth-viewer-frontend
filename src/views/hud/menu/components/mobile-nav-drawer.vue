<script setup lang="ts">
import MobileNavDrawerItem from "@views/hud/menu/components/mobile-nav-drawer-item.vue";
import MobileNavDrawerBase from "@views/hud/menu/components/mobile-nav-drawer-base.vue";

const emit = defineEmits(['update:showMobileMenu']);

</script>
<template>
  <mobile-nav-drawer-base>
    <div class="pt-24 pl-8 grid grid-cols-1 gap-y-6 w-fit">
      <mobile-nav-drawer-item
        icon="mdi-home-outline"
        title="Home"
        link="home"
        router
        @update:showMobileMenu="() =>emit('update:showMobileMenu')"
      />
      <mobile-nav-drawer-item
        icon="mdi-image-multiple-outline"
        title="Fotoalben"
        link="albums"
        router
        @update:showMobileMenu="() =>emit('update:showMobileMenu')"
      />
      <mobile-nav-drawer-item
        icon="mdi-login"
        title="Anmelden"
        link="https://auth.staging.bierpong.beer/login"
        @update:showMobileMenu="() =>emit('update:showMobileMenu')"
      />
      <mobile-nav-drawer-item
        icon="mdi-account-plus-outline"
        title="Registrieren"
        link="https://auth.staging.bierpong.beer/signup"
        @update:showMobileMenu="() =>emit('update:showMobileMenu')"
      />
      <mobile-nav-drawer-item
        icon="mdi-account-outline"
        title="Account"
        link=""
        @update:showMobileMenu="() =>emit('update:showMobileMenu')"
      />
      <mobile-nav-drawer-item
        icon="mdi-logout"
        title="Ausloggen"
        link=""
        @update:showMobileMenu="() =>emit('update:showMobileMenu')"
      />
    </div>
    <!--    </div>-->
  </mobile-nav-drawer-base>
</template>