// import { Vup } from "../constants/voice";

export const Api = {
  auth: {

  },
  admin: {
    listVupVoice: (ownerName: Vup):string => `/voice?owner=${ownerName}`
  }
}
