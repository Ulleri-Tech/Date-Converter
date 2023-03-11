import React from "react";
import { dateTodayAD, dateTodayBS } from "date-convert-ad-bs";

export const TodayDate = () => {
  return (
    <div className="date-today">
      <h2 className="font-semibold">Today's Date</h2>
      <span id="today-date-BS">{dateTodayBS()}</span>
      <span id="today-date-AD">{dateTodayAD()}</span>
    </div>
  );
};
