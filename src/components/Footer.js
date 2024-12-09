import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section avec les informations de la plateforme */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <h4 className="text-xl font-bold mb-2">
              Plateforme d'Éducation en Ligne
            </h4>
            <p className="text-sm">
              Une plateforme dédiée à la Science et Technologie pour vous aider
              à développer vos compétences et atteindre vos objectifs.
            </p>
          </div>         
        </div>

        {/* Section des informations légales et contact */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-600 pt-6">
          <div className="mb-4 sm:mb-0 text-sm">
            <p>
              © {new Date().getFullYear()} Plateforme d'Éducation en Ligne. Tous
              droits réservés.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="mailto:contact@educationplatform.com"
              className="text-sm hover:text-indigo-400"
            >
              Contact
            </a>
            <a href="/privacy-policy" className="text-sm hover:text-indigo-400">
              Politique de confidentialité
            </a>
            <a
              href="/terms-of-service"
              className="text-sm hover:text-indigo-400"
            >
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
