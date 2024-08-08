<template>
  <div class="control-container">
    <div class="delete-btn">Delete</div>
    <div class="edit-btn">Edit</div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.control-container{
  display: inline-block;
  padding: .7rem 1rem;


  .delete-btn{
    background-color: red;
  }

  .edit-btn{
    background-color: orange;
  }
}
</style>