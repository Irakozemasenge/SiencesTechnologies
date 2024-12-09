import React from "react";
const HelloAbout = () => {
  return (
    <div className="relative bg-white overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          <span className="block">L'Histoire de notre plateforme</span>
          <span className="block text-indigo-600">Science et Technologie</span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 ">
          Fondée en 2020, notre plateforme a été créée pour combler un besoin
          urgent d'un accès facile et flexible à l'apprentissage des sciences et
          de la technologie. Depuis ses débuts, nous avons pour mission de
          rendre l'éducation scientifique accessible à tous, sans contrainte
          géographique ni de temps. Grâce à des cours interactifs, des projets
          concrets, et un soutien constant de la communauté, notre plateforme
          est devenue un leader dans l'éducation en ligne, favorisant
          l'inclusion et l'innovation.
        </p>
      </div>
    </div>
  );
};

export default HelloAbout;
