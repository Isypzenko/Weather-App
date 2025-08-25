interface dateFormat {
  day: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
}

export function dateFormater(date: number): dateFormat {
  let timeStamp = new Date(date * 1000);
  const day = timeStamp.getDate();
  const month = timeStamp.getMonth();
  const year = timeStamp.getFullYear();
  const hours = timeStamp.getHours();
  const minutes = timeStamp.getMinutes();
  return { day, month, year, hours, minutes };
}

export const getFormatDate = function (date: number): string {
  return `${date < 10 ? `0${date}` : date}`;
};

export function formatDateOrToday(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const today = new Date();

  const isSameDay =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  if (isSameDay) {
    return "Today";
  }
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
