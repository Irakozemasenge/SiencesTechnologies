import React, { useState } from "react";
import { format } from "date-fns";

function Exams() {
  // Exemple de données d'examens
  const [exams] = useState([
    {
      id: 1,
      title: "Examen de Mathématiques",
      description: "Réviser les chapitres 1 à 4 pour l'examen.",
      dueDate: new Date("2024-12-10T09:00:00"),
      status: "Pending", // 'Pending', 'Completed', 'Overdue'
    },
    {
      id: 2,
      title: "Examen d'Informatique",
      description: "Préparer le projet de programmation en C.",
      dueDate: new Date("2024-12-15T10:00:00"),
      status: "Completed",
    },
    {
      id: 3,
      title: "Examen de Physique",
      description: "Révision des lois de la thermodynamique.",
      dueDate: new Date("2024-12-12T14:00:00"),
      status: "Pending",
    },
    {
      id: 4,
      title: "Examen de Chimie",
      description: "Comprendre les réactions acido-basiques.",
      dueDate: new Date("2024-12-20T08:00:00"),
      status: "Pending",
    },
    {
      id: 5,
      title: "Examen d'Anglais",
      description: "Préparation à la dissertation sur les arts modernes.",
      dueDate: new Date("2024-12-05T11:00:00"),
      status: "Overdue",
    },
  ]);

  const renderExam = (exam) => {
    let statusColor = "";
    switch (exam.status) {
      case "Pending":
        statusColor = "bg-yellow-100 text-yellow-800";
        break;
      case "Completed":
        statusColor = "bg-green-100 text-green-800";
        break;
      case "Overdue":
        statusColor = "bg-red-100 text-red-800";
        break;
      default:
        statusColor = "bg-gray-100 text-gray-800";
    }

    return (
      <div
        key={exam.id}
        className={`p-4 mb-4 rounded-lg ${statusColor} shadow-md`}
      >
        <h2 className="text-xl font-semibold">{exam.title}</h2>
        <p className="text-gray-700">{exam.description}</p>
        <div className="mt-2">
          <span className="text-sm text-gray-500">
            Échéance: {format(exam.dueDate, "dd MMM yyyy HH:mm")}
          </span>
        </div>
        <div className="mt-2">
          <span
            className={`px-2 py-1 text-sm font-semibold rounded-full ${statusColor}`}
          >
            {exam.status}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Examens
      </h1>
      <div>
        {exams.length === 0 ? (
          <p className="text-center text-gray-500">
            Aucun examen pour le moment.
          </p>
        ) : (
          exams.map(renderExam)
        )}
      </div>
    </div>
  );
}

export default Exams;
