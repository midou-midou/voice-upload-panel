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
  // console.log('changeuplodalist ', res);
  uploadFiles.value = [...res]
}
</script>
<template>
  <UploadList :uploadFiles="uploadFiles" :vup="currentRoute.name?.toString()"/>
  <UploadButton :vup="currentRoute.name?.toString()" :clfyId="props.clfyId" @changeUploadList="changeUploadList" />
</template>
<style lang="scss">
</style>