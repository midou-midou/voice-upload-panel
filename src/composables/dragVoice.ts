import { Voice } from "../types/voice"

export function useDragVoice(el: Ref<HTMLElement | undefined>, voiceData: Voice) {
  const dom = unref(el)!
  const voiceStore = useVoiceStore()

  dom.draggable = true

  dom.ondragover = (e) => e.preventDefault()
  
  dom.ondragstart = (e) => {
    if (!voiceData.id) return
    voiceStore.draggingVoiceId = voiceData.id
    // 去掉按钮阴影
    dom.classList.add('btn-drag')
    dom.classList.remove('btn-shadow')
  }

  dom.ondragend = (e: DragEvent) => {
    // 添加新位置的按钮样式
    dom.classList.remove('btn-drag')
    dom.classList.add('btn-shadow')
  }

  dom.ondrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
}