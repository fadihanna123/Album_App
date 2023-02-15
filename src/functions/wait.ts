/**
 * Wait a promise.
 *
 * @function wait
 * @param { number } timeout
 * @returns { any } any.
 * @example wait(30);
 */
export const wait = (timeout: number): any =>
  new Promise((resolve) => setTimeout(resolve, timeout));
