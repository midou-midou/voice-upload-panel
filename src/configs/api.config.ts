// import { Vup } from "../constants/voice";

import { UploadVoice } from "../types/voice";

export const Api = {
  auth: {
    login: '/login'
  },
  admin: {
    listVupVoice: (ownerName: string):string => `/voice?owner=${ownerName}`,
    uploadVoices: '/upload',
    deleteVoice: '/voice',
    createClfyName: '/clfy',
    deleteClfy: '/clfy',
    updateVoiceClfy: '/voice'
  }
}
