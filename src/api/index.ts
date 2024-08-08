import { Api } from "../configs/api.config";
import { PanelVoice } from "../types/voice";
// import { Vup } from "../constants/voice";
import request from "./request";

export const listVupVoice = async (vupName: string): Promise<vupVoice> => 
  await (await request(`${Api.admin.listVupVoice(vupName)}`)).data

