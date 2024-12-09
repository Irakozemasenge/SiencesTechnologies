import React, { useState } from "react";
import { format } from "date-fns";

function Assignments() {
  // Exemple de données de devoirs
  const [assignments] = useState([
    {
      id: 1,
      title: "Devoir sur React",
      description: "Créer une application de gestion de tâches avec React.",
      dueDate: new Date("2024-12-10T23:59:59"),
      status: "Pending", // 'Pending', 'Completed', 'Overdue'
    },
    {
      id: 2,
      title: "Projet Node.js",
      description: "Développer une API REST avec Node.js et Express.",
      dueDate: new Date("2024-12-15T23:59:59"),
      status: "Completed",
    },
    {
      id: 3,
      title: "Examen de Mathématiques",
      description: "Révision pour l'examen de mathématiques, chapitre 5.",
      dueDate: new Date("2024-12-20T23:59:59"),
      status: "Pending",
    },
    {
      id: 4,
      title: "Présentation sur les technologies Web",
      description:
        "Préparer une présentation sur les dernières tendances en développement Web.",
      dueDate: new Date("2024-12-25T23:59:59"),
      status: "Pending",
    },
    {
      id: 5,
      title: "Analyse de Code",
      description: "Analyser le code d'un projet et identifier les erreurs.",
      dueDate: new Date("2024-12-05T23:59:59"),
      status: "Overdue",
    },
  ]);

  const renderAssignment = (assignment) => {
    let statusColor = "";
    switch (assignment.status) {
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
        key={assignment.id}
        className={`p-4 mb-4 rounded-lg ${statusColor} shadow-md`}
      >
        <h2 className="text-xl font-semibold">{assignment.title}</h2>
        <p className="text-gray-700">{assignment.description}</p>
        <div className="mt-2">
          <span className="text-sm text-gray-500">
            Échéance: {format(assignment.dueDate, "dd MMM yyyy HH:mm")}
          </span>
        </div>
        <div className="mt-2">
          <span
            className={`px-2 py-1 text-sm font-semibold rounded-full ${statusColor}`}
          >
            {assignment.status}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Devoirs
      </h1>
      <div>
        {assignments.length === 0 ? (
          <p className="text-center text-gray-500">
            Aucun devoir pour le moment.
          </p>
        ) : (
          assignments.map(renderAssignment)
        )}
      </div>
    </div>
  );
}

export default Assignments;
