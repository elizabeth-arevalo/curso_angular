
import { environment } from "../../../environments/environment";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({baseUrl: environment.apiUrl, params:{
    api_key: environment.apiKey ?? 'No key',
    language: 'es'
}})