import React, { useState } from "react";
import { format } from "date-fns";

function Projects() {
  // Exemple de données de projets avec des participants
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Développement d'une application mobile",
      description:
        "Créer une application mobile pour la gestion des tâches et des rappels.",
      startDate: new Date("2024-08-01T10:00:00"),
      status: "In Progress",
      participants: ["Emerusenge Channelle", "Jean Pierre", "Marie Claire"], // Liste des participants
      supported: false, // Indique si le projet est soutenu
    },
    {
      id: 2,
      title: "Refonte du site web d'une entreprise",
      description:
        "Mettre à jour le design et les fonctionnalités d'un site web pour une entreprise de commerce.",
      startDate: new Date("2024-09-15T09:00:00"),
      status: "Completed",
      participants: ["Aline Nkurunziza", "David Nyandwi"], // Liste des participants
      supported: false, // Indique si le projet est soutenu
    },
    {
      id: 3,
      title: "Système de gestion d'assurances",
      description:
        "Créer une plateforme de gestion d'assurances avec une interface utilisateur intuitive.",
      startDate: new Date("2024-07-20T08:00:00"),
      status: "In Progress",
      participants: ["Emerusenge Channelle", "Claude Ndikumana"], // Liste des participants
      supported: false, // Indique si le projet est soutenu
    },
    {
      id: 4,
      title: "Développement d'une API RESTful",
      description:
        "Construire une API RESTful pour gérer les utilisateurs, les rôles et les permissions.",
      startDate: new Date("2024-10-05T11:00:00"),
      status: "Pending",
      participants: ["Lucie Niyonkuru", "Jacques Habimana"], // Liste des participants
      supported: false, // Indique si le projet est soutenu
    },
  ]);

  const handleSupport = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? { ...project, supported: !project.supported }
          : project
      )
    );
  };

  const renderProject = (project) => {
    let statusColor = "";
    switch (project.status) {
      case "In Progress":
        statusColor = "bg-yellow-100 text-yellow-800";
        break;
      case "Completed":
        statusColor = "bg-green-100 text-green-800";
        break;
      case "Pending":
        statusColor = "bg-gray-100 text-gray-800";
        break;
      default:
        statusColor = "bg-gray-100 text-gray-800";
    }

    return (
      <div
        key={project.id}
        className={`p-4 mb-4 rounded-lg ${statusColor} shadow-md`}
      >
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-gray-700">{project.description}</p>
        <div className="mt-2">
          <span className="text-sm text-gray-500">
            Début: {format(project.startDate, "dd MMM yyyy HH:mm")}
          </span>
        </div>
        <div className="mt-2">
          <span
            className={`px-2 py-1 text-sm font-semibold rounded-full ${statusColor}`}
          >
            {project.status}
          </span>
        </div>

        {/* Affichage des participants */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-indigo-600">
            Participants
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            {project.participants.map((participant, index) => (
              <li key={index}>{participant}</li>
            ))}
          </ul>
        </div>

        {/* Bouton de soutien */}
        <div className="mt-4">
          <button
            onClick={() => handleSupport(project.id)}
            className={`px-4 py-2 text-white rounded-full ${
              project.supported ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            {project.supported ? "Soutenu" : "Soutenir ce projet"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Projets
      </h1>
      <div>
        {projects.length === 0 ? (
          <p className="text-center text-gray-500">Aucun projet en cours.</p>
        ) : (
          projects.map(renderProject)
        )}
      </div>
    </div>
  );
}

export default Projects;
