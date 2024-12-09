import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Eye, Calendar, Tag } from "lucide-react"; // Import des icônes

const BlogDetail = () => {
  const { id } = useParams(); // Récupère l'ID de l'article depuis l'URL

  // Données aléatoires simulées
  const article = {
    id: id,
    titre: "Exemple d'Article",
    contenu:
      "Voici un contenu fictif pour cet article. Il sert à illustrer comment afficher les détails.",
    date_publication: "2024-11-30",
    image_couverture: "https://via.placeholder.com/600x300", // Image par défaut
    categories: ["Technologie", "Développement Web"],
    tags: ["React", "Frontend", "API"],
    nombre_vues: 123,
  };

  const parts = [
    { id: 1, titre: "Introduction", contenu: "Contenu de l'introduction." },
    { id: 2, titre: "Chapitre 1", contenu: "Contenu du chapitre 1." },
    { id: 3, titre: "Conclusion", contenu: "Contenu de la conclusion." },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Bouton de retour */}
      <div className="mb-6">
        <Link
          to="/blog"
          className="flex items-center gap-2 px-4 py-2 text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-lg w-fit"
        >
          <ArrowLeft size={18} />
          Retour à la liste des blogs
        </Link>
      </div>

      {/* Image de couverture */}
      <div className="mb-6">
        <img
          src={article.image_couverture}
          alt={article.titre}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Détails de l'article */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.titre}</h1>
      <div className="flex items-center gap-4 text-gray-500 mb-6">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>Publié le {article.date_publication}</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye size={16} />
          <span>{article.nombre_vues} vues</span>
        </div>
      </div>

      {/* Catégories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {article.categories.map((categorie, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg"
          >
            {categorie}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-lg"
          >
            <Tag size={14} />
            {tag}
          </span>
        ))}
      </div>

      {/* Contenu principal */}
      <p className="text-lg leading-relaxed text-gray-700 mb-12">
        {article.contenu}
      </p>

      {/* Détails supplémentaires */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Détails de l'article
      </h2>
      {parts.map((part) => (
        <div key={part.id} className="mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            {part.titre}
          </h3>
          <p className="text-gray-700 leading-relaxed">{part.contenu}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetail;
