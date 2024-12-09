import React, { useState } from "react";
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  isToday,
} from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react"; // Importer les icônes

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Calcul des jours du mois en cours
  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({
    start: startOfCurrentMonth,
    end: endOfCurrentMonth,
  });

  // Fonction pour naviguer entre les mois
  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.setMonth(prev.getMonth() + 1)));
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.setMonth(prev.getMonth() - 1)));
  };

  // Formater la date pour afficher le mois et l'année
  const monthYear = format(currentDate, "MMMM yyyy");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
         Calendrier
      </h1>
      {/* En-tête du calendrier */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-3 py-1 rounded-lg bg-blue-500 text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold text-gray-700">{monthYear}</h2>
        <button
          onClick={handleNextMonth}
          className="px-3 py-1 rounded-lg bg-blue-500 text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Affichage des jours de la semaine */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-600 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {/* Affichage des jours du mois */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysInMonth.map((date, index) => (
          <div
            key={index}
            className={`px-3 py-2 rounded-full ${
              isToday(date) ? "bg-blue-500 text-white" : "text-gray-700"
            } ${
              index % 7 === 0 ? "text-red-500" : ""
            } hover:bg-gray-200 cursor-pointer`}
          >
            {format(date, "d")}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
