/**
 * Wait a promise.
 *
 * @function wait
 * @param { number } timeout
 * @returns { any } any.
 */
export const wait = (timeout: number): any =>
  new Promise((resolve) => setTimeout(resolve, timeout));
