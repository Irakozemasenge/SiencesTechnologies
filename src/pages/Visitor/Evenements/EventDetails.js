// src/pages/Visitor/EventDetail.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Exemple de données fictives pour les événements
const evenements = [
  {
    id: 1,
    titre: "Conférence sur l'IA",
    date: "2024-12-01",
    description:
      "Rejoignez-nous pour une conférence sur l'intelligence artificielle.",
    details:
      "Plus de détails sur l'IA et ses applications dans divers domaines.",
  },
  {
    id: 2,
    titre: "Atelier de développement web",
    date: "2024-12-05",
    description:
      "Un atelier pratique sur les dernières tendances du développement web.",
    details:
      "Apprenez à créer des sites web modernes et responsives avec les dernières technologies.",
  },
  {
    id: 3,
    titre: "Webinaire Data Science",
    date: "2024-12-10",
    description:
      "Participez à notre webinaire sur les applications de la Data Science.",
    details:
      "Explorez les dernières avancées en Data Science et leur utilisation dans les entreprises.",
  },
];

const EventDetail = () => {
  const { id } = useParams(); // Récupérer l'ID de l'événement depuis l'URL
  const evenement = evenements.find((e) => e.id === parseInt(id));

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    participation: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre participation a été enregistrée !");
    setFormData({ nom: "", email: "", participation: false }); // Réinitialisation du formulaire
  };

  if (!evenement) {
    return <div>Événement introuvable.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-gray-800">
        {evenement.titre}
      </h2>
      <p className="text-gray-600 mt-2">Date : {evenement.date}</p>
      <p className="text-gray-600 mt-4">{evenement.details}</p>

      {/* Formulaire de participation */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Formulaire de participation
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nom" className="block text-lg text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="inline-flex items-center mt-4">
              <input
                type="checkbox"
                name="participation"
                checked={formData.participation}
                onChange={(e) =>
                  setFormData({ ...formData, participation: e.target.checked })
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-lg">
                Je souhaite participer à cet événement
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg hover:bg-blue-700"
            disabled={!formData.participation} // Désactive le bouton si participation non sélectionnée
          >
            Confirmer ma participation
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetail;
