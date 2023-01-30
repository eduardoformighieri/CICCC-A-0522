export const MILLISECONDS_A_SECOND = 1000;
export const MILLISECONDS_A_MINUTE = 60000;
export const MILLISECONDS_A_HOUR = 3600000;
export const MILLISECONDS_A_DAY = 86400000;

export const relativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const dateInMs = date.getTime();
  const timeNowInMs = new Date().getTime();

  const difference = timeNowInMs - dateInMs;

  if (difference < MILLISECONDS_A_MINUTE) return 'Now';
  if (difference < 2 * MILLISECONDS_A_MINUTE) return 'A minute ago';
  if (difference < MILLISECONDS_A_HOUR)
    return `${Math.floor(difference / MILLISECONDS_A_MINUTE)} minutes ago`;
  if (difference < 2 * MILLISECONDS_A_HOUR) return 'A hour ago';
  if (difference < 25 * MILLISECONDS_A_HOUR)
    return `${Math.floor(difference / MILLISECONDS_A_HOUR)} hours ago`;

  return date.toLocaleString('en-Ca', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
