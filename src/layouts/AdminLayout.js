import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import Sidebar from "../components/Sidebar";
import { useMediaQuery } from "react-responsive";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false); // Pour le menu mobile
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" }); // Vérifier si l'écran est petit

  const toggleMenu = () => setIsOpen(!isOpen); // Gérer l'état d'ouverture du menu mobile

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar toggleMenu={toggleMenu} isOpen={isOpen} />
      <div className="flex-1 flex flex-col">
        <AdminNavbar toggleMenu={toggleMenu} isSmallScreen={isSmallScreen} />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
