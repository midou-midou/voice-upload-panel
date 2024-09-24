<template>
  <div class="control-container">
    <div class="delete-btn"><i class="iconfont">&#xe600;</i></div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.control-container{
  display: inline-block;
  vertical-align: middle;

  & > div{
    display: inline-block;
    outline: .3rem solid;
    border-radius: .9rem;
  }

  .delete-btn{
    background-color: red;
    outline-color: red;
    margin-left: .5rem;
    margin-right: .8rem;
  }

}
</style>