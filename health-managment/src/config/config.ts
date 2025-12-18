const getDefaultConfig = () => {
    return import.meta.env.VITE_API_PATH || "https://development.tms.api.bjshomedelivery.com/v1/"
}
export const getBaseEndPoint = () => {
    return getDefaultConfig()
}