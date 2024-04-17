import React from "react";
import { useState } from "react";

function Schedule({ data }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [week, setWeek] = useState(getISOWeek(new Date()));

  function getISOWeek(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const oneJanDay = oneJan.getDay();
    let weekNum = Math.ceil(((date - oneJan) / 86400000 + oneJanDay + 1) / 7);
    if (oneJanDay === 0) {
      weekNum -= 1;
    }
    return weekNum;
  }

  function getWeekStartDate(year, week) {
    const janFourth = new Date(year, 0, 4);
    const weekStart = new Date(janFourth.getTime() + (week - 1) * 7 * 86400000);
    return weekStart;
  }

  function toISODate(date) {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${mm}-${dd}`;
  }

  function getDayName(dayIndex) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayIndex];
  }

  function handleNextWeek() {
    setWeek(week + 1);
  }

  function handlePreviousWeek() {
    setWeek(week - 1);
  }

  // Mảng chứa các slot từ slot 1 đến slot 8
  const slots = Array.from({ length: 8 }, (_, index) => `Slot ${index + 1}`);

  return (
    <div className="schedule">
      <div className="flex justify-between mb-4">
        <div>
          <span className="mr-2">Year:</span>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div>
          <span className="mr-2">Week:</span>
          <span>{week}</span>
          <button
            onClick={handlePreviousWeek}
            className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
          >
            Previous Week
          </button>
          <button
            onClick={handleNextWeek}
            className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
          >
            Next Week
          </button>
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Slot</th>
            {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
              <th key={dayIndex} className="px-4 py-2">
                {getDayName(dayIndex)}
                <br />
                {toISODate(
                  new Date(
                    getWeekStartDate(year, week).getTime() + dayIndex * 86400000
                  )
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map((slot, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{slot}</td>
              {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
                <td key={dayIndex} className="border px-4 py-2">
                  {data &&
                    data.map((slotData) => (
                      <div key={slotData.id}>
                        {slotData.day === dayIndex && (
                          <div>
                            <p>Mã môn: {slotData.courseCode}</p>
                            <p>Thời gian học: {slotData.time}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
