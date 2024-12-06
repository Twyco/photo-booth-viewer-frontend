<script setup lang="ts">
import AuthContainer from "@views/application/auth-container.vue";
import {useRouter} from "vue-router";

const router = useRouter()
function goBack(): void {
  router.back();
}

</script>

<template>
  <auth-container>
    <div class="w-full h-full grid place-items-center text-2xl">
      <div class="grid grid-cols-1 gap-4">
        Coming soon!
        <v-btn
          text="Go Back!"
          color="accent"
          @click="goBack()"
        />
      </div>
    </div>
  </auth-container>
</template>