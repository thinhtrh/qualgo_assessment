
export const logd = (TAG: string, message: string): void => {
    if (__DEV__) {
        console.log(`${TAG} - ${message}`);
    } 
}

export const loge = (TAG: string, message: string): void => {
    if (__DEV__) {
        console.log(`--------------ERROR----------------`);
        console.log(`${TAG} - ${message}`);
        console.log(`----------------------------------`);
    } 
}