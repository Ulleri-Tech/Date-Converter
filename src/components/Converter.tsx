import React, { useEffect, useState } from "react";
import Dropdown from "./common/Dropdown";
import {
  MONTH_NAME_AD,
  MONTH_NAME_BS,
  YEAR_BS,
  YEAR_AD,
  DAY_BS,
  DAY_AD,
} from "../utils/constant";
import {
  convertToEnglish,
  convertToNepali,
  formatedADDate,
  formatedBSDate,
  isLeapYear,
} from "../utils/formater";
import { ADTOBS, BSTOAD } from "date-convert-ad-bs";

interface ConverterProps {
  dateType: string;
}

const Converter: React.FC<ConverterProps> = ({ dateType }) => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedDay, setselectedDay] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [dayList, setDayList] = useState<string[]>([]);

  useEffect(() => {
    clearValue();
  }, [dateType]);

  useEffect(() => {
    let numOfDays = 0;
    setselectedDay("");

    if (dateType == "AD" && selectedYear && selectedMonth) {
      const monthIndex = MONTH_NAME_AD.findIndex(
        (date) => date == selectedMonth
      );

      if (isLeapYear(selectedYear)) numOfDays = DAY_AD["LEAP"][monthIndex];
      else numOfDays = DAY_AD["YEAR"][monthIndex];

      if (numOfDays >= 28 && numOfDays <= 31) {
        setDayList(
          Array.from({ length: numOfDays }, (_, i) => (i + 1).toString())
        );
      }
    }

    if (dateType == "BS" && selectedYear && selectedMonth) {
      const monthIndex = MONTH_NAME_BS.findIndex(
        (date) => date == selectedMonth
      );
      numOfDays = DAY_BS[convertToEnglish(selectedYear)][monthIndex];
      if (numOfDays >= 29 && numOfDays <= 32) {
        setDayList(
          Array.from({ length: numOfDays }, (_, i) => convertToNepali(i + 1))
        );
      }
    }
  }, [selectedMonth, selectedYear]);

  const convertToBS = () => {
    if (!selectedYear || !selectedMonth || !selectedDay) return;

    if (dateType == "BS") {
      const monthIndex = MONTH_NAME_BS.findIndex(
        (date) => date == selectedMonth
      );

      setResult(
        formatedADDate(
          BSTOAD(
            +convertToEnglish(selectedYear),
            monthIndex,
            +convertToEnglish(selectedDay)
          )
        )
      );
    } else {
      const monthIndex = MONTH_NAME_AD.findIndex(
        (date) => date == selectedMonth
      );
      setResult(
        formatedBSDate(
          ADTOBS(+selectedYear, monthIndex, +selectedDay),
          new Date(+selectedYear, monthIndex, +selectedDay)
        )
      );
    }
  };
  const clearResult = () => {
    setResult("");
  };
  const clearValue = () => {
    setSelectedYear("");
    setSelectedMonth("");
    setselectedDay("");
  };

  return (
    <div>
      <div className="flex gap-2">
        <Dropdown
          selected={selectedYear}
          onSelect={(e) => setSelectedYear(e)}
          options={dateType === "AD" ? YEAR_AD : YEAR_BS}
          placeholder={dateType === "AD" ? "Year" : "वर्ष"}
        />
        <Dropdown
          selected={selectedMonth}
          onSelect={(e) => setSelectedMonth(e)}
          options={dateType == "AD" ? MONTH_NAME_AD : MONTH_NAME_BS}
          placeholder={dateType === "AD" ? "Month" : "महिना"}
        />
        <Dropdown
          selected={selectedDay}
          onSelect={(e) => setselectedDay(e)}
          options={dayList}
          placeholder={dateType === "AD" ? "Day" : "दिन"}
        />
      </div>

      <div className="flex items-center justify-center h-20">
        <span className="text-lg">{result}</span>
        <span className="loading"></span>
      </div>

      <div className="buttonWrapper">
        <button className="convert" type="button" onClick={convertToBS}>
          Convert
        </button>
        <button className="clear" type="button" onClick={clearResult}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Converter;
