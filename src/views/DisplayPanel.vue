<script lang="ts" setup>
import siteConfig from '../configs/site.config'
import VoicePanelLayout from '../layouts/VoicePanelLayout.vue';
// import { useI18n } from 'vue-i18n';
import { PanelVoice } from '../types/voice';
import {useDragVoicePanel} from "../hooks/dragVoicePanel";

const voiceData = ref<PanelVoice[]>([])
const voiceStore = useVoiceStore()
const currentRoute = useRoute()
const panelPartRef = ref<HTMLElement[]>()

 watchEffect(async () => {
  // TODO：缓存 参考serviceWorker
  await voiceStore.getVupVoice(currentRoute.name as string)
  voiceData.value = voiceStore.allVoice!
})

</script>

<template>
  <template v-for="(clfyVoice, index) in voiceData" :key="index">
    <voice-panel-layout :title="siteConfig.panel.displayPanel" @mountHook="() => useDragVoicePanel(panelPartRef[index])">
      <template #title>
        {{ JSON.parse(clfyVoice.clfy.desc)[$i18n.locale] }}
      </template>
      <div ref="panelPartRef" class="panel-part">
        <transition-group name="list">
          <template v-for="(one, index) in clfyVoice.voice" :key="one.id">
            <VoiceButton v-bind="one" :vup="currentRoute.name" />
          </template>
        </transition-group>
      </div>
    </voice-panel-layout>
  </template>
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