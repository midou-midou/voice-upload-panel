<script lang="ts" setup>
import siteConfig from '../configs/site.config'
// import { useI18n } from 'vue-i18n';
import { PanelVoice } from '../types/voice';

const voiceData = ref<PanelVoice[]>([])
const voiceStore = useVoiceStore()
const currentRoute = useRoute()

watchEffect(async () => {
  // TODO：缓存 参考serviceWorker
  await voiceStore.getVupVoice(currentRoute.name as string)
  voiceData.value = voiceStore.allVoice!
})

</script>

<template>
  <Panel :title="siteConfig.panel.displayPanel">
    <template #body>
      <template v-for="(clfyVoice, index) in voiceData" :key="index">
        <div class="panel-part-title">{{ clfyVoice.clfy.desc[$i18n.locale] }}</div>
        <div class="panel-part">
          <template v-for="(one, index) in clfyVoice.voice" :key="one.id">
              <transition-group name="list">
                <VoiceButton v-bind="one"/>
              </transition-group>
            </template>
          </div>
        </template>
    </template>
  </Panel>
</template>

<style scoped lang="scss">
.panel-part-title{
  margin-bottom: .5rem;
}
.panel-part{
  display: flex;
  flex-wrap: wrap;

  // &::last-line{
  //   .btn-default{
  //     margin: 0 1.2rem 0 0;
  //   }
  // }
  
}

.list-move{
  transition: all 0.5s ease;
}
</style>