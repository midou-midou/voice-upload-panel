<template>
  <div class="pop-container">
    <div class="pop-body bounceIn" :style="`--vup-color: var(--${vup}-color)`">
      <div class="pop-title">{{ popTitle }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
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
  inset: 0;
  width: calc(100vw / 3);
  height: 100px;
  padding: 20px;
  border-radius: 2.5rem;
  margin: auto;
  overflow: hidden;
  z-index: -2;
  background:
    radial-gradient(circle at 40% 75%, var(--vup-color) 0%, transparent 95%);
  color: var(--btn-font-color);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2),
    inset 0 0 30px -10px rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);
}

.pop-title {
  padding: .7rem .5rem;
}

@keyframes bounceIn {

  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  animation-duration: 2s;
  animation-name: bounceIn;
}
</style>