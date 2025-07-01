import { uploadVoices } from "../api";
import type { UploadVoice } from "../types/voice";

export const useFetchUploadVoice = (voices: UploadVoice[] | undefined) : Promise<any> => {
  if (!voices || voices.length === 0) {
    return Promise.reject(new Error("还没有上传任何音声呢"))
  }
  return uploadVoices(voices)
}
