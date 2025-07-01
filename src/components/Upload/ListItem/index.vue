<template>
  <Fragment v-if="status === UploadVoiceStatus.uploading">
    <div :class="`btn-default btn-upload ${vup} uploading`">
      {{ name }}
    </div>
  </Fragment>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { UploadVoiceStatus } from '../../../types/enmu';

defineOptions({
  name: 'UploadListItem'
})

defineProps({
  name: String,
  status: Number as PropType<UploadVoiceStatus>,
  vup: String,
  file: File
})
</script>
<style lang="scss">
.uploading {
  filter: grayscale(50%);
}
</style>