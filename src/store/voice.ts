import { defineStore } from "pinia";
import { PanelVoice, Voice } from "../types/voice";
import { listVupVoice } from "../api";

export const useVoiceStore = defineStore('voice', () => {
  const dragingVocie = ref<{index: Number, clfyId: String} & Voice>()
  const insertedVoice = ref<{index: Number, clfyId: String} & Voice>()
  const allVoice = ref<PanelVoice[]>()

  async function getVupVoice(vupName: string) {
    const result = await listVupVoice(vupName)
    allVoice.value = [...result[vupName]]
  }

  return {
    dragingVocie, allVoice, getVupVoice, insertedVoice
  }
})