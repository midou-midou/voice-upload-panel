<template>
  <header class="header-container">
    <!-- 上传站标题 -->
    <div class="header-button-container">
      <div class="header-button font-shadow">{{siteConfig.title}}</div>
    </div>
    <!-- 小希小桃像素画部分 -->
    <div class="header-xitao-container">
      
    </div>
    <switch-vup-btn></switch-vup-btn>
  </header>
  <section class="base-layout-container">
    <router-view />
    <control-panel />
  </section>
  <footer>
    <div class="footer-container">
      <span class="footer-declare">{{siteConfig.footer.webSiteDeclare}}</span>
      <span class="footer-website-info">Power by Vue3</span>
      <span class="footer-beian">{{siteConfig.footer.beianInfo}}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import siteConfig from '../configs/site.config';

</script>

<style lang="less" scoped>
  .base-layout-container{
    padding: 0 1rem;
  }

  .header-container{
    display: flex;
    align-items: center;
    padding: 1rem 1rem 0 1rem;

    .header-button-container{
      font-size: 1.5rem;
      color: #fff;
      display: inline-block;
      .header-button{
        // color: #FF4C60;
        font-size: 1.5rem;
        font-weight: 450;
        padding: .5rem;
        color: #282642; 
      }
    }

    & :deep(div:nth-child(3)){
      margin-left: auto;
    }
  }

  .footer-container{
    padding: 0 1rem 1rem 1rem;
    font-size: .8rem;
    text-align: center;

    &>span{
      display: block;
      color: #282642;
      text-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    }
  }
</style>