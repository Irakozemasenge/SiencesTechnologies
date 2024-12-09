import React from "react";
import { Link } from "react-router-dom"; // Importation de Link

const GroupesEtude = () => {
  // Données fictives pour les groupes d'étude
  const groupes = [
    {
      id: 1,
      titre: "Groupe d'étude en IA",
      description:
        "Un groupe pour discuter de l'intelligence artificielle et de ses applications.",
    },
    {
      id: 2,
      titre: "Groupe d'étude en Web Development",
      description:
        "Rejoignez ce groupe pour discuter de tout ce qui concerne le développement web.",
    },
    {
      id: 3,
      titre: "Groupe d'étude en Data Science",
      description:
        "Un groupe pour échanger sur les techniques avancées en Data Science.",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Groupes d'étude
      </h2>
      <div className="space-y-4">
        {groupes.map((groupe) => (
          <div key={groupe.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{groupe.titre}</h3>
            <p className="text-gray-600">{groupe.description}</p>
            {/* Lien pour rejoindre le groupe, redirige vers une page de détails du groupe */}
            <Link
              to={`/communaute/groupes/${groupe.id}`}
              className="mt-2 text-blue-600"
            >
              Rejoindre le groupe
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupesEtude;
