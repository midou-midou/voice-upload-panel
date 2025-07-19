<template>
  <div class="clfy-container">
    <div class="clfy-button" @click="addClfyTitle">
      <i class="iconfont">&#xe610;</i>
      {{ $t('clfy.edit.title') }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { createClfyName } from '../../../../api';
import i18n from '../../../../locale';
import Popup from '../../../Popup';
import Input from '../../../Popup/types/input.vue';
const props = defineProps({
  vup: {
    type: String,
    default: 'xiaoxi'
  }
})

const addClfyTitle = () => {
  Popup.open(
    {
      popTitle: i18n.global.t('clfy.edit.title'),
      vup: props.vup
    },
    {
      childrenComponent: Input,
      childProps: {
        'onInputEnter': async (value: string) => value && await createClfyName({
          desc: JSON.stringify({
              zh: value,
              en: '',
              jp: ''
            }),
          owner: props.vup
        })
      }
    }
  )
}
</script>
<style lang="scss" scoped>
.clfy-container {
  width: fit-content;
  outline: .1rem dashed #ff753a;
  padding: .5rem;
  border-radius: 1.3rem;
  cursor: pointer;
}
</style>