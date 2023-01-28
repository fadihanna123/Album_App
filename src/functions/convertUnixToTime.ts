/**
 * Convert Unix timestamp to readable date and time
 *
 * @function
 * @param { number } unixTimeStamp - Unix Time Stamp
 * @returns { string } Converted timestamp
 */
export const convertUnixToTime = (unixTimeStamp: number) => {
  const convertedDate = new Date(unixTimeStamp).toLocaleDateString('sv-SE');
  const convertedTime = new Date(unixTimeStamp).toLocaleTimeString('sv-SE');
  return `${convertedDate} ${convertedTime}`;
};
