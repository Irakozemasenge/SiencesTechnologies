import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, FileText, Settings, LogOut, Menu, X } from "lucide-react";
import { useMediaQuery } from "react-responsive"; // Import pour vérifier les petits écrans

function Sidebar({ toggleMenu, isOpen, setIsOpen }) {
  const location = useLocation();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const isActive = (path) =>
    location.pathname === path
      ? "bg-indigo-700 text-white" // Lien actif - changer la couleur de fond et du texte
      : "text-gray-600"; // Lien inactif - couleur par défaut

  // Fonction pour fermer le menu
  const closeSidebar = () => {
    if (isSmallScreen) {
      setIsOpen(false); // Fermer la sidebar si l'écran est petit
    }
  };

  return (
    <div>
      <div className="absolute top-4 z-10 ml-4">
        <button
          onClick={toggleMenu}
          className="bg-indigo-700 p-2 text-white rounded-md"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar avec menu mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-gray-900 bg-opacity-50 z-20`}
        onClick={toggleMenu}
      />
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-64 bg-indigo-100 text-gray-600 h-full transform transition-transform duration-300 z-30`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-3xl font-bold">Panneau Admin</h1>

          <button onClick={toggleMenu} className="text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu */}
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin"
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/admin"
                )}`}
                onClick={closeSidebar} // Ferme la sidebar lorsque le lien est cliqué
              >
                <Home className="w-5 h-5" />
                <span>Tableau de bord</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manage-users"
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/admin/manage-users"
                )}`}
                onClick={closeSidebar} // Ferme la sidebar lorsque le lien est cliqué
              >
                <Users className="w-5 h-5" />
                <span>Utilisateurs</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manage-courses"
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/admin/manage-courses"
                )}`}
                onClick={closeSidebar} // Ferme la sidebar lorsque le lien est cliqué
              >
                <FileText className="w-5 h-5" />
                <span>Gérer les cours</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/reports"
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/admin/reports"
                )}`}
                onClick={closeSidebar} // Ferme la sidebar lorsque le lien est cliqué
              >
                <FileText className="w-5 h-5" />
                <span>Rapports</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/add-course"
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/admin/add-course"
                )}`}
                onClick={closeSidebar} // Ferme la sidebar lorsque le lien est cliqué
              >
                <FileText className="w-5 h-5" />
                <span>Ajouter un cours</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/projects"
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/admin/projects"
                )}`}
                onClick={closeSidebar} // Ferme la sidebar lorsque le lien est cliqué
              >
                <FileText className="w-5 h-5" />
                <span>Projets</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/admin/settings"
                )}`}
                onClick={closeSidebar} // Ferme la sidebar lorsque le lien est cliqué
              >
                <Settings className="w-5 h-5" />
                <span>Paramètres</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/logout"
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/admin/logout"
                )}`}
                onClick={closeSidebar} // Ferme la sidebar lorsque le lien est cliqué
              >
                <LogOut className="w-5 h-5" />
                <span>Déconnexion</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
