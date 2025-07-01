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
const vup = ref(currentRoute.name?.toString())

const uploadFiles = ref<UploadVoice[]>([])
const changeUploadList = (res: UploadVoice[]) => {
  uploadFiles.value = [...res]
}
</script>
<template>
  <UploadList :uploadFiles="uploadFiles" :vup="vup"/>
  <UploadButton :vup="vup" @changeUploadList="changeUploadList" :clfyId="props.clfyId"/>
</template>
<style lang="scss">
</style>