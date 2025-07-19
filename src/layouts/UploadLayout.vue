<script setup lang="ts">
import { UploadVoice } from '../types/voice';
import UploadList from '../components/Upload/List/index.vue'
import UploadButton from '../components/Upload/Button/index.vue'
const props = defineProps({
  clfyId: {
    type: String
  }
})
const currentRoute = useRoute()

const uploadFiles = ref<UploadVoice[]>([])
const changeUploadList = (res: UploadVoice[]) => {
  uploadFiles.value = [...res]
}
const clearUploadList = () => {
  uploadFiles.value = []
}
</script>
<template>
  <UploadList 
    :uploadFiles="uploadFiles" 
    :vup="currentRoute.name?.toString()" 
    @clearUploadList="clearUploadList"
  />
  <UploadButton 
    :vup="currentRoute.name?.toString()" 
    :clfyId="props.clfyId" 
    @changeUploadList="changeUploadList" 
  />
</template>