import React from "react";
import {
  Flag,
  Target,
  Users,
  Rocket,
  Award,
  Heart,
  Lightbulb,
  Globe,
  Search,
  Shield,
} from "lucide-react"; // Import des icônes

// Données pour les missions et visions avec icônes et couleurs
const missions = [
  {
    title: "Connecter les utilisateurs à des services innovants.",
    icon: <Target size={24} className="text-red-600" />,
    color: "text-red-600",
  },
  {
    title: "Offrir une expérience personnalisée et accessible.",
    icon: <Users size={24} className="text-blue-600" />,
    color: "text-blue-600",
  },
  {
    title:
      "Promouvoir l'inclusion et l'innovation à travers des solutions technologiques avancées.",
    icon: <Rocket size={24} className="text-green-600" />,
    color: "text-green-600",
  },
  {
    title: "Fournir un accès sans restriction à l'apprentissage en ligne.",
    icon: <Award size={24} className="text-yellow-600" />,
    color: "text-yellow-600",
  },
  {
    title: "Améliorer constamment la qualité et la pertinence de nos contenus.",
    icon: <Heart size={24} className="text-pink-600" />,
    color: "text-pink-600",
  },
];

const visions = [
  {
    title: "Devenir le leader dans l'éducation en ligne.",
    icon: <Lightbulb size={24} className="text-purple-600" />,
    color: "text-purple-600",
  },
  {
    title: "Offrir un environnement inclusif pour l'apprentissage.",
    icon: <Globe size={24} className="text-orange-600" />,
    color: "text-orange-600",
  },
  {
    title: "Favoriser la collaboration pour résoudre les défis mondiaux.",
    icon: <Search size={24} className="text-teal-600" />,
    color: "text-teal-600",
  },
  {
    title: "Innover dans les méthodes d'enseignement en ligne.",
    icon: <Shield size={24} className="text-indigo-600" />,
    color: "text-indigo-600",
  },
  {
    title: "Promouvoir la diversité et l'inclusion dans l'éducation.",
    icon: <Target size={24} className="text-yellow-600" />,
    color: "text-yellow-600",
  },
  {
    title: "Équiper les apprenants avec des compétences pratiques.",
    icon: <Rocket size={24} className="text-green-600" />,
    color: "text-green-600",
  },
  {
    title: "Créer un impact durable dans les communautés mondiales.",
    icon: <Award size={24} className="text-red-600" />,
    color: "text-red-600",
  },
];

const MissionVision = () => (
  <section className="bg-gray-50 p-8 rounded-lg shadow-md mb-8 ">
    <h2 className="text-2xl font-bold flex items-center gap-2">
      <Flag size={24} className="text-indigo-800" />
      Missions et Visions
    </h2>

    <div className="mt-6">
      <h3 className="text-xl font-semibold text-indigo-600">Missions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-l-indigo-600"
          >
            <div className="flex items-center gap-4">
              <span className={`text-2xl ${mission.color}`}>
                {mission.icon}
              </span>
              <p className="text-gray-700">{mission.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-xl font-semibold text-green-500">Visions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {visions.map((vision, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-l-green-500"
          >
            <div className="flex items-center gap-4">
              <span className={`text-2xl ${vision.color}`}>{vision.icon}</span>
              <p className="text-gray-700">{vision.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionVision;
