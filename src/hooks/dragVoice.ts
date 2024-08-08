import { Voice } from "../types/voice"

export function useDragVoice(el: Ref<HTMLElement | undefined>, voiceData: Voice) {
  const dom = unref(el)!
  const voiceStore = useVoiceStore()

  dom.draggable = true

  dom.ondragover = (e) => e.preventDefault()
  
  dom.ondragstart = (e) => {
    for (const clfy of voiceStore.allVoice!) {
      clfy.voice.map((v, k) => {
        if (v.id === voiceData.id) 
          voiceStore.dragingVocie = {...v, index: k, clfyId: clfy.clfy.id}
      })
    }
    // Object.assign(voiceStore.dragingVocie!, voiceData)
    // 去掉按钮阴影
    let dragedDom = e.target as HTMLElement
    dragedDom.classList.add('btn-drag')
    dragedDom.classList.remove('btn-shadow')
  }
  
  dom.ondragenter = (e) => {
    if (voiceData.id === voiceStore.dragingVocie?.id) return
    for (const clfy of voiceStore.allVoice!) {
      clfy.voice.map((v, k) => {
        if (v.id === voiceData.id) voiceStore.insertedVoice = {...v, index: k, clfyId: clfy.clfy.id}
      })
    }
  }

  dom.ondragend = (e) => {
    for (const clfy of voiceStore.allVoice!) {
      if (clfy.clfy.id === voiceStore.dragingVocie?.clfyId) {
        clfy.voice.splice(voiceStore.dragingVocie.index as number, 1)
      }
      if (clfy.clfy.id === voiceStore.insertedVoice?.clfyId) {
        clfy.voice.splice(voiceStore.insertedVoice.index as number, 0, {
          id: voiceStore.dragingVocie?.id!,
          desc: voiceStore.dragingVocie?.desc!,
          creator: voiceStore.dragingVocie?.creator!,
          vup: voiceStore.dragingVocie?.vup!,
        })
      }
    }
    
    let dragedDom = e.target as HTMLElement
    dragedDom.classList.remove('btn-drag')
    dragedDom.classList.add('btn-shadow')
  }

}