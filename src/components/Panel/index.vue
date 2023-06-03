
<script setup lang="ts">
const props = defineProps<{
  title: String
}>()
</script>

<template>
  <div class="panel-container">
    <div class="panel-title">
      {{props.title}}
    </div>
    <div class="panel-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .panel-container{
    width: 100%;
    border-radius: 1rem;
    background: var(--panel-background-color);
    box-shadow: -7px -7px 20px 0px #fff9, 
      -4px -4px 5px 0px #fff9, 
      7px 7px 20px 0px #0002, 
      4px 4px 5px 0px #0001, 
      inset 0px 0px 0px 0px #fff9, 
      inset 0px 0px 0px 0px #0001, 
      inset 0px 0px 0px 0px #fff9, 
      inset 0px 0px 0px 0px #0001;

    .panel-title{
      font-size: 1.5rem;
      font-weight: 450;
      padding: .5rem;
    }

    .panel-body{
      padding: .5rem;
    }
  }
</style>