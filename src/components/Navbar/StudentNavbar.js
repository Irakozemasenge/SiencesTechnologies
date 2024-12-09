import React, { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  Home,
  User,
  Bell,
  ClipboardList,
  HelpCircle,
  LogOut,
  FileText,
  Award,
  Calendar,
} from "lucide-react";

const StudentNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Déterminer le chemin actif
  const currentPath = window.location.pathname;

  const menuItems = [
    {
      title: "Tableau de bord",
      icon: <Home size={20} />,
      href: "/student",
    },
    {
      title: "Mes Cours",
      icon: <BookOpen size={20} />,
      href: "/student/my-courses",
    },
    { title: "Profil", icon: <User size={20} />, href: "/student/profile" },
    {
      title: "Notifications",
      icon: <Bell size={20} />,
      href: "/student/notifications",
    },
    {
      title: "Devoirs",
      icon: <ClipboardList size={20} />,
      href: "/student/assignments",
    },
    {
      title: "Projets",
      icon: <FileText size={20} />,
      href: "/student/projects",
    },
    {
      title: "Évaluations",
      icon: <Award size={20} />,
      href: "/student/exams",
    },
    {
      title: "Calendrier",
      icon: <Calendar size={20} />,
      href: "/student/calendar",
    },
    { title: "Aide", icon: <HelpCircle size={20} />, href: "/student/help" },
  ];

  // Fonction pour déterminer si l'élément du menu est actif
  const isActive = (href) => {
    if (href === "/student") {
      return currentPath === "/student";
    }
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
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Menu pour écran de bureau */}
          <div className="hidden md:flex items-center space-x-4">
            {renderMenuItems()}
            <button className="bg-red-500 text-white flex items-center space-x-1 px-4 py-2 rounded-md">
              <LogOut size={20} />
              <span>Déconnexion</span>
            </button>
          </div>

          {/* Bouton pour menu mobile */}
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

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderMenuItems(true)}
            <button className="w-full bg-red-500 text-white flex items-center justify-center space-x-1 px-4 py-2 rounded-md">
              <LogOut size={20} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StudentNavbar;
