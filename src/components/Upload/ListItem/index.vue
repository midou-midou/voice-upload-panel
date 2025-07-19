<template>
  <Fragment>
    <div class="btn-default btn-upload btn-shadow">
      <div class="btn-upload-mask" :style="`transform: scaleX(${progressPos})`"></div>
      {{ name }}
    </div>
  </Fragment>
</template>
<script setup lang="ts">

defineOptions({
  name: 'UploadListItem'
})

const props = defineProps({
  name: String,
  vup: String,
  file: File
})

const vupColor = `var(--${props.vup}-color)`
const voiceStore = useVoiceStore()
const progressPos = computed(() => {
  if (!voiceStore.uploadProgress) return 0
  const percent = voiceStore.uploadProgress.loaded / voiceStore.uploadProgress.total!
  return percent >= 1 ? 0 : 1 - percent
})
</script>
<style lang="scss" scoped>
.btn-upload{
  position: relative;
  padding-top: .8rem;
  padding-bottom: .8rem;
  overflow: hidden;
  background-color: var(--voice-btn-color);
  z-index: -1;
  
  .btn-upload-mask{
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: v-bind(vupColor);
    transform-origin: right;
  }
}
.uploading {
  filter: grayscale(50%);
}
</style>