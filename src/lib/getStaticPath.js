import getIsDev from "./getIsDev";

const isDev = getIsDev();
console.log(process.env);
const prefix = isDev ? 'assets/' : '';

export default function getStaticPath(path) {
    return `${prefix}${path}`;
}