import { defineStore } from "pinia";
import type { PanelVoice, Voice } from "../types/voice";
import { listVupVoice } from "../api";

export const useVoiceStore = defineStore('voice', () => {
  const draggingVocieId = ref('')
  const allVoice = ref<PanelVoice[]>()

  async function getVupVoice(vupName: string) {
    const result = await listVupVoice(vupName)
    allVoice.value = [...result[vupName]]
  }

  return {
    dragingVocieId: draggingVocieId,
    allVoice,
    getVupVoice
  }
})