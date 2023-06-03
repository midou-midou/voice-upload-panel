<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Panel from '../../components/Panel/index.vue';
import siteConfig from '../../configs/site.config';
import { Voice } from '../../constants/voice';

const voiceData = ref<Voice>([]);

onMounted(() => {
  
})

</script>

<template>
  <Panel :title="siteConfig.panel.DisplayPanel">
    <template #body>

    </template>
  </Panel>

</template>

