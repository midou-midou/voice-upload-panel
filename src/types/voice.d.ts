import siteConfig from "../configs/site.config"
import messages from "../locale/messages"

declare global {
  type localeDesc = Record<keyof typeof messages, string>
  type locale = keyof typeof messages
  type Vup = keyof typeof siteConfig.vups
  interface vupVoice {
    [k: string]: PanelVoice[]
  }
}

export interface PanelVoice{
  clfy: {
    id: string,
    creator: string,
    desc: localeDesc
  }
  voice: Voice[]
}

export interface Voice{
  id: string
  desc: localeDesc
  vup: Vup
  creator: string
}

export interface SiteConfig{
  title: string
  panel: {
    [k: string]: string
  }
}
