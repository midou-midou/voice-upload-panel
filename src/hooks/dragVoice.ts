import { Voice } from "../types/voice"

export function useDragVoice(el: Ref<HTMLElement | undefined>, voiceData: Voice) {
  const dom = unref(el)!
  const voiceStore = useVoiceStore()

  dom.draggable = true

  dom.ondragover = (e) => e.preventDefault()
  
  dom.ondragstart = (e) => {
    voiceStore.dragingVocieId = voiceData.id
    // Object.assign(voiceStore.dragingVocieId!, voiceData)
    // 去掉按钮阴影
    let dragedDom = e.target as HTMLElement
    dragedDom.classList.add('btn-drag')
    dragedDom.classList.remove('btn-shadow')
  }

  dom.ondragenter = () => {
    // if (voiceData.id === voiceStore.dragingVocieId) return
    // for (const clfy of voiceStore.allVoice!) {
    //   clfy.voice.map((v, k) => {
    //     if (v.id === voiceData.id) voiceStore.insertedVoice = {...v, index: k, clfyId: clfy.clfy.id}
    //   })
    // }
  }

  dom.ondragend = (e: DragEvent) => {
    let dragVoice: any = {}
    for (const clfy of voiceStore.allVoice!) {
      // 删除拖拽过来的音声的老位置
      for (let index = 0;  index < clfy.voice.length; index++) {
        if (clfy.voice[index].id === voiceStore.dragingVocieId){ 
          dragVoice = clfy.voice[index]
          clfy.voice.splice(index, 1)
        }
      }

      // 插入新的音声到拖拽的位置
      if (clfy.clfy.id === voiceStore.insertedVoice?.clfyId) {
        clfy.voice.splice(voiceStore.insertedVoice.index!, 0, dragVoice)
      }
    }

    let dragedDom = e.target! as HTMLElement
    dragedDom.classList.remove('btn-drag')
    dragedDom.classList.add('btn-shadow')
  }

  dom.ondrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
}