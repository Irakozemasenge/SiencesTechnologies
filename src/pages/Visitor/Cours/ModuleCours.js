/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { Drawer } from "rsuite";
import { toast } from "react-toastify";
import { questionsReponses } from "../../../Data/Data";

function ModuleCours() {
  const navig = useNavigate();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [detailLocal, SetDetailLocal] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: option,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allAnswered = questionsReponses.every(
      (question) => selectedAnswers[question.id]
    );

    if (!allAnswered) {
      toast.warning("Veuillez répondre à toutes les questions.");
      return;
    }

    let totalScore = 0;
    questionsReponses.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        totalScore += 2; // Ajouter 2 points pour chaque bonne réponse
      }
    });
    setScore(totalScore);
    setShowCorrectAnswers(true);
    console.log("Réponses sélectionnées:", selectedAnswers);
  };

  return (
    <div className="px-4 overflow-hidden">
      <div
        onClick={() => navig("/cours/detail")}
        className="w-7 h-7 mt-2 bg-blue-500 rounded-full cursor-pointer flex justify-center items-center text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
          />
        </svg>
      </div>
      <div className="grid py-8 grid-cols-1 px-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Module 1 : Introduction à l'Agroécologie
          </h1>
          <div className="ml-3">
            <h2 className="text-xl font-bold mb-2 text-blue-500">
              1.1 Qu'est-ce que l'agroécologie ?
            </h2>
            <p className="text-lg">
              L'agroécologie est une approche holistique de l'agriculture qui
              intègre les principes écologiques dans la production alimentaire.
              Elle vise à créer des systèmes agricoles durables, résilients et
              équitables.
            </p>

            <div className="w-full mt-2 h-[70vh]">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=3jGGXF4_YiE"
                controls={true}
              />
            </div>

            <div data-aos="fade-up" className="container mx-auto py-2">
              <h2
                data-aos="fade-up"
                className="text-2xl font-bold mb-4 text-blue-500"
              >
                1.2 Principes fondamentaux de l'agroécologie
              </h2>
              <ul data-aos="fade-up" className="space-y-2 list-disc">
                <li className="ml-10 text-lg">
                  Augmenter le recyclage de la biomasse et optimiser la
                  disponibilité des nutriments
                </li>
                <li className="ml-10 text-lg">
                  Assurer des conditions de sol favorables à la croissance des
                  plantes
                </li>
                <li className="ml-10 text-lg">
                  Minimiser les pertes d'énergie solaire, d'air et d'eau
                </li>
                <li className="ml-10 text-lg">
                  Diversifier les espèces et les ressources génétiques dans les
                  agroécosystèmes
                </li>
                <li className="ml-10 text-lg">
                  Améliorer les interactions biologiques bénéfiques et les
                  synergies entre les composantes de l'agrobiodiversité
                </li>
              </ul>

              <h2
                data-aos="fade-up"
                className="text-2xl font-bold mt-8 mb-4 text-blue-500"
              >
                1.3 Importance de l'agroécologie pour le Burundi
              </h2>
              <p data-aos="fade-up" className="mb-4 text-lg">
                Au Burundi, l'agroécologie offre des solutions durables pour :
              </p>
              <ul data-aos="fade-up" className="space-y-2 list-disc">
                <li className="ml-10 text-lg">
                  Améliorer la sécurité alimentaire face aux défis climatiques
                </li>
                <li className="ml-10 text-lg">
                  Préserver la biodiversité locale et les savoirs traditionnels
                </li>
                <li className="ml-10 text-lg">
                  Renforcer la résilience des petits exploitants agricoles
                </li>
                <li className="ml-10 text-lg">
                  Réduire la dépendance aux intrants chimiques coûteux
                </li>
                <li className="ml-10 text-lg">
                  Lutter contre l'érosion des sols et la dégradation des terres
                </li>
              </ul>

              <h2
                data-aos="fade-up"
                className="text-2xl font-bold mt-8 mb-4 text-blue-500"
              >
                1.4 Exemple local : La ferme agroécologique de Bukirasazi
              </h2>
              <p data-aos="fade-up" className="text-lg">
                Découvrez comment la ferme de Bukirasazi, située dans la
                province de Gitega, a réussi à mettre en pratique les principes
                agroécologiques pour améliorer sa productivité et sa résilience
                face aux changements climatiques.
              </p>
            </div>
            <div
              data-aos="fade-up"
              onClick={() => SetDetailLocal(true)}
              className="bg-blue-600 mt-5 w-max cursor-pointer hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded inline-block"
            >
              Lire d'étude de cas
            </div>

            <div data-aos="fade-up" className="container mx-auto mt-10">
              <h2 data-aos="fade-up" className="text-2xl font-bold mb-4">
                Quiz rapide
              </h2>

              <div>
                <form className="space-y-2" onSubmit={handleSubmit}>
                  {questionsReponses.map((data, i) => (
                    <div key={data.id} data-aos="fade-up" className="mb-8">
                      <p className="font-bold my-5 text-xl">{data.question}</p>
                      <div className="space-y-2 text-lg flex flex-col">
                        {data.options.map((option, index) => (
                          <label
                            key={index}
                            htmlFor={`option-${data.id}-${index}`}
                            className="flex cursor-pointer w-max items-center gap-2"
                          >
                            <div className="w-4 h-4 rounded-full border flex justify-center items-center relative border-blue-500">
                              <input
                                checked={selectedAnswers[data.id] === option}
                                onChange={() =>
                                  handleOptionChange(data.id, option)
                                }
                                id={`option-${data.id}-${index}`}
                                hidden
                                name={`options-${data.id}`}
                                type="radio"
                                className="h-4 w-4 border-gray-300 rounded"
                              />
                              {selectedAnswers[data.id] === option && (
                                <div className="w-2.5 h-2.5 rounded-full flex justify-center items-center top-[2px] absolute bg-blue-500"></div>
                              )}
                            </div>
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Vérifier mes réponses
                  </button>
                </form>

                <div data-aos="fade-up" className="text-left mt-10">
                  <div className="text-blue-600 w-max cursor-pointer hover:text-green-600 border border-blue-500 px-4 py-2 rounded">
                    Passer au Module 2 : Techniques de Conservation des Sols
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        open={detailLocal}
        onClose={() => SetDetailLocal(false)}
        size="sm"
      >
        <div>
          <h3>Etude de cas : La ferme agroécologique de Bukirasazi</h3>
          <p>...</p>
        </div>
      </Drawer>
    </div>
  );
}

export default ModuleCours;
