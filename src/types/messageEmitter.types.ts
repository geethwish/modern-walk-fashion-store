export interface MessageEmitterTypes {
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  autoClose: number
  hideProgressBar?: boolean
  closeOnClick?: boolean
  pauseOnHover?: boolean
  draggable?: boolean
  progress?: number
  theme: "light" | "dark" | "colored"
}
