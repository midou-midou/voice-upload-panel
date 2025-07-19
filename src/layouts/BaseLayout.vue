<template>
  <header class="header-container">
    <!-- 上传站标题 -->
    <div class="header-button-container">
      <div class="header-button font-shadow">{{ siteConfig.title }}</div>
    </div>
    <!-- 小希小桃像素画部分 -->
    <div class="header-xitao-container">

    </div>
    <switch-vup-btn></switch-vup-btn>
  </header>
  <section class="base-layout-container">
    <router-view />
  </section>
  <footer>
    <div class="footer-container">
      <span class="footer-declare">{{ siteConfig.footer.webSiteDeclare }}</span>
      <span>
        感谢开源字体
        <a href="https://github.com/justfont/open-huninn-font" target="_blank">jf open-huninn粉圆</a>
      </span>
      <span class="footer-website-info">Power by Vue
        <svg viewBox="0 0 128 128" width="12" height="12">
          <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"></path>
          <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" ></path>
        </svg>
      </span>
      <span class="footer-beian">{{ siteConfig.footer.beianInfo }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import siteConfig from '../configs/site.config';

</script>

<style lang="less" scoped>
.base-layout-container {
  padding: 0 1rem;
}

.header-container {
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0 1rem;

  .header-button-container {
    font-size: 1.5rem;
    color: #fff;
    display: inline-block;
    position: relative;
    color: var(--panel-title-color);
    
    .header-button {
      font-size: 1.5rem;
      font-weight: 450;
      padding: .5rem;
    }

    &::after{
      content: 'Beta测试版';
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.2rem;
      transform: translate(95%, -15%);
    }
  }

  & :deep(div:nth-child(3)) {
    margin-left: auto;
  }
}

.footer-container {
  padding: 0 1rem 1rem 1rem;
  font-size: .8rem;
  text-align: center;

  &>span {
    display: block;
    color: var(--panel-title-color);
    text-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  }
}
</style>