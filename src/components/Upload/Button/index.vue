<script setup lang="ts">
import i18n from '../../../locale';
import { UploadVoiceStatus } from '../../../types/enmu';
import type { UploadVoice } from '../../../types/voice';
import Popup from '../../Popup/popup';
import InputPopup from '../../Popup/types/input.vue';


defineOptions({
  name: 'UploadButton'
})
const props = defineProps({
  vup: {
    type: String,
    default: 'xiaoxi'
  },
  clfyId: {
    type: String
  }
})
const emit = defineEmits<{
  changeUploadList: [uploadList: UploadVoice[]]
}>()

const inputUploadRef = ref()
// const uploadFileName = ref('')

const uploadHandler = () => {
  let fileList = inputUploadRef.value.files
  if (fileList.length === 0) {
    return
  }
  let file = fileList[0]
  let uploadFileName = file.name.split('.mp3')[0]

  Popup.open(
    {
      vup: props.vup,
      popTitle: i18n.global.t('popup.upload.model.title')
    },
    {
      childrenComponent: InputPopup,
      childProps: {
        modelValue: uploadFileName,
        ['onUpdate:modelValue']: (val: string) => {
          uploadFileName = val
        },
        'onInputEnter': () => {
          emit('changeUploadList', [{
            desc: JSON.stringify({
              zh: uploadFileName,
              en: '',
              jp: ''
            }),
            clfyId: props.clfyId,
            path: file.name,
            creator: 'midou',
            vup: props.vup,
            status: UploadVoiceStatus.uploading,
            uploadFile: file
          }])
        }
      }
    })

}
</script>

<template>
  <label class="upload-input-wrapper btn-default" :style="`outline: .1rem dashed var(--${props.vup}-color)`"
    for="upload-btn">
    <input ref="inputUploadRef" type="file" accept=".mp3" multiple="false" style="display: none;" id="upload-btn"
      @change="uploadHandler">
    <i class="iconfont">&#xe672;</i>上传
  </label>
</template>

<style scoped lang="scss">
.upload-input-wrapper {
  font-size: 1rem;
  line-height: 1rem;
  color: var(--upload-btn-font-color);
  cursor: pointer;
}
</style>