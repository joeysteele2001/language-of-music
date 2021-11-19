export const promiseDelay = async <T>(value: T, delay: number): Promise<T> => {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
};

export default promiseDelay;