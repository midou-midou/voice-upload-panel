<script setup lang="ts">
import BaseLayout from "./layouts/BaseLayout.vue";
import siteConfig from "./configs/site.config";
import useAuth from "./composables/auth";

document.title = siteConfig.title
useAuth()

</script>

<template>
  <BaseLayout />
</template>

<style>
body{
  background-color: var(--background-color);
}
</style>
