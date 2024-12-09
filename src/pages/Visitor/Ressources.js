import React from "react";
import HeroResource from "../../components/Visitor/Ressources/HeroResource";
const Ressources = () => {
  const bibliotheque = [
    { id: 1, titre: "Ebook : Introduction à React", lien: "#" },
    { id: 2, titre: "Article : Les bases du Machine Learning", lien: "#" },
    {
      id: 3,
      titre: "Base de données : Ressources gratuites en développement web",
      lien: "#",
    },
  ];

  const videos = [
    { id: 1, titre: "Comprendre les promesses en JavaScript", lien: "#" },
    { id: 2, titre: "Tutoriel : Mise en place d'une API RESTful", lien: "#" },
    { id: 3, titre: "Concepts avancés de React : Hooks et Context", lien: "#" },
  ];

  const outils = [
    {
      id: 1,
      nom: "Visual Studio Code",
      description: "Éditeur de code gratuit et puissant",
      lien: "https://code.visualstudio.com/",
    },
    {
      id: 2,
      nom: "Figma",
      description: "Outil de design collaboratif",
      lien: "https://www.figma.com/",
    },
    {
      id: 3,
      nom: "Postman",
      description: "Outil pour tester les API",
      lien: "https://www.postman.com/",
    },
  ];

  return (
    <div>
      {/* Section Hero */}
      <HeroResource />

      {/* Bibliothèque numérique */}
      <section className="p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Bibliothèque numérique
        </h2>
        <ul className="space-y-4">
          {bibliotheque.map((item) => (
            <li key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <a href={item.lien} className="text-blue-600 hover:underline">
                {item.titre}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Vidéos explicatives */}
      <section className="p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Vidéos explicatives
        </h2>
        <ul className="space-y-4">
          {videos.map((video) => (
            <li key={video.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <a href={video.lien} className="text-blue-600 hover:underline">
                {video.titre}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Outils et logiciels */}
      <section className="p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Liens vers des outils éducatifs
        </h2>
        <ul className="space-y-4">
          {outils.map((outil) => (
            <li key={outil.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                {outil.nom}
              </h3>
              <p className="text-gray-600">{outil.description}</p>
              <a
                href={outil.lien}
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Visiter
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Ressources;
