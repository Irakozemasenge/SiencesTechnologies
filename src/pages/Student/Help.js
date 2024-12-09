import React from "react";
import { LifeBuoy, MessageCircle, Phone } from "lucide-react"; // Importation des icônes

function Help() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Centre d'aide</h1>
      {/* Section FAQ */}
      <section className="mb-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <LifeBuoy size={28} className="text-indigo-500" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Comment puis-je réinitialiser mon mot de passe ?
              </h3>
              <p className="text-gray-600">
                Pour réinitialiser votre mot de passe, cliquez sur "Mot de passe
                oublié" sur la page de connexion.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <LifeBuoy size={28} className="text-indigo-500" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Que faire si je rencontre des problèmes de connexion ?
              </h3>
              <p className="text-gray-600">
                Si vous avez des problèmes de connexion, vérifiez votre réseau
                ou contactez notre support technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contactez-nous */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Contactez-nous
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Phone size={28} className="text-green-500" />
            <div>
              <h3 className="font-semibold text-gray-800">Par téléphone</h3>
              <p className="text-gray-600">
                Appelez-nous au +257 62008505 pour toute urgence ou assistance
                immédiate.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MessageCircle size={28} className="text-blue-500" />
            <div>
              <h3 className="font-semibold text-gray-800">Par message</h3>
              <p className="text-gray-600">
                Envoyez-nous un message via notre chat en direct pour une
                assistance rapide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section autres ressources */}
      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Autres Ressources
        </h2>
        <p className="text-gray-600">
          Pour plus d'informations, visitez notre centre d'assistance en ligne
          ou explorez notre documentation complète.
        </p>
      </section>
    </div>
  );
}

export default Help;
