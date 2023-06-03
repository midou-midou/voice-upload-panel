<script setup lang="ts">
import BaseLayout from "./layouts/BaseLayout.vue";
import siteConfig from "./configs/site.config";

document.title = siteConfig.title

</script>

<template>
  <BaseLayout />
</template>

<style>
body{
  background-color: var(--background-color);
}
</style>
