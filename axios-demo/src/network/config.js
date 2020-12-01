
const devBaseUrl = "https://httpbin.org"
const proBaseUrl = "https://baidu.com"

export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseUrl : proBaseUrl
export const TIMEOUT = 5000
