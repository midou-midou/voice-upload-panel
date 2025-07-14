<script lang="ts" setup>
import VoicePanelLayout from '../layouts/VoicePanelLayout.vue';
import UploadLayout from '../layouts/UploadLayout.vue';

const voiceStore = useVoiceStore()
const currentRoute = useRoute()

watchEffect(async () => {
  // TODO：缓存 参考serviceWorker
  await voiceStore.getVupVoice(currentRoute.name as string)
})

</script>

<template>
  <template v-for="(clfyVoice, index) in voiceStore.allVoice" :key="index">
    <voice-panel-layout :clfyId="clfyVoice.clfy.id">
      <template #title>
        <clfy-title v-bind="clfyVoice.clfy"/>
      </template>
      <div class="panel-part">
        <transition-group name="list">
          <template v-for="(one, index) in clfyVoice.voice" :key="one.id">
            <VoiceButton v-bind="one" :vup="currentRoute.name" />
          </template>
        </transition-group>
        <UploadLayout :clfyId="clfyVoice.clfy.id" />
      </div>
    </voice-panel-layout>
  </template>
  <voice-panel-layout>
    <template #title>
      <clfy-button :vup="currentRoute.name"/>
    </template>
  </voice-panel-layout>
</template>

<style scoped lang="scss">
.panel-part {
  width: fit-content;
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