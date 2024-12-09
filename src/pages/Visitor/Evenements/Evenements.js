import React from "react"; // Assurez-vous que ce chemin est correct
import { Link } from "react-router-dom"; // Si vous avez des liens pour chaque événement
import HeroEvent from "../../../components/Visitor/Evenements/HeroEvent";

const Evenements = () => {
  // Données fictives pour les événements
  const evenements = [
    {
      id: 1,
      titre: "Conférence sur l'IA",
      date: "2024-12-01",
      description:
        "Rejoignez-nous pour une conférence sur l'intelligence artificielle.",
    },
    {
      id: 2,
      titre: "Atelier de développement web",
      date: "2024-12-05",
      description:
        "Un atelier pratique sur les dernières tendances du développement web.",
    },
    {
      id: 3,
      titre: "Webinaire Data Science",
      date: "2024-12-10",
      description:
        "Participez à notre webinaire sur les applications de la Data Science.",
    },
    {
      id: 4,
      titre: "Hackathon de codage",
      date: "2024-12-15",
      description:
        "Un hackathon où les développeurs peuvent démontrer leurs compétences.",
    },
    {
      id: 5,
      titre: "Session Q&R avec des experts",
      date: "2024-12-20",
      description:
        "Une session en direct pour poser vos questions à des experts de l'industrie.",
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <HeroEvent />

      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Nos Événements à venir
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Découvrez nos événements passionnants ! Que ce soit pour participer à
          des webinaires, des hackathons, des compétitions de codage ou des
          ateliers en ligne, nous avons une gamme d'événements pour améliorer
          vos compétences. Rejoignez-nous et connectez-vous avec des experts en
          direct à travers nos sessions Q&R !
        </p>
      </section>

      {/* Calendrier des événements */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Calendrier
        </h2>

        <div className="space-y-8">
          {evenements.map((event) => (
            <div
              key={event.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold">{event.titre}</h3>
              <p className="text-gray-600">Date : {event.date}</p>
              <p className="text-gray-600 mt-4">{event.description}</p>
              <Link
                to={`/evenements/${event.id}`}
                className="text-blue-600 mt-4 inline-block"
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Sélection d'événements particuliers */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Nos Événements phares
        </h3>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">Webinaires</h4>
            <p className="text-gray-600 mt-4">
              Participez à nos webinaires interactifs sur des sujets
              passionnants. Rejoignez des experts pour des discussions en direct
              et apprenez de nouvelles choses !
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">Hackathons</h4>
            <p className="text-gray-600 mt-4">
              Mettez vos compétences à l'épreuve dans des compétitions de
              codage. Participez à des hackathons excitants avec des prix et des
              opportunités de réseautage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">
              Compétitions de codage
            </h4>
            <p className="text-gray-600 mt-4">
              Participez à des compétitions de codage stimulantes et montrez vos
              compétences techniques tout en remportant des prix !
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">
              Ateliers en ligne
            </h4>
            <p className="text-gray-600 mt-4">
              Rejoignez nos ateliers interactifs où vous apprendrez des concepts
              clés dans divers domaines, de la programmation à la conception
              web.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">
              Sessions Q&R avec des experts
            </h4>
            <p className="text-gray-600 mt-4">
              Rejoignez nos sessions Q&R avec des experts en direct pour poser
              vos questions sur des sujets techniques, des projets ou des
              tendances de l'industrie.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Evenements;
