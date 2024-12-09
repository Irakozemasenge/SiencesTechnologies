import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation des styles AOS

// Layouts
import VisitorLayout from "./layouts/VisitorLayout";
import AdminLayout from "./layouts/AdminLayout";
import StudentLayout from "./layouts/StudentLayout";

// Pages for Visitors
import Home from "./pages/Visitor/Home";
import APropos from "./pages/Visitor/APropos";
import Blog from "./pages/Visitor/blog/Blog";
import BlogDetail from "./pages/Visitor/blog/BlogDetail";
import Communaute from "./pages/Visitor/Communaute/Communaute";
import ForumDetail from "./pages/Visitor/Communaute/ForumDetail";
import GroupeDetails from "./pages/Visitor/Communaute/GroupeDetails";
import Cours from "./pages/Visitor/Cours/Cours";
import CoursDetail from "./pages/Visitor/Cours/CoursDetail";
import ModuleCours from "./pages/Visitor/Cours/ModuleCours";
import Evenements from "./pages/Visitor/Evenements/Evenements";
import EventDetail from "./pages/Visitor/Evenements/EventDetails";
import Projets from "./pages/Visitor/Projets";
import Ressources from "./pages/Visitor/Ressources";
import NotFound from "./pages/Visitor/NotFound"; // Import de la page 404

// Pages for Admins
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageCourses from "./pages/Admin/ManageCourses";
import ManageUsers from "./pages/Admin/ManageUsers";
import Reports from "./pages/Admin/Reports";
import AddCourse from "./pages/Admin/AddCourse";
import AdminSettings from "./pages/Admin/AdminSettings";

// Pages for Students
import StudentDashboard from "./pages/Student/StudentDashboard";
import MyCourses from "./pages/Student/MyCourses";
import Profile from "./pages/Student/Profile";
import Notifications from "./pages/Student/Notifications";
import Assignments from "./pages/Student/Assignments";
import Help from "./pages/Student/Help";
import Projects from "./pages/Student/Projects";
import Exams from "./pages/Student/Exams";
import Calendar from "./pages/Student/Calendar";
import AdminProject from "./pages/Admin/AdminProject";

const App = () => {
  localStorage.setItem("userRole", "admin");
  localStorage.setItem("isLoggedIn", true);

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userRole = localStorage.getItem("userRole"); // Exemple : "admin", "student"

  // Redirection conditionnelle basée sur le rôle de l'utilisateur
  const PrivateRoute = ({ children, role }) => {
    if (!isLoggedIn) {
      return <Navigate to="/" />;
    }

    if (role && role !== userRole) {
      return <Navigate to="/" />;
    }

    return children;
  };

  // Initialiser AOS dans useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Routes pour les visiteurs */}
        <Route path="/" element={<VisitorLayout />}>
          <Route index element={<Home />} />
          <Route path="cours" element={<Cours />} />
          <Route path="cours/detail" element={<CoursDetail />} />
          <Route path="cours/module" element={<ModuleCours />} />

          <Route path="communaute" element={<Communaute />} />
          <Route path="communaute/forum/:forumId" element={<ForumDetail />} />
          <Route path="communaute/groupes/:id" element={<GroupeDetails />} />
          <Route path="projets" element={<Projets />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogDetail/:id" element={<BlogDetail />} />
          <Route path="evenements" element={<Evenements />} />
          <Route path="evenements/:id" element={<EventDetail />} />
          <Route path="ressources" element={<Ressources />} />
          <Route path="about" element={<APropos />} />
        </Route>
        {/* Routes pour les administrateurs */}
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="manage-courses" element={<ManageCourses />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="projects" element={<AdminProject />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        {/* Routes pour les étudiants */}
        <Route
          path="/student"
          element={
            <PrivateRoute role="student">
              <StudentLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="my-courses/:id" element={<MyCourses />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="projects" element={<Projects />} />
          <Route path="exams" element={<Exams />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="help" element={<Help />} />
        </Route>
        {/* Route pour la page 404 */}
        <Route path="*" element={<NotFound />} />{" "}
        {/* Page NotFound pour les URLs non définies */}
      </Routes>
    </Router>
  );
};

export default App;
