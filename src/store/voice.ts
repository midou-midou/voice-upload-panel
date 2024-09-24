import { defineStore } from "pinia";
import type { PanelVoice, Voice } from "../types/voice";
import { listVupVoice } from "../api";

export const useVoiceStore = defineStore('voice', () => {
  const dragingVocieId = ref('')
  const insertedVoice = ref<Voice>()
  const allVoice = ref<PanelVoice[]>()

  async function getVupVoice(vupName: string) {
    const result = await listVupVoice(vupName)
    allVoice.value = [...result[vupName]]
  }

  return {
    dragingVocieId, allVoice, getVupVoice, insertedVoice
  }
})