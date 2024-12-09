import React from "react";
import { Rocket, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Apprenez la Science et</span>
                <span className="block text-indigo-600">
                  la Technologie à votre rythme
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Découvrez une nouvelle façon d'apprendre avec notre plateforme
                interactive. Des cours de qualité, des projets pratiques et une
                communauté passionnée vous attendent.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="/cours"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Commencer
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="text-center" data-aos="fade-up">
                  <div className="flex justify-center">
                    <Rocket className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Apprentissage Flexible
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Apprenez à votre rythme, où que vous soyez
                  </p>
                </div>
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex justify-center">
                    <Users className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Communauté Active
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Échangez avec des passionnés comme vous
                  </p>
                </div>
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="flex justify-center">
                    <Award className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Certifications
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Obtenez des certificats reconnus
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;
