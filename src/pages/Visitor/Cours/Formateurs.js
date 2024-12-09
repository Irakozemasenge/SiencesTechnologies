/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Drawer } from 'rsuite'
import FormulaireConct from '../FormulaireConct/FormulaireConct'
import InscireFormation from '../FormulaireConct/InscireFormation'
import { useNavigate } from 'react-router-dom'

function Formateurs() {
  
    const navig = useNavigate()
    const [isAtelierComminity, SetisAtelierComminity] = useState(false)
    const [isInsiscrire, SetIsSincrire] = useState(false)
    const [issLoadingImage, SetIsLoadingImage] = useState(false)
    const [issLoadingImage1, SetIsLoadingImage1] = useState(false)
    const [issLoadingImage2, SetIsLoadingImage2] = useState(false)

    const [mobile, SetMobile] = useState(window.innerWidth < 1226)
    const [mobile1, SetMobile1] = useState(window.innerWidth < 1157)
    useEffect(() => {
        const hundleSize = () => {
            SetMobile(window.innerWidth < 1226)
            SetMobile1(window.innerWidth < 1157)
        }
        window.addEventListener('resize', hundleSize)
        return () => {
            window.removeEventListener('resize', hundleSize)
        }
    })
    return (
        <div data-aos-duration="1000" ref={formateursRef} className=" relative rounded-lg p-2 sm:p-6 my-6">
            <div className={`grid  ${mobile ? 'grid-cols-1' : 'grid-cols-2'} gap-2   items-center`}>
                <div className='full'>
                    <h2 data-aos="fade-down" className="text-2xl font-bold mb-4">Devenez un Éducateur Environnemental Certifié</h2>
                    <p data-aos="fade-down" className="mb-4 text-[17px]">
                        Le programme de Formation des Formateurs d'Umuhira vise à créer un réseau d'éducateurs environnementaux qualifiés à travers le Burundi. Cette formation intensive vous donnera les compétences et les connaissances nécessaires pour sensibiliser et éduquer efficacement sur les enjeux environnementaux spécifiques à notre pays.
                    </p>
                    <div data-aos="fade-down" className='bg-[#3ad12c1e] p-2 border-l-2 border-[#3ad12c] rounded-xl'>
                        <h3 className="text-lg font-semibold mb-2">Objectifs de la Formation</h3>
                        <ul className="list-disc pl-1 mb-4">
                            <li className=' ml-[2em] text-lg'>Maîtriser les concepts clés de l'écologie et du développement durable</li>
                            <li className=' ml-[2em] text-lg'>Développer des compétences pédagogiques adaptées à l'éducation environnementale</li>
                            <li className=' ml-[2em] text-lg'>Concevoir et mettre en œuvre des programmes éducatifs innovants</li>
                            <li className=' ml-[2em] text-lg'>Acquérir des techniques de communication efficaces pour sensibiliser divers publics</li>
                            <li className=' ml-[2em] text-lg'>Comprendre les enjeux environnementaux spécifiques au Burundi et les solutions locales</li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-up" className='w-full relative animation  h-full'>
                    <img onLoad={() => SetIsLoadingImage(false)} className='rounded' src='https://naturelcd.net/wp-content/uploads/2023/04/IMG-20230425-WA0020-1024x683.jpg' alt='  ' />
                    {issLoadingImage && (
                        <div className={`absolute inset-0 flex items-center justify-center ${isDark === "dark" ? 'bg-[#151616]' : 'bg-white'}    imgLoading1`}>
                            <svg
                                className="animate-spin h-7 w-7 text-[#5dca32]"
                                viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#5dca32" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="#5dca32" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.598A4.002 4.002 0 008 12H6v5.291z"></path>
                            </svg>
                        </div>
                    )}
                </div>
            </div>

            <h3 className="text-lg mt-10 font-semibold mb-2">Structure du Programme</h3>
            <p className="mb-4 text-[17px] italic">
                La formation se déroule sur 12 semaines, combinant des sessions en présentiel et des modules en ligne :
            </p>
            <div className='bg-[#3ad12c1e] p-2 border-l-2 border-[#3ad12c] rounded-xl'>
                <div data-aos="fade-up" data-aos-delay="100" onClick={() => navig("/cours/module")} className="cursor-pointer rounded-md p-2 ">
                    <div className="sm:text-md text-xs font-semibold ">Module 1 : Fondamentaux de l'écologie et du développement durable (2 semaines)</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="150" onClick={() => navig("/cours/module")} className="cursor-pointer rounded-md p-2">
                    <div className="text-md font-semibold ">Module 2 : Enjeux environnementaux spécifiques au Burundi (2 semaines)</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" onClick={() => navig("/cours/module")} className="cursor-pointer rounded-md p-2">
                    <div className="sm:text-md text-xs font-semibold ">Module 3 : Pédagogie et techniques d'animation en éducation environnementale (2 semaines)</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="250" onClick={() => navig("/cours/module")} className="cursor-pointer rounded-md p-2">
                    <div className="sm:text-md text-xs font-semibold ">Module 4 : Conception de programmes et de ressources éducatives (2 semaines)</div>
                </div>

                <div data-aos="fade-up" data-aos-delay="300" onClick={() => navig("/cours/module")} className="cursor-pointer rounded-md p-2">
                    <div className="sm:text-md text-xs font-semibold">Module 5 : Communication et sensibilisation environnementale (2 semaines)</div>
                </div>

                <div data-aos="fade-up" data-aos-delay="350" onClick={() => navig("/cours/module")} className="cursor-pointer rounded-md p-2">
                    <div className="sm:text-md text-xs font-semibold">Module 6 : Projet pratique et évaluation finale (1 semaine)</div>
                </div>
            </div>


            <div className=" rounded-lg  mt-10  my-6">
                <div className={`grid  ${mobile1 ? 'grid-cols-1' : 'grid-cols-2'} gap-5`}>
                    <div data-aos="fade-right" className='w-full'>
                        <h2 className="text-2xl font-bold mb-4">Méthodes d'Apprentissage</h2>
                        <ul className="list-disc pl-6  mb-4">
                            <li className=' ml-[1em] sm:ml-[3em] sm:text-lg'>Cours théoriques et études pratiques</li>
                            <li className=' ml-[1em] sm:ml-[3em] sm:text-lg'>Études de cas et simulation de situations</li>
                            <li className=' ml-[1em] sm:ml-[3em] sm:text-lg'>Sorties sur le terrain et observations directes</li>
                            <li className=' ml-[1em] sm:ml-[3em] sm:text-lg'>Travaux de groupe et présentations</li>
                            <li className=' ml-[1em] sm:ml-[3em] sm:text-lg'>Mentorat personnalisé</li>
                            <li className=' ml-[1em] sm:ml-[3em] sm:text-lg'>Plateforme d'apprentissage en ligne interactive</li>
                            <div className='ml-[0em] sm:ml-[3em] relative animation mt-[2em] rounded-xl overflow-hidden'>
                                <img onLoad={() => SetIsLoadingImage1(false)} className='h-auto w-full' src='https://www.fondation-merieux.org/wp-content/uploads/2023/09/ateliers-tech_benin-resaolab-septembre.jpg' alt='  ' />
                                {issLoadingImage1 && (
                                    <div className={`absolute inset-0 flex items-center justify-center ${isDark === "dark" ? 'bg-[#151616]' : 'bg-white'}    imgLoading1`}>
                                        <svg
                                            className="animate-spin h-7 w-7 text-[#5dca32]"
                                            viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#5dca32" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="#5dca32" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.598A4.002 4.002 0 008 12H6v5.291z"></path>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </ul>

                        <div className='w-10 m-1 animate-ping absolute z-0 left-2  rounded-full h-10 bg-orange-500'></div>

                    </div>
                    <div data-aos="fade-left" className='w-full'>
                        <h2 className="text-2xl font-bold mb-4">Certification</h2>
                        <p className=" mb-4">
                            À l'issue de la formation, les participants ayant satisfait à toutes les exigences recevront la certification officielle d'Éducateur Environnemental Umuhira, reconnu par le Ministère de l'Environnement du Burundi.
                        </p>
                        <blockquote className="border-l-[0.5em] border-[#3ad12c] pl-4  italic mb-4">
                            "Cette formation a considérablement transformé ma façon d'aborder l'éducation environnementale. Je me sens désormais outillé pour mener des actions de sensibilisation efficaces."
                            <cite className="block font-normal">- Jean-Pierre Hakizimana, Éducateur Environnemental Certifié, Promotion 2023</cite>
                        </blockquote>
                        <div className='mt-[2em] relative animate-bounce-up-down rounded-xl overflow-hidden'>
                            <img onLoad={() => SetIsLoadingImage2(false)}
                                className='h-auto w-full'
                                src='https://www.whizlabs.com/blog/wp-content/uploads/2019/12/importance_of_certifications.png' alt='  ' />
                            {issLoadingImage2 && (
                                <div className={`absolute inset-0 flex items-center justify-center ${isDark === "dark" ? 'bg-[#151616]' : 'bg-white'}    imgLoading1`}>
                                    <svg
                                        className="animate-spin h-7 w-7 text-[#5dca32]"
                                        viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#5dca32" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="#5dca32" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.598A4.002 4.002 0 008 12H6v5.291z"></path>
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <h2 data-aos="fade-up" className="text-2xl font-bold mb-4 mt-10">Prochaines Sessions</h2>
                <div data-aos="fade-up" className='bg-[#3ad12c1e] p-2 border-l-2 border-[#3ad12c] rounded-xl'>
                    <div className=" rounded-md p-1">
                        <div className="text-md font-semibold">Session 1 : Du 15 mars au 7 juin 2024</div>
                    </div>
                    <div className=" rounded-md p-1">
                        <div className="text-md font-semibold">Session 2 : Du 1er septembre au 24 novembre 2024</div>
                    </div>
                </div>
                <h2 data-aos="fade-up" className="text-2xl font-bold mb-2 mt-10">Tarifs et Financement</h2>
                <p data-aos="fade-up" className=" mb-2">
                    Le coût de la formation est de 500 000 BIF. Des options de paiement échelonné sont disponibles. Umuhira offre également un nombre limité de bourses pour les candidats méritants.
                </p>
                <div onClick={() => SetIsSincrire(true)} data-aos="fade-up" className="bg-[#50914b]  cursor-pointer hover:bg-[#3ad12c]  text-white font-semibold py-2 px-4 rounded inline-block">S'inscrire à la Formation</div>
            </div>



            <Drawer open={isInsiscrire} onClose={() => SetIsSincrire(false)} placement='top' size="full">
                <Drawer.Header>
                    <Drawer.Title className='text-center font-bold uppercase'>Inscription à la formation en ligne</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <InscireFormation />
                </Drawer.Body>
            </Drawer>

            <Drawer size="full" open={isAtelierComminity} placement='bottom' onClose={() => SetisAtelierComminity(false)}>
                <Drawer.Header>
                    <Drawer.Title className='text-center uppercase'>Formulaire de contact</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <FormulaireConct />
                </Drawer.Body>
            </Drawer>
        </div>
    )
}

export default Formateurs