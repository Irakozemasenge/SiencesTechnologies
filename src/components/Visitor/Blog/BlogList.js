import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tag, Video, Eye } from "lucide-react"; // Importation des icônes de lucide-react

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [minViews, setMinViews] = useState(0);
  const [maxViews, setMaxViews] = useState(1000);

  const categoryList = ["Tous", "Technologie", "Science", "Interviews"];

  const blogs = [
    {
      id: 1,
      titre: "L'impact de la technologie sur l'éducation",
      contenu:
        "Découvrez comment les outils numériques transforment l'apprentissage.",
      date_publication: "2024-11-30",
      image_couverture: "https://via.placeholder.com/800x400",
      lien_youtube: "",
      nombre_vues: 120,
      categories: ["Technologie", "Éducation"],
    },
    {
      id: 2,
      titre: "Les tendances technologiques en 2024",
      contenu:
        "Un aperçu des technologies émergentes qui redéfinissent les secteurs.",
      date_publication: "2024-11-28",
      image_couverture: "",
      lien_youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      nombre_vues: 95,
      categories: ["Technologie"],
    },
    {
      id: 3,
      titre: "Conseils pour débuter en programmation",
      contenu: "Voici quelques conseils pour bien commencer.",
      date_publication: "2024-11-25",
      image_couverture: "https://via.placeholder.com/800x400",
      lien_youtube: "",
      nombre_vues: 200,
      categories: ["Éducation"],
    },
  ];

  // Fonction pour colorier les catégories
  const getCategoryColor = (category) => {
    switch (category) {
      case "Technologie":
        return "bg-blue-500";
      case "Science":
        return "bg-green-500";
      case "Interviews":
        return "bg-yellow-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <section className="p-6 max-w-6xl mx-auto">
      {/* Recherche */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog</h1>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Filtre par catégorie */}
      <div className="flex gap-4 mb-6">
        {categoryList.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <Tag size={16} /> {/* Icone pour la catégorie */}
            {category}
          </button>
        ))}
      </div>

      {/* Filtre par nombre de vues */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">
          Filtrer par vues :
        </label>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min vues"
            value={minViews}
            onChange={(e) => setMinViews(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-32"
          />
          <input
            type="number"
            placeholder="Max vues"
            value={maxViews}
            onChange={(e) => setMaxViews(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-32"
          />
        </div>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs &&
          blogs
            .filter((post) => {
              return (
                (searchQuery === "" ||
                  post.titre
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) &&
                (activeCategory === "Tous" ||
                  post.categories.includes(activeCategory)) &&
                post.nombre_vues >= minViews &&
                post.nombre_vues <= maxViews
              );
            })
            .map((post) => {
              return (
                <article
                  key={post.id}
                  className="border rounded-lg overflow-hidden shadow-md"
                >
                  {post.image_couverture ? (
                    <img
                      src={post.image_couverture}
                      alt={post.titre}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <iframe
                      src={post.lien_youtube}
                      title={post.titre}
                      className="w-full h-48"
                    />
                  )}
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{post.titre}</h2>
                    <p className="text-sm text-gray-600">
                      Publié le{" "}
                      {post.date_publication &&
                        new Date(post.date_publication).toLocaleDateString()}
                    </p>
                    <div className="mt-2">
                      <Eye size={18} className="inline mr-2" />
                      <span>{post.nombre_vues} vues</span>
                    </div>
                    <p className="mt-2 text-gray-800">
                      {post.contenu.length > 100
                        ? post.contenu.slice(0, 100) + "..."
                        : post.contenu}
                    </p>

                    <div className="flex gap-2 mt-4">
                      {post.categories.map((category) => (
                        <span
                          key={category}
                          className={`px-4 py-2 rounded-full text-white text-xs ${getCategoryColor(
                            category
                          )}`}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blogDetail/${post.id}`}
                      className="text-indigo-600 hover:underline mt-2 inline-block"
                    >
                      Voir les détails
                    </Link>
                  </div>
                </article>
              );
            })}
      </div>
    </section>
  );
};

export default BlogList;
