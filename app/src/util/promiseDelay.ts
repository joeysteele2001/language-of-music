import { randn } from "./randn";

export const promiseDelay = async <T>(value: T, delay: number): Promise<T> => {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
};

export const promiseDelayRand = async <T>(value: T, delay: { mean: number, variance: number }) => {
    let delayTime = 0;
    while (delayTime <= 0) {
        delayTime = (randn() * delay.variance) + delay.mean;
    }

    return promiseDelay(value, delayTime);
};

export default promiseDelay;