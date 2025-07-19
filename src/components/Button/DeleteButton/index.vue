<template>
  <div class="delete-btn" @click="handleDelete"><i class="iconfont">&#xe600;</i></div>
</template>
<script setup lang="ts">
const emits = defineEmits(['handleDelete'])

const handleDelete = (e: MouseEvent) => {
  e.preventDefault()
  emits('handleDelete')
}
</script>
<style lang="scss">
.delete-btn {
  position: relative;
  display: inline-block;
  outline: .1rem solid var(--panel-background-color);
  background-color: var(--panel-background-color);
  padding: .1rem;
  border-radius: .6rem;
  margin-left: .7rem;
  margin-right: .3rem;
  cursor: pointer;
  color: var(--upload-btn-font-color);
  font-size: 1rem;
  text-shadow: none;
  box-shadow: 0px 10px 22px rgba(0, 0, 0, 0.3),
    inset 0 0 5px -10px rgba(255, 255, 255, 1);
  transition: all .3s ease-out;

  &:hover{
    transform: scale3d(1.2, 1.2, 1);
  }
}
</style>