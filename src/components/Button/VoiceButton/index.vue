<script lang="ts" setup>
import { deleteVoice } from '../../../api';
import { Voice } from '../../../types/voice';
import { isShowControlButton } from '../../../utils/voice';
import DeleteButton from '../DeleteButton/index.vue'

const props = defineProps<Voice>()
const voiceBtnRef = ref<HTMLElement>()
const vupColor = `var(--${props.vup}-color)`

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
  <div class="btn-default btn-shadow btn-voice" ref="voiceBtnRef">
    <!-- <div class="btn-voice-mask"></div> -->
    <div class="btn-content">
      {{ JSON.parse(props.desc)[$i18n.locale] }}
    </div>
    <WrapperControl />
  </div>
</template>

<style lang="scss">
.btn-default {
  position: relative;
  color: var(--btn-font-color-dark);
  border-radius: 1.3rem;
  padding: .7rem 1rem;
  overflow: hidden;

  &>.btn-content {
    display: inline-block;
  }
}

// .btn-voice-mask {
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 2.4rem;
//   border-radius: 1.3rem;
// }

.btn-voice {
  position: relative;
  background-color: var(--voice-btn-color);
  overflow: visible;
  cursor: move;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 1.3rem;
    background: linear-gradient(to right, transparent, v-bind(vupColor), transparent);
  }
}

.btn-shadow {
  box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001,
    inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001,
    inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;
}

.btn-drag {
  opacity: 0.5;
}
</style>