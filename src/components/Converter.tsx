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
  title: string;
  onClick: () => void;
}

const Converter: React.FC<ConverterProps> = ({ dateType, title, onClick }) => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedDay, setselectedDay] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [dayList, setDayList] = useState<string[]>([]);

  const handleClick = () => {
    onClick();
    clearValue();
  };

  useEffect(() => {
    const savedDataAsString = localStorage.getItem("__date_converter__");
    const savedData = savedDataAsString ? JSON.parse(savedDataAsString) : null;

    if (savedData) {
      if (savedData["year"]) {
        setSelectedYear(savedData["year"]);
      }
      if (savedData["month"]) {
        setSelectedMonth(savedData["month"]);
      }
      if (savedData["day"]) {
        setselectedDay(savedData["day"]);
      }
    }
  }, []);

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      let numOfDays = 0;
      let monthIndex = 0;
      switch (dateType) {
        case "AD":
          monthIndex = MONTH_NAME_AD.findIndex((date) => date == selectedMonth);

          if (isLeapYear(selectedYear)) numOfDays = DAY_AD["LEAP"][monthIndex];
          else numOfDays = DAY_AD["YEAR"][monthIndex];

          if (numOfDays >= 28 && numOfDays <= 31) {
            setDayList(
              Array.from({ length: numOfDays }, (_, i) => (i + 1).toString())
            );
          }
          break;
        case "BS":
          monthIndex = MONTH_NAME_BS.findIndex((date) => date == selectedMonth);
          numOfDays = DAY_BS[convertToEnglish(selectedYear)][monthIndex];
          if (numOfDays >= 29 && numOfDays <= 32) {
            setDayList(
              Array.from({ length: numOfDays }, (_, i) =>
                convertToNepali(i + 1)
              )
            );
          }
          break;
        default:
          break;
      }
      // Reset selected Day if it is out of bound.
      if (+selectedDay > numOfDays) {
        setselectedDay(numOfDays.toString());
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
    clearValue();
  };
  const clearValue = () => {
    setSelectedYear("");
    setSelectedMonth("");
    setselectedDay("");
    updatedLocalStorage("all", null);
  };

  const handleYearSelect = (e: React.SetStateAction<string>) => {
    setSelectedYear(e);
    updatedLocalStorage("year", e.toString());
  };

  const handleMonthSelect = (e: React.SetStateAction<string>) => {
    setSelectedMonth(e);
    updatedLocalStorage("month", e.toString());
  };

  const handleDaySelect = (e: React.SetStateAction<string>) => {
    setselectedDay(e);
    updatedLocalStorage("day", e.toString());
  };

  const updatedLocalStorage = (
    type: "year" | "month" | "day" | "all",
    value: string
  ) => {
    // updating localstorage as well
    const savedDataAsString = localStorage.getItem("__date_converter__");
    const savedData = savedDataAsString ? JSON.parse(savedDataAsString) : null;

    if (savedData) {
      if (type !== "all") {
        savedData[type] = value;
      } else {
        savedData["year"] = "";
        savedData["month"] = "";
        savedData["day"] = "";
      }
      localStorage.setItem("__date_converter__", JSON.stringify(savedData));
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-base font-semibold">{title}</h2>
        <button className="switch" type="button" onClick={handleClick}>
          Switch
        </button>
      </div>
      <div className="flex gap-2">
        <Dropdown
          selected={selectedYear}
          onSelect={handleYearSelect}
          options={dateType === "AD" ? YEAR_AD : YEAR_BS}
          placeholder={dateType === "AD" ? "Year" : "वर्ष"}
        />
        <Dropdown
          selected={selectedMonth}
          onSelect={handleMonthSelect}
          options={dateType == "AD" ? MONTH_NAME_AD : MONTH_NAME_BS}
          placeholder={dateType === "AD" ? "Month" : "महिना"}
        />
        <Dropdown
          selected={selectedDay}
          onSelect={handleDaySelect}
          options={dayList}
          placeholder={dateType === "AD" ? "Day" : "दिन"}
        />
      </div>

      <div className="flex items-center justify-center h-20">
        <span className="text-lg">{result}</span>
      </div>

      <div className="buttonWrapper">
        <button
          className="convert"
          type="button"
          onClick={convertToBS}
          disabled={!selectedYear && !selectedMonth && !selectedDay}
        >
          Convert
        </button>
        <button
          className="clear"
          type="button"
          onClick={clearResult}
          disabled={!selectedYear && !selectedMonth && !selectedDay}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Converter;
