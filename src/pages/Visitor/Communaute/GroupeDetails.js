import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Users, Mail, CheckCircle, XCircle } from "lucide-react"; // Importer les icônes de lucide-react

const GroupeDetails = () => {
  const { id } = useParams();

  const groupes = [
    {
      id: 1,
      titre: "Groupe d'étude en IA",
      description:
        "Un groupe pour discuter de l'intelligence artificielle et de ses applications.",
      membres: [
        { nom: "Alice", email: "alice@example.com" },
        { nom: "Bob", email: "bob@example.com" },
        { nom: "Charlie", email: "charlie@example.com" },
      ],
    },
    {
      id: 2,
      titre: "Groupe d'étude en Web Development",
      description:
        "Rejoignez ce groupe pour discuter de tout ce qui concerne le développement web.",
      membres: [
        { nom: "David", email: "david@example.com" },
        { nom: "Emma", email: "emma@example.com" },
      ],
    },
    {
      id: 3,
      titre: "Groupe d'étude en Data Science",
      description:
        "Un groupe pour échanger sur les techniques avancées en Data Science.",
      membres: [
        { nom: "Fay", email: "fay@example.com" },
        { nom: "George", email: "george@example.com" },
      ],
    },
  ];

  const groupe = groupes.find((g) => g.id === parseInt(id));

  const [formData, setFormData] = useState({ nom: "", email: "" });
  const [message, setMessage] = useState("");

  if (!groupe) {
    return <div>Groupe introuvable.</div>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nom && formData.email) {
      setMessage("Votre demande d'adhésion a été envoyée !");
      setFormData({ nom: "", email: "" });
    } else {
      setMessage("Veuillez remplir tous les champs.");
    }
  };

  return (
    <section className="mb-12 p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center">
        <Users className="mr-3" size={32} /> {groupe.titre}
      </h2>
      <p className="text-gray-600 mb-4">{groupe.description}</p>

      {/* Affichage des membres actifs */}
      <h3 className="text-2xl font-semibold mt-6 flex items-center">
        <Users className="mr-2" size={24} /> Membres actifs :
      </h3>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        {groupe.membres.map((membre, index) => (
          <li key={index} className="text-gray-600 flex items-center">
            <Users className="mr-2" size={18} /> {membre.nom} - {membre.email}
          </li>
        ))}
      </ul>

      {/* Formulaire de demande d'adhésion */}
      <h3 className="text-2xl font-semibold mt-6 flex items-center">
        <Mail className="mr-2" size={24} /> Demande d'adhésion :
      </h3>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div className="mb-4">
          <label htmlFor="nom" className="block text-gray-700">
            Nom :
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center space-x-2"
        >
          <CheckCircle size={20} />
          <span>Envoyer la demande</span>
        </button>
      </form>

      {/* Message de confirmation ou d'erreur */}
      {message && (
        <p
          className={`mt-4 text-gray-700 flex items-center ${
            message.includes("envoyée") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.includes("envoyée") ? (
            <CheckCircle className="mr-2" />
          ) : (
            <XCircle className="mr-2" />
          )}
          {message}
        </p>
      )}
    </section>
  );
};

export default GroupeDetails;
