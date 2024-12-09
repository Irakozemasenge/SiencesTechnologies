import React, { useState } from "react";
import { Phone, MessageCircle } from "lucide-react"; // Import des icônes

const ContactFAQ = () => {
  // Gestion de l'état pour les réponses FAQ
  const [faqOpen, setFaqOpen] = useState(null);

  // Questions et réponses FAQ
  const faqs = [
    {
      question: "Comment créer un compte ?",
      answer:
        "Pour créer un compte, cliquez sur 'S'inscrire' dans le menu et suivez les étapes.",
    },
    {
      question: "Quels services sont disponibles ?",
      answer:
        "Nous offrons une variété de services dans les domaines de l'éducation, de la technologie, et du marketing.",
    },
    {
      question: "Comment faire une demande ?",
      answer:
        "Les demandes peuvent être soumises via le formulaire dédié sur notre plateforme. Nous vous répondrons dans les plus brefs délais.",
    },
    {
      question: "Quelles sont vos heures d'ouverture ?",
      answer: "Nous sommes disponibles du lundi au vendredi, de 9h à 18h.",
    },
    {
      question: "Offrez-vous un support après-vente ?",
      answer:
        "Oui, nous offrons un support après-vente pour toutes les questions liées à nos services.",
    },
  ];

  // Fonction pour basculer l'affichage de la réponse à une question
  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
      {/* Titre de la section */}
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <Phone size={24} className="text-indigo-600" />
        Contact & FAQ
      </h2>

      {/* Section Contact */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
          <MessageCircle size={20} className="text-indigo-600" />
          Nous contacter
        </h3>
        <p className="mt-2 text-gray-700">
          Pour toute question, n'hésitez pas à nous contacter à l'adresse
          suivante :{" "}
          <strong className="text-indigo-600">
            contact@notreplateforme.com
          </strong>
          .
        </p>
      </div>

      {/* Formulaire de contact */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Formulaire de Contact
        </h3>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Votre nom
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Votre email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Entrez votre email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Votre message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Écrivez votre message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-medium hover:bg-indigo-700"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Section FAQ */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
          <MessageCircle size={20} className="text-indigo-600" />
          FAQ
        </h3>
        <ul className="mt-4">
          {faqs.map((faq, index) => (
            <li key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left text-lg font-medium text-indigo-600 hover:text-indigo-800 focus:outline-none"
              >
                {faq.question}
              </button>
              {faqOpen === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactFAQ;
