import "./popup.css";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { TodayDate } from "../components/TodayDate";
import Converter from "../components/Converter";

const Popup = () => {
  const [convertTo, setConvertTo] = useState<string>("BS");
  const [title, setTitle] = useState<string>("Convert (A.D) To (B.S)");

  useEffect(() => {
    const savedDataAsString = localStorage.getItem("__date_converter__");
    const savedData = savedDataAsString ? JSON.parse(savedDataAsString) : null;

    if (!savedData) {
      const data = { year: "", month: "", day: "", convertTo: convertTo };
      localStorage.setItem("__date_converter__", JSON.stringify(data));
    }

    if (savedData && savedData["convertTo"]) {
      setConvertTo(savedData["convertTo"]);
      setTitle(
        savedData["convertTo"] == "BS"
          ? "Convert (A.D) To (B.S)"
          : "Convert (B.S) To (A.D)"
      );
    }
  }, []);

  const toggleConvertTo = () => {
    const newValue = convertTo == "BS" ? "AD" : "BS";
    setTitle(
      newValue == "BS" ? "Convert (A.D) To (B.S)" : "Convert (B.S) To (A.D)"
    );
    setConvertTo(newValue);
    // updating localstorage as well
    const savedDataAsString = localStorage.getItem("__date_converter__");
    const savedData = savedDataAsString ? JSON.parse(savedDataAsString) : null;

    if (savedData) {
      savedData["convertTo"] = newValue;
      localStorage.setItem("__date_converter__", JSON.stringify(savedData));
    }
  };
  return (
    <div className="w-[320px]">
      <Header />
      <div className="flex flex-col justify-center w-full gap-4 px-2 py-4 mx-auto bg-gray-100">
        <TodayDate />

        <Converter
          title={title}
          dateType={convertTo == "AD" ? "BS" : "AD"}
          onClick={toggleConvertTo}
        />
      </div>
    </div>
  );
};

export default Popup;

// font size
// disabled
// day fix
//
