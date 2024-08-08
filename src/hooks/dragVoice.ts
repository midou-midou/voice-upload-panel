import { Voice } from "../types/voice"

export function useDragVoice(el: Ref<HTMLElement | undefined>, voiceData: Voice) {
  const dom = unref(el)!
  const voiceStore = useVoiceStore()

  dom.draggable = true

  dom.ondragover = (e) => e.preventDefault()
  
  dom.ondragstart = (e) => {
    voiceStore.dragingVocie = voiceData.id
    // Object.assign(voiceStore.dragingVocie!, voiceData)
    // 去掉按钮阴影
    let dragedDom = e.target as HTMLElement
    dragedDom.classList.add('btn-drag')
    dragedDom.classList.remove('btn-shadow')
  }
  
  dom.ondragenter = (e) => {
    if (voiceData.id === voiceStore.dragingVocie) return
    for (const clfy of voiceStore.allVoice!) {
      clfy.voice.map((v, k) => {
        if (v.id === voiceData.id) voiceStore.insertedVoice = {...v, index: k, clfyId: clfy.clfy.id}
      })
    }
  }

  dom.ondragend = (e) => {
    let dragVoice: Voice = {id: '', desc: {zh: '', en: '', jp: ''}, creator: '', path: '', vup: ''}
    for (const clfy of voiceStore.allVoice!) {
      for (let index = 0;  index < clfy.voice.length; index++) {
        if (clfy.voice[index].id === voiceStore.dragingVocie){ 
          dragVoice = clfy.voice[index]
          clfy.voice.splice(index, 1)
        }
      }
    }

    for (const clfy of voiceStore.allVoice!) {
      if (clfy.clfy.id === voiceStore.insertedVoice?.clfyId) {
        clfy.voice.splice(voiceStore.insertedVoice.index!, 0, {
          id: dragVoice?.id!,
          desc: dragVoice?.desc!,
          creator: dragVoice?.creator!,
          path: dragVoice?.path!,
          vup: dragVoice?.vup!,
        })
      }
    }
    
    let dragedDom = e.target as HTMLElement
    dragedDom.classList.remove('btn-drag')
    dragedDom.classList.add('btn-shadow')
  }

}