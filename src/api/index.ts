import { Api } from "../configs/api.config";
import type { UploadVoice, Voice, vupVoice } from "../types/voice";
import request from "./request";

export const listVupVoice = async (vupName: string): Promise<vupVoice> => {
  if (!vupName) Promise.reject('获取音声的vup名字不能为空')
  return await (await request(`${Api.admin.listVupVoice(vupName)}`, {
    method: 'GET'
  })).data
}
// 上传单个或多个音声
export const uploadVoices = async (voices: UploadVoice[]): Promise<any> => {
  let formData = new FormData()
  let voicesInfo: any[] = []
  for (let voice of voices) {
    formData.append(`${voice.path}${voice.clfyId}`, voice.uploadFile)
    voicesInfo.push({
      clfyId: voice.clfyId,
      path: voice.path,
      desc: voice.desc,
      owner: voice.vup
    })
  }
  formData.append('voices', JSON.stringify(voicesInfo))

  return await (await request(Api.admin.uploadVoices, {
    method: 'POST',
    data: formData,
    onUploadProgress(progressEvent) {
        const store = useVoiceStore()
        store.uploadProgress = progressEvent
    },
  })).data
}

// 更新音声分类
export const updateVoiceClfy = async (clfyId: string, voiceId: string) => await request(Api.admin.updateVoiceClfy, {
  method: 'PUT',
  data: {
    clfyId,
    voiceId
  }
})

// 删除音声
export const deleteVoice = async (name: string): Promise<any> => await (await request(Api.admin.deleteVoice, {
  method: 'DELETE',
  data: { name }
})).data

// 创建音声分类标题
type CreateClfyNameParam = {
  owner: string
  desc: string
}

export const createClfyName = async (data: CreateClfyNameParam): Promise<any> => await request(Api.admin.createClfyName, {
  method: 'POST',
  data
})

// 删除音声分类
export const deleteClfy = async (id: string): Promise<any> => await request(Api.admin.deleteClfy, {
  method: 'DELETE',
  data: { id }
})

// 登录
export const login = async (name: string): Promise<any> =>
  await request(Api.auth.login, {
    method: 'POST',
    data: {
      name
    }
  })