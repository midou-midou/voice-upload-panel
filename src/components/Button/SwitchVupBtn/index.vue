<script lang="ts" setup>
import siteConfig from '../../../configs/site.config';

const vupsRoute = ref<string[]>(Object.keys(siteConfig.vups))


</script>

<template>
  <div class="switch-vup-route-btn" v-for="(item, index) in vupsRoute" :key="index">
    <router-link :to="{
      name: item
    }">
      {{ siteConfig.vups[item].name }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .switch-vup-route-btn{
    margin: 0 1rem 0 0;
  }
</style>