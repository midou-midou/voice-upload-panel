<template>
  {{ descGetLocale(desc) }}
  <ControlWrapper />
</template>
<script setup lang="ts">
import { deleteClfy } from '../../../../api';
import { descGetLocale, isShowControlButton } from '../../../../utils/voice';
import DeleteButton from '../../DeleteButton/index.vue'
import type { Clfy } from '../../../../types/voice';

const props = defineProps<Clfy>()

const ControlWrapper = isShowControlButton(h(DeleteButton, {
  onHandleDelete: () => deleteClfy(props.id)
}), props.creator)
</script>