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
    <voice-panel-layout :title="siteConfig.panel.displayPanel" @mountHook="() => useDragVoicePanel(panelPartRef[index], clfyVoice.clfy.id)">
      <template #title>
        {{ JSON.parse(clfyVoice.clfy.desc)[$i18n.locale] }}
      </template>
      <div ref="panelPartRef" class="panel-part">
        <transition-group name="list">
          <template v-for="(one, index) in clfyVoice.voice" :key="one.id">
            <VoiceButton v-bind="one" :vup="currentRoute.name" />
          </template>
        </transition-group>
        <UploadButton :vup="currentRoute.name"/>
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
  min-height: 2.5rem;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>