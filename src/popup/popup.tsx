import React, { useState } from "react";
import "./popup.css";
import { dateTodayAD, dateTodayBS, ADTOBS } from "date-convert-ad-bs";
import { Month_name } from "../utils/constant";
import { formatedBSDate } from "../utils/formater";

const Day_List = Array.from({ length: 31 }, (_, index) => String(index + 1));

const Popup = () => {
  const [result, setResult] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedDay, setselectedDay] = useState<string>("");
  const [isOpenYear, setIsOpenYear] = useState(false);
  const [isOpenMonth, setIsOpenMonth] = useState(false);
  const [isOpenDay, setIsOpenDay] = useState(false);
  const toggleDropdownYear = () => {
    setIsOpenYear(!isOpenYear);
    setIsOpenMonth(false);
    setIsOpenDay(false);
  };
  const toggleDropdownMonth = () => {
    setIsOpenMonth(!isOpenMonth);
    setIsOpenYear(false);
    setIsOpenDay(false);
  };
  const toggleDropdownDay = () => {
    setIsOpenDay(!isOpenDay);
    setIsOpenMonth(false);
    setIsOpenYear(false);
  };

  const convertToBS = () => {
    if (!selectedYear || !selectedMonth || !selectedDay) return;
    const reponseDate = formatedBSDate(ADTOBS(+selectedYear, +selectedMonth, +selectedDay), new Date(+selectedYear, +selectedMonth, +selectedDay))
    setResult(reponseDate);
  };
  const clearResult = () => {
    setResult("");
  };
  return (
    <div className="container">
      <div className="title">B.S Date Converter</div>

      <div className="flex justify-center w-full mx-auto">
        <div className="contentWrapper">
          <div className="content active" id="main-content">
            <div className="date-today">
              <span id="today-date-BS">{dateTodayBS()}</span>
              <span id="today-date-AD">{dateTodayAD()}</span>
            </div>
            <div>
              <label htmlFor="input-date">
                <span id="label-header" className="text-sm">{" AD TO BS "}</span>
                
                {/* <button className="switch">
              <span > Switch</span>
            </button>  */}
              </label>

              <div className="flex gap-2">
                <div className="relative">
                  <button
                    id="year-button"
                    data-dropdown-toggle="dropdown"
                    className="relative z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center 0 rounded-l-lg hover:bg-gray-200 focus:ring-1 focus:outline-none   bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-24 p-2.5  "
                    type="button"
                    onClick={toggleDropdownYear}
                  >
                    {selectedYear ? selectedYear : "Year"}
                    <svg
                      className="absolute w-4 h-4 transform -translate-y-1/2 right-1 top-1/2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M7 10l5 5 5-5z" />
                      <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                  </button>
                  <div
                    id="dropdown-year"
                    className={`z-10 ${
                      isOpenYear ? "" : "hidden"
                    } absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-24 mt-2   h-56 overflow-y-scroll`}
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 "
                      aria-labelledby="dropdown-button"
                    >
                      {Array.from({ length: 100 }, (_, i) => 1943 + i).map(
                        (year) => (
                          <li key={year}>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 focus:outline-none "
                              onClick={() => {
                                setSelectedYear(String(year));
                                setIsOpenYear(false);
                              }}
                            >
                              <div className="inline-flex items-center">
                                {year}
                              </div>
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <button
                    id="month-button"
                    data-dropdown-toggle="dropdown"
                    className="relative z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center 0 rounded-l-lg hover:bg-gray-200 focus:ring-1 focus:outline-none   bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-24 p-2.5 "
                    type="button"
                    onClick={toggleDropdownMonth}
                  >
                    {selectedMonth ? Month_name[+selectedMonth] : "Month"}
                    <svg
                      className="absolute w-4 h-4 transform -translate-y-1/2 right-1 top-1/2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M7 10l5 5 5-5z" />
                      <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                  </button>
                  <div
                    id="dropdown-month"
                    className={`z-10 ${
                      isOpenMonth ? "" : "hidden"
                    } absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-24 mt-2   h-56 overflow-y-scroll`}
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 "
                      aria-labelledby="dropdown-button"
                    >
                      {Month_name.map((month, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 focus:outline-none "
                            onClick={() => {
                              setSelectedMonth(String(index));
                              setIsOpenMonth(false);
                            }}
                          >
                            <div className="inline-flex items-center">
                              {month}
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <button
                    id="day-button"
                    data-dropdown-toggle="dropdown"
                    className="relative z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center 0 rounded-l-lg hover:bg-gray-200 focus:ring-1 focus:outline-none  bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-24 p-2.5 "
                    type="button"
                    onClick={toggleDropdownDay}
                  >
                    {selectedDay ? selectedDay : "Day"}
                    <svg
                      className="absolute w-4 h-4 transform -translate-y-1/2 right-1 top-1/2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M7 10l5 5 5-5z" />
                      <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                  </button>
                  <div
                    id="dropdown-day"
                    className={`z-10 ${
                      isOpenDay ? "" : "hidden"
                    } absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-24 mt-2  h-56 overflow-y-scroll`}
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 "
                      aria-labelledby="dropdown-button"
                    >
                      {Day_List.map((day) => (
                        <li key={day}>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 focus:outline-none "
                            onClick={() => {
                              setselectedDay(String(day));
                              setIsOpenDay(false);
                            }}
                          >
                            <div className="inline-flex items-center">
                              {day}
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="result">
              RESULT <span id="result-date">{result}</span>
              <span className="loading"></span>
            </div>

            <div className="buttonWrapper">
              <button className="convert" onClick={convertToBS}>
                Convert
              </button>
              <button className="clear" onClick={clearResult}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
