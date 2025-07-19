import { UploadVoiceStatus } from "./enmu"

export interface vupVoice {
  [k: string]: PanelVoice[]
}

export type Clfy = {
  id: string,
  creator: string,
  desc: string
}

export type PanelVoice = {
  clfy: Clfy
  voice: Voice[]
}

export interface UploadVoice extends Voice{
  status?: UploadVoiceStatus
  uploadFile: File
}

export type Voice = {
  index?: number
  id?: string
  clfyId?: string
  desc: string
  vup?: string
  creator: string
  path: string
}

export interface SiteConfig {
  title: string
  panel: {
    [k: string]: string
  }
}
