import { Component, VNode } from "vue"
import i18n from "../locale"

export const voiceDescGetName = (descJson: string) => {
  const locale = unref(i18n.global.locale)
  return JSON.parse(descJson)[locale] ?? 'unknow-voice'
}

export const isShowControlButton = (componentVnode: VNode, creator: string) => {
  return defineComponent({
    setup() {
      const siteStore = useSiteStore()
      return () => unref(siteStore.user) === creator ? componentVnode : null
    }
  })
}