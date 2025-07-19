<script lang="ts" setup>
import siteConfig from '../../../configs/site.config';

const vupsRoute = ref<string[]>(Object.keys(siteConfig.vups))

</script>

<template>
  <div class="switch-vup-route-container">
    <div :class="`switch-vup-route-btn ${item}-outline`" v-for="(item, index) in vupsRoute" :key="index">
      <router-link :to="{ name: item }" custom v-slot="{ href, navigate, isActive }" class="base" active-class="active">
        <a :href="href" @click="navigate" :style="`--vup-color: var(--${item}-color)`" :class="[
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

  a::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 1rem;

  }

  a:hover {
    &::before {
      transition: all .2s;
      background: linear-gradient(to right bottom,
          var(--vup-color) 0%,
          /* 起点 */
          color-mix(in srgb, var(--vup-color) 50%, white) 100%
          /* 终点 */
        );
      box-shadow: 0px 3px 20px 0px black,
        inset 0 0 30px -10px rgba(255, 255, 255, 0.7);
      //TODO: macos chrome非常卡顿，暂时不分析
      // transform: scale3d(1.2, 1.2, 1);
    }
  }

  .base {
    display: block;
    color: var(--upload-btn-font-color);
    font-weight: 500;
    border-radius: 1rem;
    padding: .4rem;
    text-decoration: none;
    position: relative;
  }
}
</style>