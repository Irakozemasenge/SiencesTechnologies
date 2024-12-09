import React from "react";

const HeroProject = () => (
  <div className="relative bg-gray-50 overflow-hidden py-16 sm:py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
        <span className="block text-indigo-600">Découvrez nos projets</span>
      </h1>
      <p className="mt-6 text-lg text-gray-500">
        Explorez des projets innovants qui cherchent des financements pour leur
        réalisation. Suivez leur progression et découvrez des défis
        technologiques passionnants.
      </p>
      <div className="mt-8">
        <a
          href="#projets"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Voir les projets en cours
        </a>
      </div>
    </div>
  </div>
);

export default HeroProject;
