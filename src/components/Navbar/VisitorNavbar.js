import React, { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  Home,
  Users,
  ClipboardListIcon,
  Newspaper,
  Calendar,
  BookMarked,
  Info,
  LogIn,
} from "lucide-react";

const VisitorNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Déterminer le chemin actif
  const currentPath = window.location.pathname;

  const menuItems = [
    { title: "Accueil", icon: <Home size={20} />, href: "/" },
    { title: "Cours", icon: <BookOpen size={20} />, href: "/cours" },
    { title: "Communauté", icon: <Users size={20} />, href: "/communaute" },
    {
      title: "Projets",
      icon: <ClipboardListIcon size={20} />,
      href: "/projets",
    },
    { title: "Blog", icon: <Newspaper size={20} />, href: "/blog" },
    { title: "Événements", icon: <Calendar size={20} />, href: "/evenements" },
    {
      title: "Ressources",
      icon: <BookMarked size={20} />,
      href: "/ressources",
    },
    { title: "À Propos", icon: <Info size={20} />, href: "/about" },
  ];

  // Fonction pour déterminer si l'élément du menu est actif
  const isActive = (href) => {
    // Si l'élément est "Accueil", on le colorie uniquement si on est sur la page d'accueil
    if (href === "/") {
      return currentPath === "/";
    }
    // Pour les autres éléments, on vérifie si le chemin actuel commence par href
    return currentPath.startsWith(href);
  };

  const renderMenuItems = (isMobile = false) => {
    return menuItems.map((item) => (
      <a
        key={item.title}
        href={item.href}
        className={`flex items-center space-x-2 ${
          isMobile ? "block" : "inline-flex"
        } px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
          isActive(item.href)
            ? "text-blue-600 bg-indigo-100"
            : "text-gray-600 hover:text-indigo-100"
        }`}
      >
        {item.icon}
        <span>{item.title}</span>
      </a>
    ));
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 mr-4">
            <ClipboardListIcon className="h-8 w-8 text-indigo-100" />
            <span className="text-xl font-bold text-blue-600 whitespace-nowrap">
              Science et Technologie
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {renderMenuItems()}
            <button className="bg-green-500 text-blue-600 flex items-center space-x-1 px-4 py-2 rounded-md">
              <LogIn size={20} />
              <span>Connexion</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderMenuItems(true)}
            <button className="w-full bg-green-500 text-blue-600 flex items-center justify-center space-x-1 px-4 py-2 rounded-md">
              <LogIn size={20} />
              <span>Connexion</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default VisitorNavbar;
