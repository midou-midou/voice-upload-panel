import siteConfig from "../configs/site.config"
import messages from "../locale/messages"

declare global {
  type localeDesc = Record<keyof typeof messages, string> & {[k: string]: string}
  type locale = keyof typeof messages
  type Vup = keyof typeof siteConfig.vups
  interface vupVoice {
    [k: string]: PanelVoice[]
  }
}

export type PanelVoice = {
  clfy: {
    id: string,
    creator: string,
    desc: localeDesc
  }
  voice: Voice[]
}

export type Voice = {
  index?: number
  id: string
  clfyId?: string
  desc: localeDesc
  vup: Vup
  creator: string
  path: string
}

export interface SiteConfig{
  title: string
  panel: {
    [k: string]: string
  }
}
