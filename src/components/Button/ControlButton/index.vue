<template>
  <div class="control-container">
    <div class="delete-btn" @click="handleDeleteVoice"><i class="iconfont">&#xe600;</i></div>
  </div>
</template>
<script setup lang="ts">
import { deleteVoice } from '../../../api';
const props = defineProps({
  voiceName: {
    type: String,
    default: '-'
  }
})

const handleDeleteVoice = async (e: MouseEvent) => {
  e.preventDefault()
  await deleteVoice(props.voiceName)
}
</script>
<style lang="scss">
.control-container{
  position: relative;
  display: inline-block;

  & > div{
    display: inline-block;
    outline: .3rem solid;
    border-radius: .5rem;
  }
  .delete-btn{
    background-color: #ff753a;
    outline-color: #ff753a;
    margin-left: .5rem;
    margin-right: .5rem;
    cursor: pointer;
  }

}
</style>