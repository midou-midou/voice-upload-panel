<template>
  <div class="notafication-container notify-in-out">
    {{ Content }}
  </div>
</template>
<script lang="ts" setup>
import { getVupFromUrl } from '../../utils/voice';
import type { NotaficationInstanceArgs } from './index';
import Notafication from './index';


const props = defineProps<NotaficationInstanceArgs>()
const processColor = `var(--${getVupFromUrl()}-color)`
const notifyAnimationDuration = '2s'
const notifyOutDelay = `${parseFloat(props.NotafyTime) + parseFloat(notifyAnimationDuration)}s`

let runTimeout: number = 0

onMounted(() => {
  if (runTimeout !== 0) clearTimeout(runTimeout)
  // 定时器，到时间就执行unrender操作
  runTimeout = setTimeout(() => {
    Notafication.close()
  }, (parseFloat(props.NotafyTime) * 1000 + (2 * parseFloat(notifyAnimationDuration) * 1000)));
})

onUnmounted(() => {
  clearTimeout(runTimeout)
})
</script>
<style lang="scss" scoped>
.notafication-container {
  position: fixed;
  top: 2rem;
  right: 2rem;
  padding: 2rem;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2),
    inset 0 0 30px -10px rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: .5rem;
    z-index: 1;
    background-color: v-bind(processColor);
    box-shadow: inset 0 0 30px -10px rgba(255, 255, 255, 0.7);
    animation: notify-process v-bind(NotafyTime) ease v-bind(notifyAnimationDuration) forwards;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    z-index: -1;
    backdrop-filter: blur(10px);
  }
}

.notify-in-out {
  will-change: transform;
  animation:
    notify-in v-bind(notifyAnimationDuration) ease-in-out,
    notify-out v-bind(notifyAnimationDuration) ease-in-out v-bind(notifyOutDelay) forwards;
}

@keyframes notify-in {
  0% {
    transform: translate3d(120%, 0, 0)
  }

  100% {
    transform: translate3d(0, 0, 0)
  }
}

@keyframes notify-out {
  0% {
    transform: translate3d(0, 0, 0)
  }

  100% {
    transform: translate3d(120%, 0, 0)
  }
}

@keyframes notify-process {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>