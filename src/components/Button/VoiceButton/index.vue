<script lang="ts" setup>
import { Voice } from '../../../types/voice';
const props = defineProps<Voice>()
const voiceBtnRef = ref<HTMLElement>()

onMounted(() => {
  useDragVoice(voiceBtnRef, props)
})
</script>

<template>
  <div :class="`btn-default btn-shadow ${props.vup}`" ref="voiceBtnRef">
    {{ JSON.parse(props.desc)[$i18n.locale] }}
    <control-button />
  </div>
</template>

<style lang="scss" scoped>
.btn-default {
  border-radius: 1rem;
  padding: .7rem 1rem;
  margin: 0 1.2rem 1rem 0;
  background-color: var(--background-color);
}

.btn-shadow {
  box-shadow: -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001,
    inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001,
    inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;
}

// todo: 使用变量替换
.btn-drag{
  opacity: 0.5;
}
</style>