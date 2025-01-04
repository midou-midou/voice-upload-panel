<script setup lang="ts">
const props = defineProps({
  vup: {
    type: String,
    default: 'xiaoxi'
  }
})
</script>

<template>
  <label class="upload-wrapper btn-default"
    :style="`outline: .1rem dashed var(--${props.vup}-color)`"
       for="upload-btn"
  >
    <input type="file" accept="" multiple="" style="display: none;" id="upload-btn">
    <i class="iconfont">&#xe672;</i>上传
  </label>
</template>

<style scoped lang="scss">
.upload-wrapper {
 color: var(--upload-btn-font-color);
  cursor: pointer;
}
</style>