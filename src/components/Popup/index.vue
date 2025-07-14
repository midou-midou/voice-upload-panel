<template>
  <div class="pop-container">
    <div :class="`pop-body ${vup ?? ''}`">
      <div class="pop-title">{{ popTitle }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  vup: {
    type: String,
    default: 'xiaoxi'
  },
  popTitle: {
    type: String,
    default: '弹框标题'
  }
})

defineOptions({
  name: 'PopupComponent'
})
</script>
<style lang="scss" scoped>
.pop-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .35);
}

.pop-body {
  position: absolute;
  width: calc(100vw / 3);
  height: 100px;
  padding: 20px;
  border-radius: 2.5rem;
  inset: 0;
  margin: auto;
  overflow: hidden;
  z-index: -2;
}

.pop-title {
  padding: .7rem .5rem;
  color: var(--btn-font-color);
}
</style>