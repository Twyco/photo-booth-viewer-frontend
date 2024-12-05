export function formatDate(isoString: string): string {
  const date = new Date(isoString);


  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date ${isoString}`);
  }
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}