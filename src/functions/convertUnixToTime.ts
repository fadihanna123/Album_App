/**
 * Convert Unix timestamp to readble date and time
 *
 * @param unixTimeStamp - Unix Time Stamp
 * @returns Converted timestamp
 */

export const convertUnixToTime = (unixTimeStamp: number) => {
  const convertedDate = new Date(unixTimeStamp).toLocaleDateString('sv-SE');
  const convertedTime = new Date(unixTimeStamp).toLocaleTimeString('sv-SE');
  return `${convertedDate} ${convertedTime}`;
};
