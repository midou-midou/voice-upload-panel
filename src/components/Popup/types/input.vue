<template>
  <div class="popup-input-container">
    <input 
      id="popInputId" 
      ref="popupInputRef" 
      class="popInput" 
      v-model.trim="model" 
      @keyup.enter="handleInputEnter" 
    />
    <span class="pop-input-focus-bg"></span>
  </div>
</template>
<script setup>
import Popup from '../index'

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
  Popup.close(emit('inputEnter', model.value))
}
</script>
<style lang="scss" scoped>
.popup-input-container {
  position: relative;
  overflow: hidden;
}

.popInput {
  position: relative;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--btn-font-color);
  width: 100%;
  padding: 7px 12px;
  box-sizing: border-box;
  background: transparent;
  color: var(--btn-font-color);

  &~.pop-input-focus-bg {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: 0.5s;
    z-index: -1;
  }

  &:focus~.pop-input-focus-bg {
    transition: 0.5s;
    border-bottom: 3px solid var(--btn-font-color);
    opacity: 1;
  }
}
</style>