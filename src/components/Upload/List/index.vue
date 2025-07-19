<template>
  <template v-for="(item, index) in uploadFiles" :key="index">
    <UploadListItem :name="descGetLocale(item.desc)" :status="item.status" :file="item.uploadFile" :vup="vup" />
  </template>
</template>
<script setup lang="ts">
import type { UploadVoice } from '../../../types/voice'
import { descGetLocale } from '../../../utils/voice';
import UploadListItem from '../ListItem/index.vue'
defineOptions({
  name: 'UploadList'
})
const emits = defineEmits(['clearUploadList'])

watchEffect(() => {
  props?.uploadFiles && props?.uploadFiles[0] && useFetchUploadVoice(props?.uploadFiles)
    .then(() => {
      const voice = useVoiceStore()
      voice.refreshVupVoice()
      emits('clearUploadList')
    })
}, { flush: 'post' })


const props = defineProps({
  uploadFiles: Array as PropType<UploadVoice[]>,
  vup: String
})
</script>