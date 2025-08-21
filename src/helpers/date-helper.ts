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
