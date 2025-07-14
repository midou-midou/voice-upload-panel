<script lang="ts" setup>
import siteConfig from '../../../configs/site.config';

const vupsRoute = ref<string[]>(Object.keys(siteConfig.vups))

</script>

<template>
  <div class="switch-vup-route-container">
    <div :class="`switch-vup-route-btn ${item}-outline`" v-for="(item, index) in vupsRoute" :key="index">
      <router-link :to="{ name: item }" custom v-slot="{ href, navigate, isActive }" class="base" active-class="active">
        <a :href="href" @click="navigate" :class="[
          'base',
          isActive && `active ${item}`
        ]">
          {{ siteConfig.vups[item].name }}
        </a>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.switch-vup-route-container {
  display: flex;
}

.switch-vup-route-btn {
  margin-right: 1rem;
  border-radius: 1rem;
  outline-width: .1rem;
  outline-style: dashed;

  a.active {
    color: var(--btn-font-color);
  }

  .base {
    display: block;
    color: var(--upload-btn-font-color);
    font-weight: 500;
    border-radius: 1rem;
    padding: .4rem;
    text-decoration: none;
  }
}
</style>