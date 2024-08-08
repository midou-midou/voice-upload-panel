<template>
  <div class="panel-container">
    <div class="panel-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .panel-container{
    min-height: calc(100vh * .85);
    border-radius: 1rem;
    margin: 2rem 3rem;
    // background: var(--panel-background-color);
    box-shadow: -7px -7px 20px 0px #fff9, 
      -4px -4px 5px 0px #fff9, 
      7px 7px 20px 0px #0002, 
      4px 4px 5px 0px #0001, 
      inset 0px 0px 0px 0px #fff9, 
      inset 0px 0px 0px 0px #0001, 
      inset 0px 0px 0px 0px #fff
      inset 0px 0px 0px 0px #0001;

    .panel-title{
      font-size: 1.5rem;
      font-weight: 450;
      padding: .5rem;
      color: #282642;
      text-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    }

    .panel-body{
      padding: 1rem;
      .panel-part{
        display: flex;

      }
    }
  }
</style>