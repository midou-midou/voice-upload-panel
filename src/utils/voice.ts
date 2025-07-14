import { VNode } from "vue"
import i18n from "../locale"

export const descGetLocale = (descJson: string) => {
  const locale = unref(i18n.global.locale)
  return JSON.parse(descJson)[locale] ?? 'unknow'
}

export const isShowControlButton = (componentVnode: VNode, creator: string) => {
  return defineComponent({
    setup() {
      const siteStore = useSiteStore()
      return () => unref(siteStore.user) === creator ? componentVnode : null
    }
  })
}

export const getVupFromUrl = (): string => {
  const path = location.pathname.split(/^\/(.*?)\??$/)[1]
  return path
}