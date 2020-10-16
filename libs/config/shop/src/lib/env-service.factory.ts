import { EnvService } from './env.service'

export const EnvServiceFactoy = () => {
    const envService = new EnvService();

    const w = window || {};
    const browserEnv = w['__env'] || {};
    for (const prop in browserEnv) {
        if (browserEnv.hasOwnProperty(prop)) {
            envService[prop] = browserEnv[prop];
        }
    }
    return envService;
}