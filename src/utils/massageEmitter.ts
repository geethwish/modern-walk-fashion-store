import { toast } from "react-toastify"
import { MessageEmitterTypes } from "../types/messageEmitter.types"

const toastifySettings: MessageEmitterTypes = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}
export const messageEmitter = (
  message: string,
  type?: "info" | "success" | "warning" | "error",
  settings?: MessageEmitterTypes,
) => {
  if (type === undefined) {
    return toast(message, settings !== undefined ? settings : toastifySettings)
  } else {
    return toast[type](
      message,
      settings !== undefined ? settings : toastifySettings,
    )
  }
}
