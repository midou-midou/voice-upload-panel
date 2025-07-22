<template>
  <a :href="siteConfig.voiceButtonLink" target="_blank" class="btn-default btn-shadow btn-link">{{ $t('siteConfig.voicebuttonlink.title') }}</a>
</template>
<script setup lang="ts">
import siteConfig from '../../../configs/site.config';
</script>
<style lang="scss">
.btn-link{
  display: inline-block;
  text-decoration: none;
  margin-left: 7rem;

  background: linear-gradient(to right, var(--xiaoxi-color), var(--xiaotao-color), var(--xiaorou-color), var(--reine-color), var(--ailurus-color));
}
</style>