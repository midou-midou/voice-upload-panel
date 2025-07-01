import { Api } from "../configs/api.config";
import type { UploadVoice, Voice, vupVoice } from "../types/voice";
import request from "./request";

export const listVupVoice = async (vupName: string): Promise<vupVoice> =>
  await (await request(`${Api.admin.listVupVoice(vupName)}`)).data

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
    data: formData
  })).data
}

// 删除音声
export const deleteVoice = async (name: string): Promise<any> => await (await request(Api.admin.deleteVoice, {
  method: 'DELETE',
  data: {name}
})).data

// 登录
export const login = async (name: string): Promise<string> => 
    await (await request(Api.auth.login, {
      method: 'POST',
      data: {
        name
      }
    }))