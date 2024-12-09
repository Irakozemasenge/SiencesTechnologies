import React from "react";

const testimonials = [
  {
    id: 1,
    content:
      "Cette plateforme a transformé ma façon d'apprendre. Les cours sont bien structurés et les projets pratiques m'ont permis de vraiment maîtriser les concepts.",
    author: "Jean-Baptiste Nkurunziza",
    role: "Étudiant en Informatique",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    content:
      "J'ai pu acquérir de nouvelles compétences en IA tout en travaillant à temps plein. La flexibilité et la qualité des cours sont exceptionnelles.",
    author: "Alice Niyonkuru",
    role: "Développeur Web",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    content:
      "La communauté est incroyablement active et solidaire. J'ai trouvé des mentors et des amis qui partagent ma passion pour les sciences.",
    author: "Pierre Hakizimana",
    role: "Chercheur en Physique",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    content:
      "Les cours sont très bien détaillés et j'ai pu améliorer mes compétences tout en collaborant avec des professionnels expérimentés.",
    author: "Chantal Nshimirimana",
    role: "Designer UI/UX",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    content:
      "La plateforme offre une grande diversité de sujets, et je peux étudier à mon rythme tout en obtenant des certifications reconnues.",
    author: "Emmanuel Ndikuriyo",
    role: "Ingénieur Systèmes",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    content:
      "J'ai trouvé de vrais défis dans les projets proposés et une grande richesse dans l'apprentissage des technologies modernes.",
    author: "Isabelle Iradukunda",
    role: "Développeur Mobile",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ce que disent nos étudiants
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Découvrez les expériences de ceux qui ont déjà rejoint notre
            communauté
          </p>
        </div>
        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="lg:col-span-1"
              data-aos="fade-up" // Ajouter AOS pour l'animation
            >
              <div className="h-full flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden p-8">
                <blockquote className="mt-6 text-gray-700">
                  <p className="text-lg font-medium">"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-8 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-base text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
