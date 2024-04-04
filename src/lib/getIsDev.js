import getEnv from "./getEnv";

export default function getIsDev() {
    return getEnv('NODE_ENV') === 'development';
}