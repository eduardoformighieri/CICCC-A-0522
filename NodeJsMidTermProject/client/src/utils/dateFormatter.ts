export const dateFormatter = (stringDate: string) => {
  const date = new Date(stringDate);
  return date.toLocaleString('en-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
