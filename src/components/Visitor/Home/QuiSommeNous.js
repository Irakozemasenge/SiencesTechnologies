import React from "react";
import {
  BookOpen,
  Users,
  Code,
  Globe,
  Cpu,
  Database,
  Laptop,
  Cloud,
} from "lucide-react";


const QuiSommeNous = () => {
 

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            data-aos="fade-up"
          >
            Découvrez notre plateforme
          </h2>
          <p
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Une plateforme d'éducation en ligne dédiée à la science et la
            technologie, qui vous aide à apprendre à votre rythme et à
            développer vos compétences professionnelles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 - Apprentissage Flexibile */}
          <div
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <BookOpen className="h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Apprentissage Flexible
            </h3>
            <p className="mt-2 text-gray-500">
              Suivez des cours à votre propre rythme, peu importe où vous êtes.
              Nos cours sont accessibles 24/7 pour vous offrir une flexibilité
              totale.
            </p>
          </div>

          {/* Service 2 - Communauté Active */}
          <div
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Users className="h-12 w-12 text-green-500" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Communauté Active
            </h3>
            <p className="mt-2 text-gray-500">
              Rejoignez une communauté d'apprenants et d'experts. Partagez des
              connaissances, posez des questions et connectez-vous avec des
              mentors.
            </p>
          </div>

          {/* Service 3 - Projets Pratiques */}
          <div
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Code className="h-12 w-12 text-yellow-500" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Projets Pratiques
            </h3>
            <p className="mt-2 text-gray-500">
              Apprenez en pratiquant. Nos projets sont conçus pour renforcer vos
              compétences en science et technologie par des applications
              concrètes.
            </p>
          </div>

          {/* Service 4 - Cours en Ligne */}
          <div
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <Globe className="h-12 w-12 text-red-500" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Cours en Ligne
            </h3>
            <p className="mt-2 text-gray-500">
              Accédez à une large bibliothèque de cours en ligne couvrant des
              sujets comme l'informatique, la science des données, et
              l'intelligence artificielle.
            </p>
          </div>

          {/* Service 5 - Intelligence Artificielle */}
          <div
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <Cpu className="h-12 w-12 text-purple-500" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Intelligence Artificielle
            </h3>
            <p className="mt-2 text-gray-500">
              Apprenez les bases de l'intelligence artificielle et comment
              développer des applications qui utilisent des algorithmes avancés.
            </p>
          </div>

          {/* Service 6 - Science des Données */}
          <div
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <Database className="h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Science des Données
            </h3>
            <p className="mt-2 text-gray-500">
              Maîtrisez les outils et techniques pour analyser des données
              massives et en extraire des informations utiles à l'aide des
              technologies modernes.
            </p>
          </div>

          {/* Service 7 - Développement Web */}
          <div
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            <Laptop className="h-12 w-12 text-teal-500" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Développement Web
            </h3>
            <p className="mt-2 text-gray-500">
              Apprenez à créer des sites web interactifs et dynamiques en
              utilisant des technologies comme HTML, CSS, JavaScript et les
              frameworks modernes.
            </p>
          </div>

          {/* Service 8 - Cloud Computing */}
          <div
            className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <Cloud className="h-12 w-12 text-indigo-500" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Cloud Computing
            </h3>
            <p className="mt-2 text-gray-500">
              Apprenez à déployer des applications dans le cloud et à exploiter
              les services cloud pour une infrastructure flexible et scalable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuiSommeNous;
