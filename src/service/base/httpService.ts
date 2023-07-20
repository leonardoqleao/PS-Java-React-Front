import { Axios, AxiosRequestConfig } from "axios";
import env from "react-dotenv";

class AxiosService extends Axios {
    private url: string;
    constructor(params?: AxiosRequestConfig) {
        super(params);
        this.url = env.API_URL
    }
    
}