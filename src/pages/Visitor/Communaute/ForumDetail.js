import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ForumDetail = () => {
  const { forumId } = useParams(); // Récupère l'ID du forum depuis l'URL

  // Données fictives pour le forum
  const [forum, setForum] = useState({
    id: forumId,
    titre: "Technologie & Innovation",
    description:
      "Discussions sur les dernières innovations en technologie, IA, et plus.",
    messages: [
      { auteur: "Alice", contenu: "J'adore l'IA, qu'en pensez-vous ?" },
      {
        auteur: "Bob",
        contenu: "L'IA change tout dans notre manière de travailler !",
      },
    ],
  });

  // L'état pour gérer le nouveau message de l'utilisateur
  const [nouveauMessage, setNouveauMessage] = useState("");

  // Fonction pour gérer l'envoi d'un nouveau message
  const handleEnvoyerMessage = (e) => {
    e.preventDefault();
    if (nouveauMessage.trim() !== "") {
      const message = {
        auteur: "Vous", // Vous pouvez remplacer par un vrai nom d'utilisateur
        contenu: nouveauMessage,
      };

      // Ajoute le nouveau message à la liste existante
      setForum((prevForum) => ({
        ...prevForum,
        messages: [...prevForum.messages, message],
      }));

      // Réinitialiser le champ de saisie
      setNouveauMessage("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">{forum.titre}</h1>
      <p className="text-lg text-gray-600 mb-4">{forum.description}</p>

      {/* Affichage des messages existants */}
      <div className="space-y-4">
        {forum.messages.map((message, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="font-semibold">{message.auteur}</p>
            <p className="text-gray-600">{message.contenu}</p>
          </div>
        ))}
      </div>

      {/* Formulaire pour envoyer un nouveau message */}
      <form onSubmit={handleEnvoyerMessage} className="mt-8">
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold">
            Répondez au forum
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Écrivez votre réponse ici..."
            value={nouveauMessage}
            onChange={(e) => setNouveauMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ForumDetail;
