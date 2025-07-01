<template>
  <div class="popup-input-container">
    <input id="popInputId" ref="popupInputRef" class="popInput" v-model.trim="model" @keyup.enter="handleInputEnter"/>
    <span class="pop-input-focus-bg"></span>
  </div>
</template>
<script setup>
import Popup from '../popup'

// 下面创建的是一个customRef，不能直接监听
const model = defineModel()
const emit = defineEmits([
  'inputEnter'
])
const popupInputRef = ref()

onMounted(() => {
  popupInputRef.value.focus()
})

const handleInputEnter = () => {
  Popup.close(emit('inputEnter'))
}
</script>
<style lang="scss" scoped>
.popup-input-container {
  position: relative;
  overflow: hidden;
}

.popInput {
  border-radius: 12px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 7px;
  box-sizing: border-box;
  background: transparent;
  color: var(--upload--upload-btn-font-color);

  &~.pop-input-focus-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: #ededed;
    opacity: 0;
    transition: 0.5s;
    z-index: -1;
  }

  &:focus~.pop-input-focus-bg {
    transition: 0.5s;
    opacity: 1;
  }
}
</style>