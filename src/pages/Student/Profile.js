import React from "react";

function Profile() {
  const user = {
    name: "Emerusenge Channelle",
    email: "emerusengechanelle664@gmail.com",
    phone: "62008505",
    location: "Bujumbura, Burundi",
    bio: "Développeur passionné par les technologies, avec une spécialisation en Node.js, React, et développement mobile.",
    profilePicture:
      "https://media.istockphoto.com/id/1277665587/photo/staying-connected.webp?s=2048x2048&w=is&k=20&c=D5WsZaoNddPa6R9UpvgDhEYBmCRoSjpnEMf6_tV3cVI=", // Remplacer par une vraie image
    paymentMethod: "Carte bancaire - Visa",
    favoriteSubjects: [
      "Développement web",
      "Intelligence artificielle",
      "Blockchain",
    ],
    skills: ["Node.js", "React", "React Native", "Python", "SQL"],
    interests: ["Lecture", "Voyages", "Technologie", "Musique"],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Profile étudiant
      </h1>
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-20 h-20 object-cover rounded-full"
        />
        <div>
          <h1 className="text-2xl font-semibold text-indigo-600">
            {user.name}
          </h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
          <p className="text-gray-600">{user.location}</p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-600">Biographie</h2>
        <p className="text-gray-700 mt-2">{user.bio}</p>
      </div>

      {/* Additional Information */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-600">
          Informations supplémentaires
        </h2>
        <ul className="list-disc pl-5 text-gray-700 mt-2">
          <li>
            <strong>Profession :</strong> Développeur Full-stack
          </li>
          <li>
            <strong>Technologies préférées :</strong> Node.js, React, React
            Native
          </li>
          <li>
            <strong>Langues :</strong> Kirundi, Français, Anglais
          </li>
          <li>
            <strong>Objectif :</strong> Développer des solutions innovantes en
            utilisant les nouvelles technologies.
          </li>
        </ul>
      </div>

      {/* Payment Information */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-600">
          Informations de paiement
        </h2>
        <p className="text-gray-700 mt-2">
          Méthode de paiement : {user.paymentMethod}
        </p>
      </div>

      {/* Favorite Subjects */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-600">
          Sujets favoris
        </h2>
        <ul className="list-disc pl-5 text-gray-700 mt-2">
          {user.favoriteSubjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-600">Compétences</h2>
        <ul className="list-disc pl-5 text-gray-700 mt-2">
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Interests */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-600">
          Centres d'intérêt
        </h2>
        <ul className="list-disc pl-5 text-gray-700 mt-2">
          {user.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
