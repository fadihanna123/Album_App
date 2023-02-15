/**
 * Convert Unix timestamp to readable date and time
 *
 * @function
 * @param { number } unixTimeStamp - Unix Time Stamp
 * @returns { string } Converted timestamp
 * @example convertUnixToTime(45545452);
 */
export const convertUnixToTime = (unixTimeStamp: number): string => {
  const convertedDate = new Date(unixTimeStamp).toLocaleDateString('sv-SE');
  const convertedTime = new Date(unixTimeStamp).toLocaleTimeString('sv-SE');
  return `${convertedDate} ${convertedTime}`;
};
