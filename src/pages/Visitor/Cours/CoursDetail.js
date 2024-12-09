import React, { useState, useEffect } from "react";
import { Progress } from "rsuite";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";

function CoursDetail() {
  const [progression, setProgression] = useState(45);
  const navigate = useNavigate();

  const detailCours = {
    titre: "Utilisation des IA dans le Monde Moderne",
    niveau: "Intermédiaire",
    context:
      "Découvrez comment l'intelligence artificielle transforme notre quotidien, de la maison connectée aux industries innovantes.",
  };

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 py-8 overflow-hidden">
      {/* Retour à la liste des cours */}
      <div
        onClick={() => navigate("/cours")}
        className="w-7 h-7 bg-blue-500 rounded-full cursor-pointer flex justify-center items-center text-white mb-4"
      >
        <ArrowLeft size={20} />
      </div>

      {/* Détails du cours */}
      <div data-aos="fade-up" className="rounded-md p-6 bg-white shadow-lg">
        <img
          src="https://via.placeholder.com/800x400?text=Cours+sur+les+IA"
          alt="Utilisation des IA"
          className="rounded-md mb-4"
        />
        <h2 className="text-3xl font-semibold text-[#333] mb-4">
          {detailCours.titre}
        </h2>

        <div className="flex flex-col text-lg text-blue-600">
          <div className="w-full mt-2 flex justify-start">
            <div className="inline-block">
              <span className="text-[#777]">Niveau :</span>{" "}
              <span className="font-semibold">{detailCours.niveau}</span>
            </div>
            <div className="inline-block mx-2 px-2 border-l-2 border-l-[#ccc]">
              <span className="text-[#777]">Durée :</span>{" "}
              <span className="font-semibold">8 semaines</span>
            </div>
          </div>
        </div>
        <p className="mt-5 text-blue-600">{detailCours.context}</p>
      </div>

      {/* Barre de progression */}
      <div className="mt-6  p-4 ">
        <Progress.Line
          percent={progression}
          strokeWidth={30}
          strokeColor="#3ad12c"
        />

        <div className="pl-3 text-lg">
          <span className="font-bold">Progression</span> :
          <span className="ml-2">{progression}%</span>
        </div>
      </div>

      {/* Modules */}
      <div data-aos="fade-left" className="container mt-[5em] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Module 1 */}
          <div className="border p-6 rounded-xl border-b-2 border-b-blue-500 hover:bg-[#e6f9e6] transition">
            <h2 className="text-xl font-bold mb-2 text-[#333]">
              Module 1 : Introduction à l'IA
            </h2>
            <p className="mb-4 text-blue-600">
              Comprenez les bases de l'intelligence artificielle et son impact
              sur les industries modernes.
            </p>
            <div
              onClick={() => navigate("/cours/module")}
              className="bg-blue-500 w-max cursor-pointer hover:bg-[#34a01e] text-white font-semibold py-2 px-4 rounded inline-block"
            >
              Continuer le module
            </div>
          </div>

          {/* Module 2 */}
          <div className="border p-6 rounded-xl border-b-2 border-b-blue-500 hover:bg-[#e6f9e6] transition">
            <h2 className="text-xl font-bold mb-2 text-[#333]">
              Module 2 : Outils IA Populaires
            </h2>
            <p className="mb-4 text-blue-600">
              Familiarisez-vous avec les outils comme ChatGPT, MidJourney, et
              bien d'autres.
            </p>
            <div
              onClick={() => navigate("/cours/module")}
              className="bg-blue-500 w-max cursor-pointer hover:bg-[#34a01e] text-white font-semibold py-2 px-4 rounded inline-block"
            >
              Commencer le module
            </div>
          </div>
        </div>
      </div>

      {/* Ressources Complémentaires */}
      <div data-aos="fade-up" className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-[#333]">
          Ressources Complémentaires
        </h2>

        <ul className="space-y-3">
          <li className="flex items-center text-blue-600">
            <FileText size={20} color="#3ad12c" className="mr-3" />
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
              Guide Complet sur l'IA (PDF)
            </span>
          </li>
          <li className="flex items-center text-blue-600">
            <ArrowRight size={20} color="#3ad12c" className="mr-3" />
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
              Forum de discussion IA
            </span>
          </li>
          <li className="flex items-center text-blue-600">
            <ArrowRight size={20} color="#3ad12c" className="mr-3" />
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
              Applications IA au Burundi
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CoursDetail;
