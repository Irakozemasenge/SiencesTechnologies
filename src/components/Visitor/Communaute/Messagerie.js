import React from "react";
import { Link } from "react-router-dom";

const Messagerie = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Messagerie</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">
          Collaborez avec d'autres étudiants et instructeurs
        </h3>
        <p className="text-gray-600 mb-4">
          Envoyez des messages directs pour poser vos questions ou échanger des
          idées.
        </p>
        <Link
          to="/communaute/messagerie"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg"
        >
          Accéder à la messagerie
        </Link>
      </div>
    </section>
  );
};

export default Messagerie;
