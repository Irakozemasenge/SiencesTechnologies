import React from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardListIcon } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirige vers la page d'accueil
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      {/* Logo et nom de la plateforme */}
      <div className="mb-6">
        <ClipboardListIcon size={50} className="mx-auto text-indigo-600" />
        <h1 className="text-3xl font-bold text-orange-600 mt-2">
          Science et Technologie
        </h1>
      </div>

      {/* Message d'erreur 404 */}
      <h1 className="text-4xl font-extrabold text-gray-800">
        404 - Page Non Trouvée
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        Désolé, la page que vous recherchez n'existe pas.
      </p>

      {/* Bouton de retour à l'accueil */}
      <button
        onClick={handleGoHome}
        className="mt-8 px-6 py-3 bg-orange-600 text-white text-lg font-semibold rounded-md hover:bg-orange-700 transition duration-300"
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default NotFound;
