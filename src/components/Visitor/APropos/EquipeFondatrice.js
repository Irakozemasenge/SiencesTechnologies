import React from "react";
import { Users, User, User2, UserCog, Users2Icon } from "lucide-react"; // Import des icônes

// Données pour l'équipe fondatrice avec des rôles et des icônes
const equipe = [
  {
    id: 1,
    nom: "Jean BIKORIMANA",
    role: "CEO",
    icon: <User size={48} className="text-indigo-600" />,
    description:
      "Jean est le fondateur et CEO de la plateforme. Il est passionné par la technologie et l'innovation.",
  },
  {
    id: 2,
    nom: "Marie MANIRAKIZA",
    role: "Responsable Marketing",
    icon: <UserCog size={48} className="text-green-600" />,
    description:
      "Marie dirige les stratégies marketing et la communication de notre plateforme.",
  },
  {
    id: 3,
    nom: "Paul KAGABO",
    role: "Responsable Technique",
    icon: <User2 size={48} className="text-blue-600" />,
    description:
      "Paul gère l'architecture technique de la plateforme et veille à sa scalabilité.",
  },
  {
    id: 4,
    nom: "Sophie KAZOVIYO",
    role: "Directrice des Projets",
    icon: <Users2Icon size={48} className="text-purple-600" />,
    description:
      "Sophie supervise le développement des projets et la gestion des équipes.",
  },
];

const EquipeFondatrice = () => (
  <section className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-bold flex items-center gap-2">
      <Users size={24} className="text-indigo-600" />
      Équipe Fondatrice
    </h2>
    <p className="mt-4 text-lg">
      Notre équipe est composée d'experts passionnés dans les domaines de la
      technologie, du marketing, et de l'innovation. Chacun d'entre eux apporte
      une expérience unique qui contribue à l'évolution de la plateforme.
    </p>

    {/* Affichage de l'équipe fondatrice */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {equipe.map((membre) => (
        <div
          key={membre.id}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
        >
          <div className="mb-4">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-50 p-4 rounded-full">{membre.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {membre.nom}
            </h3>
            <p className="text-md text-gray-600">{membre.role}</p>
          </div>
          <p className="text-gray-500">{membre.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EquipeFondatrice;
