import axios, { AxiosError, AxiosRequestConfig } from "axios"
import { baseApiUrl } from "../static/variables"
import { messageEmitter } from "../utils/massageEmitter"

export const axiosInterceptor = () => {
  axios.interceptors.request.clear()
  axios.interceptors.response.clear()

  // Set the Interceptor Configurations
  axios.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
      config.headers.set("Accept", "application/json")
      config.baseURL = baseApiUrl
      return config
    },
    async (err) => await Promise.reject(err),
  )

  axios.interceptors.response.use(
    (response) => response,
    async function (error: AxiosError<any>) {
      const status = error?.response?.status

      if (error?.code === "ERR_NETWORK") {
        messageEmitter("Please check your connection and retry", "error")
        return await Promise.reject(error)
      }

      switch (status) {
        case 400: {
          const firstMessage = Object.values(
            error.response?.data?.errors,
          )[0] as any
          const errorMessage = firstMessage?.message ?? firstMessage
          return messageEmitter(errorMessage, "error")
        }

        case 404: {
          return messageEmitter("Requested api not found", "error")
        }

        case 405: {
          return messageEmitter("405 Method Not Allowed", "warning")
        }

        case 500: {
          return messageEmitter("Requested api not found", "error")
        }
      }
      return await Promise.reject(error)
    },
  )
}
