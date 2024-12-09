import React from "react";
import { Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction à l'Intelligence Artificielle",
    category: "Technologies de l'information",
    rating: 4.8,
    students: 1234,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Physique Quantique pour Débutants",
    category: "Sciences fondamentales",
    rating: 4.6,
    students: 856,
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Développement Web Full-Stack",
    category: "Technologies de l'information",
    rating: 4.9,
    students: 2341,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

const PopularCourses = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Cours Populaires
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Découvrez nos cours les plus appréciés par notre communauté
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
              data-aos="zoom-in"
              data-aos-delay={course.id * 100}
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={course.image}
                  alt={course.title}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {course.category}
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {course.title}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-500">
                      {course.rating}
                    </span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({course.students} étudiants)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/cours"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Voir tous les cours
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
