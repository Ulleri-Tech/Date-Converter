import { convertToNepali } from "./formater";

export const weekDayBS = [
  "आइतबार",
  "सोमबार",
  "मङ्गलबार",
  "बुधवार",
  "बिहीबार",
  "शुक्रबार",
  "शनिबार",
];

export const nepaliNum = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
export const englishNum = Array.from({ length: 10 }, (_, i) => i.toString());

export type DAYTYPE = Readonly<{
  [key: string]: number[];
}>;
export const DAY_AD: DAYTYPE = {
  YEAR: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  LEAP: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
};
export const DAY_BS: DAYTYPE = {
  "2000": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2001": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2002": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2003": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2004": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2005": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2006": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2007": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2008": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  "2009": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2010": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2011": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2012": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2013": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2014": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2015": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2016": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2017": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2018": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2019": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2020": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2021": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2022": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2023": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2024": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2025": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2026": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2027": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2028": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2029": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  "2030": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2031": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2032": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2033": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2034": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2035": [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  "2036": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2037": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2038": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2039": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2040": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2041": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2042": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2043": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2044": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2045": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2046": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2047": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2048": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2049": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2050": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2051": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2052": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2053": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2054": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2055": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2056": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  "2057": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2058": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2059": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2060": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2061": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2062": [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  "2063": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2064": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2065": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2066": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  "2067": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2068": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2069": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2070": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2071": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2072": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2073": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2074": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2075": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2076": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2077": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2078": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2079": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2080": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2081": [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2082": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2083": [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  "2084": [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  "2085": [31, 32, 31, 32, 31, 31, 30, 30, 29, 30, 30, 30],
  "2086": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2087": [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  "2088": [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  "2089": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2090": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2091": [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  "2092": [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2093": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2094": [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  "2095": [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
  "2096": [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2097": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2098": [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 30, 31],
  "2099": [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30],
  "2100": [31, 32, 31, 32, 30, 31, 30, 29, 30, 29, 30, 30],
};

export const MONTH_NAME_BS = [
  "वैशाख",
  "जेठ",
  "आषाढ",
  "श्रवण",
  "भद्र",
  "अश्विन",
  "कार्तिक",
  "मङ्सिर",
  "पौष",
  "माघ",
  "फाल्गुन",
  "चैत्र",
];

export const YEAR_AD = Array.from({ length: 99 }, (_, i) =>
  (1944 + i).toString()
);

export const YEAR_BS = Array.from({ length: 99 }, (_, i) =>
  convertToNepali(2001 + i)
);

export const MONTH_NAME_AD = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];