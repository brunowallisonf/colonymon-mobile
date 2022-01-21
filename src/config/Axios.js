
import Environments, { DEV } from "./Environment"

export const AxiosConfig = {
    timeout: 30000,
    baseURL: DEV ? Environments.development.BASE_URL : Environments.staging.BASE_URL,
};

console.log(AxiosConfig)