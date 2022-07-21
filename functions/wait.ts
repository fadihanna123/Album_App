export const wait = (timeout: number): any => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
