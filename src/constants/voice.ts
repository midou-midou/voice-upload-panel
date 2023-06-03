import siteConfig from "../configs/site.config"

interface VoiceDesc{
  zh: string
  en: string
  jp: string
}

export type Vup = keyof typeof siteConfig.vups

export interface Voice{
  id: string
  desc: VoiceDesc
  clfy: string
  vup: Vup
  creator: string
}


