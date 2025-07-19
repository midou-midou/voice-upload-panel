import { defineStore } from "pinia";
import type { PanelVoice, Voice } from "../types/voice";
import { listVupVoice } from "../api";
import { getVupFromUrl } from "../utils/voice";

export const useVoiceStore = defineStore('voice', () => {
  const uploadProgress = ref()
  const draggingVoiceId = ref('')
  const allVoice = ref<PanelVoice[]>()

  async function getVupVoice(vupName: string) {
    const result = await listVupVoice(vupName)
    allVoice.value = [...result[vupName]]
  }

  async function refreshVupVoice() {
    const path = getVupFromUrl()
    await getVupVoice(path ?? '')
  }

  function clearDragging() {
    draggingVoiceId.value = ''
  }

  return {
    draggingVoiceId,
    allVoice,
    getVupVoice,
    refreshVupVoice,
    clearDragging,
    uploadProgress
  }
})