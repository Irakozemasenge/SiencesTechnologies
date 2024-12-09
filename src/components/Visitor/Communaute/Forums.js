import React from "react";
import { Link } from "react-router-dom"; // Importer Link pour la navigation

const Forums = () => {
  // Données des forums avec un ID unique pour chaque forum
  const forums = [
    {
      id: 1,
      titre: "Technologie & Innovation",
      description:
        "Discussions sur les dernières innovations en technologie, IA, et plus.",
    },
    {
      id: 2,
      titre: "Science et Recherche",
      description:
        "Échangez sur les dernières avancées scientifiques et recherches en cours.",
    },
    {
      id: 3,
      titre: "Développement Durable",
      description:
        "Explorez les sujets liés à la durabilité, l'écologie, et les innovations vertes.",
    },
    // Ajouter d'autres forums ici si nécessaire
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Forums de discussion
      </h2>
      <div className="space-y-4">
        {forums.map((forum) => (
          <div key={forum.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{forum.titre}</h3>
            <p className="text-gray-600">{forum.description}</p>
            {/* Utilisation de Link pour la navigation avec l'ID du forum */}
            <Link
              to={`/communaute/forum/${forum.id}`}
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              Rejoindre le forum
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forums;
