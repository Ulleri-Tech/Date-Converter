import { weekDayBS, nepaliNum, MONTH_NAME_BS, englishNum } from "./constant";

export function formatedBSDate(date_str_bs, date_ad) {
  if ((date_str_bs + "").includes("Invalid")) return date_str_bs;
  const weekday_BS = weekDayBS[date_ad.getDay()];
  const year_bs = convertToNepali(date_str_bs.split("-")[0]);
  const month_bs = date_str_bs.split("-")[1];
  const day_bs = convertToNepali(date_str_bs.split("-")[2]);
  return `${weekday_BS}, ${MONTH_NAME_BS[month_bs - 1]} ${day_bs}, ${year_bs}`;
}

export function convertToNepali(num: number | string) {
  let nepali = "";
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    nepali += nepaliNum[parseInt(num[i])];
  }
  return nepali;
}

export function formatedADDate(date_str_ad) {
  if ((date_str_ad + "").includes("Invalid")) return date_str_ad;
  return new Date(date_str_ad).toLocaleString("en-ca", {
    month: "long",
    day: "numeric",
    year: "numeric",
    weekday: "long",
  });
}

export function isLeapYear(year: string | number) {
  year = +year;
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function convertToEnglish(num: number | string) {
  let eng = "";
  num = num.toString();
  for (const n of num) {
    eng += englishNum[nepaliNum.findIndex((nep) => nep == n)];
  }
  return eng;
}
