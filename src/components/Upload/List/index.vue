<template>
  <div class="upload-wrapper">
    <template v-for="(item, index) in uploadFiles" :key="index">
      <UploadListItem :name="descGetLocale(item.desc)" :status="item.status" :file="item.uploadFile" :vup="vup" />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { UploadVoice } from '../../../types/voice'
import { descGetLocale } from '../../../utils/voice';
import UploadListItem from '../ListItem/index.vue'

watchEffect(() => {
  useFetchUploadVoice(props?.uploadFiles)
    .then(() => {
      const voice = useVoiceStore()
      voice.refreshVupVoice()
    })
}, { flush: 'post' })

defineOptions({
  name: 'UploadList'
})

const props = defineProps({
  uploadFiles: Array as PropType<UploadVoice[]>,
  vup: String
})
</script>
<style lang="scss">
.upload-wrapper {
  display: flex;
}
</style>