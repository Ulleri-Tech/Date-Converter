import "./popup.css";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { TodayDate } from "../components/TodayDate";
import Converter from "../components/Converter";

const Popup = () => {
  const [convertTo, setConvertTo] = useState<string>("");
  const [title, setTitle] = useState<string>("Convert (A.D) To (B.S)");

  useEffect(() => {
    const savedConvertTo = localStorage.getItem("convertTo") || "BS";

    if (savedConvertTo) {
      setConvertTo(savedConvertTo);
      setTitle(
        savedConvertTo == "BS"
          ? "Convert (A.D) To (B.S)"
          : "Convert (B.S) To (A.D)"
      );
    }
  }, []);

  const toggleConvertTo = () => {
    if (convertTo == "BS") {
      const value = "AD";
      setConvertTo(value);
      localStorage.setItem("convertTo", value);
      setTitle("Convert (B.S) To (A.D)");
    } else {
      const value = "BS";
      setConvertTo(value);
      localStorage.setItem("convertTo", value);
      setTitle("Convert (A.D) To (B.S)");
    }
  };
  return (
    <div className="w-[320px]">
      <Header />
      <div className="flex flex-col justify-center w-full gap-4 px-2 py-4 mx-auto bg-gray-100">
        <TodayDate />
        <div className="flex items-center gap-4">
          <h2 className="text-base font-semibold">{title}</h2>
          <button className="switch" type="button" onClick={toggleConvertTo}>
            Switch
          </button>
        </div>

        <Converter dateType={convertTo == "AD" ? "BS" : "AD"} />
      </div>
    </div>
  );
};

export default Popup;
