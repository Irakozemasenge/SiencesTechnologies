import React from "react";

const MyCourses = () => {
  const courses = [
    {
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*w6icbsbl82t7rmO9OpRSCw.png",
      titre: "Introduction to Python",
      context:
        "Learn the basics of Python programming, covering variables, loops, and functions.",
      niveau: "Débutant",
      categorie: "Technologies de l'information",
      sousCategorie: "Développement Web",
      duree: "6 semaines",
      premium: false,
      etudiants: 150,
      etoiles: 4.5,
      prerequis: "Aucun",
      progress: 60, // Progression en %
      timeStudied: "4 heures", // Temps étudié
      estimatedTimeLeft: "2 heures", // Temps estimé restant
      id: "1", // Lien vers le cours
      link: "/my-courses/1",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/0*xQz-Af3zfilbsLjp.jpeg",
      titre: "Blockchain Basics",
      context:
        "Explore the fundamentals of blockchain technology and its practical applications.",
      niveau: "Débutant",
      categorie: "Technologies émergentes",
      sousCategorie: "Blockchain",
      duree: "8 semaines",
      premium: true,
      etudiants: 200,
      etoiles: 4.8,
      prerequis: "Connaissance de base en informatique",
      progress: 80,
      timeStudied: "6 heures",
      estimatedTimeLeft: "2 heures",
      id: "2",
      link: "/my-courses/2",
    },
    {
      image:
        "https://www.kdnuggets.com/wp-content/uploads/rosidi_mastering_data_universe_key_steps_thriving_data_science_career_2.jpg",
      titre: "Data Science Essentials",
      context:
        "Learn the essential tools and techniques for data analysis and visualization.",
      niveau: "Intermédiaire",
      categorie: "Technologies de l'information",
      sousCategorie: "Data Science",
      duree: "10 semaines",
      premium: true,
      etudiants: 320,
      etoiles: 4.7,
      prerequis: "Python et notions de statistiques",
      progress: 40,
      timeStudied: "8 heures",
      estimatedTimeLeft: "12 heures",
      id: "3",
      link: "/my-courses/3",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ikEB53J-pPJCXy1Ub1XUsQ.jpeg",
      titre: "Introduction to Machine Learning",
      context:
        "Start your journey in machine learning with a hands-on beginner-friendly course.",
      niveau: "Débutant",
      categorie: "Technologies de l'information",
      sousCategorie: "IA",
      duree: "8 semaines",
      premium: true,
      etudiants: 180,
      etoiles: 4.6,
      prerequis: "Python de base",
      progress: 55,
      timeStudied: "5 heures",
      estimatedTimeLeft: "3 heures",
      id: "4",
      link: "/my-courses/4",
    },
    {
      image:
        "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_724/dpr_2.0/element/82/82322_elec.jpg",
      titre: "Génie Électrique Avancé",
      context:
        "Master the principles of advanced electrical engineering with hands-on projects.",
      niveau: "Avancé",
      categorie: "Ingénierie",
      sousCategorie: "Génie électrique",
      duree: "12 semaines",
      premium: true,
      etudiants: 75,
      etoiles: 4.9,
      prerequis: "Électricité de base",
      progress: 90,
      timeStudied: "10 heures",
      estimatedTimeLeft: "2 heures",
      id: "5",
      link: "/my-courses/5",
    },
    {
      image: "https://ajeevi.com/wp-content/uploads/2023/06/1-15.jpg",
      titre: "IoT Applications in Smart Homes",
      context:
        "Learn to build smart home devices with IoT using Raspberry Pi and Arduino.",
      niveau: "Intermédiaire",
      categorie: "Technologies émergentes",
      sousCategorie: "IoT",
      duree: "10 semaines",
      premium: true,
      etudiants: 90,
      etoiles: 4.5,
      prerequis: "Connaissance de base en électronique",
      progress: 30,
      timeStudied: "3 heures",
      estimatedTimeLeft: "7 heures",
      id: "6",
      link: "/my-courses/6",
    },
    {
      image:
        "https://d3i3lzopayriz.cloudfront.net/books/0_front_cover_1660716982.jpg",
      titre: "Mathematics for Engineers",
      context:
        "Develop essential mathematical skills required for engineering applications.",
      niveau: "Débutant",
      categorie: "Sciences fondamentales",
      sousCategorie: "Mathématiques",
      duree: "8 semaines",
      premium: false,
      etudiants: 250,
      etoiles: 4.2,
      prerequis: "Aucun",
      progress: 75,
      timeStudied: "6 heures",
      estimatedTimeLeft: "2 heures",
      id: "7",
      link: "/my-courses/7",
    },
    {
      image:
        "https://sheikirfanbasha.github.io/assets/images/augmented-reality.jpeg",
      titre: "Introduction to Augmented Reality",
      context:
        "Learn the fundamentals of augmented reality and start building interactive AR apps.",
      niveau: "Débutant",
      categorie: "Technologies émergentes",
      sousCategorie: "Réalité augmentée/virtuelle",
      duree: "8 semaines",
      premium: true,
      etudiants: 50,
      etoiles: 4.3,
      prerequis: "Connaissance de base en développement d'applications",
      progress: 50,
      timeStudied: "4 heures",
      estimatedTimeLeft: "4 heures",
      id: "8",
      link: "/my-courses/8",
    },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Mes Cours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
          >
            <img
              src={course.image}
              alt={course.titre}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold text-indigo-600 mt-4">
              {course.titre}
            </h2>
            <p className="text-gray-700 mt-2">{course.context}</p>
            <div className="mt-4">
              <p className="text-gray-600">
                <strong>Niveau :</strong> {course.niveau}
              </p>
              <p className="text-gray-600">
                <strong>Catégorie :</strong> {course.categorie}
              </p>
              <p className="text-gray-600">
                <strong>Sous-catégorie :</strong> {course.sousCategorie}
              </p>
              <p className="text-gray-600">
                <strong>Durée :</strong> {course.duree}
              </p>
              <p className="text-gray-600">
                <strong>Prérequis :</strong> {course.prerequis}
              </p>
              <p className="text-gray-600">
                <strong>Évaluations :</strong> {course.etoiles} ⭐
              </p>
              <p className="text-gray-600">
                <strong>Nombre d'étudiants :</strong> {course.etudiants}
              </p>
              <p className="text-gray-600">
                <strong>Progression :</strong> {course.progress}%
              </p>
              <p className="text-gray-600">
                <strong>Temps étudié :</strong> {course.timeStudied}
              </p>
              <p className="text-gray-600">
                <strong>Temps restant estimé :</strong>{" "}
                {course.estimatedTimeLeft}
              </p>
            </div>
            <a
              href={course.link}
              className="text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-4 inline-block"
            >
              Voir plus
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
