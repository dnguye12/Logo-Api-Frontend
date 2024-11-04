import axios from 'axios'
import { setupCache } from 'axios-cache-interceptor';

const baseUrl = import.meta.env.VITE_API_URL

const dailyAxios = setupCache(axios.create(), {
    ttl: 3600000, // 1 hour cache for daily data
});

export const getLogoTicker = async(ticker) => {
    let query = baseUrl + `?ticker=${ticker}`

    try {
        const request = await dailyAxios.get(query)
        return request.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return ''
        }
        console.log(error)
    }
}