export const handlerError = (callback: Function) => {
  try {
    callback()
  } catch (error) {
    // 错误处理
  }
}