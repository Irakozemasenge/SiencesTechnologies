import React from "react";
import Chart from "react-apexcharts";

const StudentDashboard = () => {
  // Configuration des données des graphiques
  const courseProgressOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: [
        "Mathématiques",
        "Physique",
        "Informatique",
        "Biologie",
        "Chimie",
      ],
    },
    title: {
      text: "Progression des cours",
      align: "center",
    },
    colors: ["#1E90FF"],
  };

  const courseProgressSeries = [
    {
      name: "Progression",
      data: [80, 70, 90, 50, 60],
    },
  ];

  const activityDistributionOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Devoirs", "Cours en direct", "Projets", "Révision"],
    title: {
      text: "Répartition des activités",
      align: "center",
    },
  };

  const activityDistributionSeries = [25, 35, 20, 20];

  const weeklyPerformanceOptions = {
    chart: {
      toolbar: {
        show: false, // Désactive la barre d'outils (zoom, téléchargement, etc.)
      },
      zoom: {
        enabled: false, // Désactive la fonctionnalité de zoom
      },
    },
    xaxis: {
      categories: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], // Exemple de catégories
    },
    yaxis: {
      title: {
        text: "Performance", // Titre de l'axe Y
      },
    },
    stroke: {
      curve: "smooth", // Lignes douces
    },
    colors: ["#1E90FF"], // Couleur des lignes
  };

  const weeklyPerformanceSeries = [
    {
      name: "Performance Hebdomadaire",
      data: [30, 40, 35, 50, 49, 60, 70], // Exemple de données
    },
  ];

  // Résumés (cards)
  const summaries = [
    { title: "Total des cours suivis", value: 12, link: "/student/my-courses" },
    { title: "Devoirs soumis", value: 35, link: "/student/assignments" },
    {
      title: "Notifications récentes",
      value: 5,
      link: "/student/notifications",
    },
    { title: "Projets terminés", value: 7, link: "/student/projects" },
    { title: "Cours en direct", value: 3, link: "/student/my-courses" },
    {
      title: "Temps d'étude moyen",
      value: "5h/jour",
      link: "/student",
    },
    {
      title: "Progression générale",
      value: "75%",
      link: "/student/my-courses",
    },
    { title: "Cours à réviser", value: 2, link: "/student/my-courses" },
    { title: "Sujets favoris", value: "3 matières", link: "/student/profile" },
    { title: "Évaluations à venir", value: 2, link: "/student/exams" },
    { title: "Taux d'engagement", value: "88%", link: "/student/exams" },
    { title: "Messages non lus", value: 10, link: "/student/help" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Tableau de bord étudiant
      </h1>

      {/* Résumés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {summaries.map((summary, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 text-center border-t-4 border-blue-600"
          >
            <h2 className="text-lg font-semibold text-gray-700">
              {summary.title}
            </h2>
            <p className="text-2xl font-bold text-blue-600 my-2">
              {summary.value}
            </p>
            <a
              href={summary.link}
              className="text-sm text-indigo-600 hover:underline"
            >
              Voir plus
            </a>
          </div>
        ))}
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-md p-4">
          <Chart
            options={courseProgressOptions}
            series={courseProgressSeries}
            type="bar"
            height={350}
          />
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <Chart
            options={activityDistributionOptions}
            series={activityDistributionSeries}
            type="pie"
            height={350}
          />
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <Chart
            options={weeklyPerformanceOptions}
            series={weeklyPerformanceSeries}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
