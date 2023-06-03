<template>
  <header class="header-container">
    <!-- 上传站标题 -->
    <div class="header-button-container">
      <div class="header-button btn-default">{{siteConfig.title}}</div>
    </div>
    <!-- 小希小桃像素画部分 -->
    <div class="header-xitao-container">
      
    </div>
  </header>
  <section class="base-layout-container">
    <DisplayPanel />
  </section>
  <footer>
    <div class="footer-container">
      <span class="footer-declare">{{siteConfig.footer.webSiteDeclare}}</span>
      <span class="footer-website-info">Power By Vue3 + Vite</span>
      <span class="footer-beian">{{siteConfig.footer.beianInfo}}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import siteConfig from '../configs/site.config';
import DisplayPanel from '../views/display/DisplayPanel.vue';



</script>

<style lang="less" scoped>
  .base-layout-container{
    padding: 0 1rem;
  }

  .header-container{
    padding: 1rem 1rem 0 1rem;

    .header-button-container{
      font-size: 1.5rem;
      color: #fff;
      display: inline-block;
      .header-button{
        background-color: #FF4C60;
        
      }
    }
  }

  .footer-container{
    padding: 0 1rem 1rem 1rem;
    font-size: .8rem;
    text-align: center;

    &>span{
      display: block;
    }
  }
</style>