<script setup lang="ts">
import BaseLayout from "./layouts/BaseLayout.vue";
import siteConfig from "./configs/site.config";
import { login } from "./api";

document.title = siteConfig.title

const siteStore = useSiteStore()

onMounted(async () => {
  const name = 'midou'
  await login(name)
  siteStore.setUser(name)
})
</script>

<template>
  <BaseLayout />
</template>

<style>
body{
  background-color: var(--background-color);
}
</style>
