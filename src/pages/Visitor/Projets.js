import React from "react"; // Assurez-vous que ce chemin est correct
import { Link } from "react-router-dom"; // Si vous avez des liens pour chaque projet
import HeroProject from "../../components/Visitor/Projets/HeroProject";

const Projets = () => {
  // Données fictives pour les projets
  const projets = [
    {
      id: 1,
      titre: "Application Mobile de Gestion de Projets",
      description:
        "Un projet mobile pour gérer les tâches et suivre l'avancement des projets.",
    },
    {
      id: 2,
      titre: "Site Web E-Commerce",
      description:
        "Développement d'une plateforme e-commerce pour la vente de produits en ligne.",
    },
    {
      id: 3,
      titre: "Système de Gestion des Inventaires",
      description:
        "Un système pour suivre les stocks et les mouvements de produits en temps réel.",
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <HeroProject />

      {/* Espaces pour partager des projets */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Partagez vos projets
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Que ce soit pour des projets personnels ou collaboratifs, cette
          section vous permet de partager vos idées et de recevoir des retours.
        </p>
      </section>

      {/* Défis technologiques */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Défis technologiques
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Relevez des défis techniques pour améliorer vos compétences. Ces défis
          sont conçus pour vous aider à sortir de votre zone de confort et à
          vous pousser à innover.
        </p>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">
              Défi 1: Créer un site web responsive
            </h4>
            <p className="text-gray-600 mt-4">
              Construisez un site web qui s'adapte à différentes tailles
              d'écran, en utilisant HTML, CSS et JavaScript.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">
              Défi 2: Développer une application mobile avec React Native
            </h4>
            <p className="text-gray-600 mt-4">
              Créez une application mobile avec React Native pour un projet
              pratique.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">
              Défi 3: Mettre en place une API RESTful avec Node.js
            </h4>
            <p className="text-gray-600 mt-4">
              Développez une API RESTful en utilisant Node.js et Express, avec
              des fonctionnalités CRUD.
            </p>
          </div>
        </div>
      </section>

      {/* Exemples de projets réussis */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Exemples de projets réussis
        </h2>
        <div className="space-y-8">
          {projets.map((projet) => (
            <div
              key={projet.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold">{projet.titre}</h3>
              <p className="text-gray-600 mt-4">{projet.description}</p>
              <Link
                to={`/projets/${projet.id}`}
                className="text-blue-600 mt-4 inline-block"
              >
                Voir le projet
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Guides pratiques */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Guides pratiques
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Consultez nos guides pratiques pour vous aider à réussir vos projets
          et à résoudre les défis techniques.
        </p>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">
              Guide 1: Comment créer une API RESTful avec Node.js
            </h4>
            <p className="text-gray-600 mt-4">
              Apprenez à créer une API RESTful en suivant des étapes simples et
              claires.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">
              Guide 2: Développement d'une application React
            </h4>
            <p className="text-gray-600 mt-4">
              Découvrez comment démarrer avec React et construire une
              application performante.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">
              Guide 3: Introduction à la création d'applications mobiles
            </h4>
            <p className="text-gray-600 mt-4">
              Un guide pour vous aider à créer vos premières applications
              mobiles avec React Native.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projets;
