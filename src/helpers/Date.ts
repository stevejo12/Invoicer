import { Days, Months } from "../constants/Date";

const ShortFormatDate = (date: Date) => {
  let dayDate = date.getDate();
  let monthIndex = date.getMonth();
  let monthName = Months[monthIndex];
  let year = date.getFullYear();

  return `${dayDate}-${monthName}-${year}`;
};

const GetDayFromDate = (date: Date) => {
  const day = date.getDay();

  return Days[day];
};

export { ShortFormatDate, GetDayFromDate };
