// Loader.js
import React from "react";
import { ClipboardListIcon } from "lucide-react"; // Vous pouvez ajuster l'icône à votre besoin

function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center">
        {/* Logo */}
        <ClipboardListIcon size={50} className="mx-auto text-indigo-600" />

        {/* Texte avec le nom de la plateforme */}
        <h1 className="text-xl font-bold text-gray-800 mt-4">
          Science et Technologie
        </h1>

        {/* Texte de chargement */}
        <p className="text-lg text-gray-600 mt-2">Chargement...</p>
      </div>
    </div>
  );
}

export default Loader;
