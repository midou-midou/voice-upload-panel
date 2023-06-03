import { Api } from "../configs/api.config";
import { appConfig } from "../configs/app.config"

// TODO开发完需要替换
export const getVupVoiceData = async (uid: string = ''): Promise<string> => 
  await (await fetch(`${appConfig.dataBase}`)).json()


export const getHistoryData =async (name: string): Promise<string> => 
  await (await fetch(`${appConfig.appOrigin}/${Api.admin.userHistory}/${name}`)).json()

