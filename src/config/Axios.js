
import Environments, { DEV } from "./Environment"
export const AxiosConfig = {
    timeout: 15000,
    baseURL: DEV ? Environments.development.BASE_URL : Environments.staging.BASE_URL,
};