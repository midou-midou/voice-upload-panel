<template>
  <div class="upload-wrapper">
    <template v-for="(item, index) in uploadFiles" :key="index">
      <UploadListItem :name="voiceDescGetName(item.desc)" :status="item.status" :file="item.uploadFile" :vup="vup" />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { UploadVoice } from '../../../types/voice'
import { voiceDescGetName } from '../../../utils/voice';
import UploadListItem from '../ListItem/index.vue'

watchEffect(() => {
  // console.log(props?.uploadFiles);
  useFetchUploadVoice(props?.uploadFiles)
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