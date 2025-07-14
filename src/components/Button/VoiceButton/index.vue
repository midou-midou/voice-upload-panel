<script lang="ts" setup>
import { deleteVoice } from '../../../api';
import { Voice } from '../../../types/voice';
import { isShowControlButton } from '../../../utils/voice';
import DeleteButton from '../DeleteButton/index.vue'

const props = defineProps<Voice>()
const voiceBtnRef = ref<HTMLElement>()

const WrapperControl = isShowControlButton(h(DeleteButton, {
  onHandleDelete: () =>
    deleteVoice(props.path).then(() => {
      const voice = useVoiceStore()
      voice.refreshVupVoice()
    })
}), props.creator)

onMounted(() => {
  useDragVoice(voiceBtnRef, unref(props))
})
</script>

<template>
  <div :class="`btn-default btn-shadow ${props.vup}`" ref="voiceBtnRef">
    <div class="btn-voice-mask"></div>
    <div class="btn-content">
      {{ JSON.parse(props.desc)[$i18n.locale] }}
    </div>
    <WrapperControl />
  </div>
</template>

<style lang="scss">
.btn-default {
  position: relative;
  color: var(--btn-font-color);
  border-radius: 1.3rem;
  padding: .7rem 1rem;
  margin: 0 1.2rem 1rem 0;
  overflow: hidden;

  &>.btn-content {
    position: relative;
    display: inline-block;
  }
}

.btn-voice-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 2.4rem;
  border-radius: 1.3rem;
  // background: linear-gradient(to right, 
  //   var(--xiaoxi-color) , 25%, 
  //   #f0fcff, 30%, 
  //   var(--xiaoxi-color), 60%,
  //   #f0fcff, 65%,
  //   var(--xiaoxi-color), 85%,
  //   #f0fcff);
  // background: linear-gradient(to right bottom, var(--xiaoxi-color), 10%, #f0fcff, 50%, var(--xiaoxi-color), 70%);
  // filter: blur(105px);
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
.btn-drag {
  opacity: 0.5;
}
</style>