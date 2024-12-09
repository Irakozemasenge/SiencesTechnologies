import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, PlayCircle } from "lucide-react";
import HeroCourse from "../../../components/Visitor/Cours/HeroCourse";
import { courses } from "../../../Data/Data";

function Cours() {
  const navigate = useNavigate();

  // États pour filtrage et pagination
  const [search, setSearch] = useState("");
  const [filterNiveau, setFilterNiveau] = useState("");
  const [filterCategorie, setFilterCategorie] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleCourseClick = (course) => {
    navigate("/cours/detail", { state: { course } });
  };

  // Filtrage des cours
  const filteredCourses = courses.filter((course) => {
    return (
      (search === "" ||
        course.titre.toLowerCase().includes(search.toLowerCase())) &&
      (filterNiveau === "" || course.niveau === filterNiveau) &&
      (filterCategorie === "" || course.categorie === filterCategorie) &&
      (filterType === "" || course.type === filterType)
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fonction pour tronquer la description à 100 caractères
  const truncateDescription = (description) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  return (
    <div>
      {/* Section Hero */}
      <HeroCourse />

      {/* Contenu principal */}
      <div className="mt-[5vh] rounded-lg p-6 my-6 overflow-hidden">
        <h1 className="text-2xl font-bold mb-4">
          Cours en Sciences et Technologies
        </h1>
        <p className="mb-4 text-lg">
          Plongez dans les domaines fascinants des sciences et technologies !
          Apprenez les bases de la programmation, explorez l'astronomie, ou
          comprenez les innovations en intelligence artificielle.
        </p>

        {/* Barre de recherche */}
        <div className="flex items-center mb-6">
          <input
            className="p-2 flex-1 bg-gray-100 border rounded-l-md outline-none focus:border-blue-500"
            placeholder="Rechercher un cours (ex : Intelligence Artificielle)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer border-blue-500 border rounded-r-md px-4 py-2 flex items-center">
            <Search className="mr-2" />
            Recherche
          </div>
        </div>

        {/* Filtres */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <select
            className="p-2 bg-gray-100 border rounded-md"
            onChange={(e) => setFilterNiveau(e.target.value)}
            value={filterNiveau}
          >
            <option value="">Tous les niveaux</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>
          <select
            className="p-2 bg-gray-100 border rounded-md"
            onChange={(e) => setFilterCategorie(e.target.value)}
            value={filterCategorie}
          >
            <option value="">Toutes les catégories</option>
            <option value="Programmation">Programmation</option>
            <option value="Web Development">Web Development</option>
          </select>
          <select
            className="p-2 bg-gray-100 border rounded-md"
            onChange={(e) => setFilterType(e.target.value)}
            value={filterType}
          >
            <option value="">Tous les types</option>
            <option value="Simple">Simple</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        {/* Liste des cours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedCourses.map((course, i) => (
            <div
              key={i}
              className="rounded-lg bg-white shadow-md p-4 transition-transform transform hover:scale-105"
              data-aos="fade-up"
            >
              <img
                src={course.image || "https://via.placeholder.com/150"}
                alt={course.titre}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-lg font-semibold mb-2 text-blue-600">
                {course.titre}
              </h2>
              <p className="text-sm text-gray-600">
                {truncateDescription(course.context)}
              </p>
              <div className="mt-4 flex flex-col space-y-2">
                <div className="flex justify-between text-sm text-gray-700">
                  <span className="font-semibold text-green-500">
                    Niveau: {course.niveau}
                  </span>
                  <span>{course.etudiants} inscrits</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>{course.etoiles} ⭐</span>
                  <span>Type: {course.premium ? "Premium" : "Simple"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Durée: {course.duree}</span>
                  <span>Sous-catégorie: {course.sousCategorie}</span>
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Prérequis:</strong> {course.prerequis}
                </div>
                <button
                  onClick={() => handleCourseClick(course)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center"
                >
                  <PlayCircle className="mr-2" />
                  Commencez à suivre
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            Précédent
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === page + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cours;
