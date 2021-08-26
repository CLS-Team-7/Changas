import React from 'react';
import './TeamComponent.css';
import FotoPablo from '../../assets/FotoPablo.jpg';
import FotoSibyl from '../../assets/FotoSibyl.jfif';
import FotoMauro from '../../assets/FotoMauro.jfif';
import FotoManu from '../../assets/FotoManu.jfif';
import FotoDario from '../../assets/FotoDario.jfif';
import FotoJavi from '../../assets/FotoJavi.jfif';
import FotoEli from '../../assets/FotoEli.jfif';
import FotoDouglas from '../../assets/FotoDouglas.jfif';


function TeamComponent() {
    return (
        <div className="TeamComponent">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">NOSOTROS SOMOS CHANGAS</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Nuestro equipo de desarrollo.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <div className='shadowForDiv'>
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 polygonHexa" src={FotoPablo} />
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Pablo Gomila</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/pablogomila/' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/pablogomila' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <div className="shadowForDiv">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 polygonHexa" src={FotoSibyl} />
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Sibyl Perez</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/sibyl-perez/' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/sibylperez' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left ">
                                <div className='shadowForDiv'>
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 polygonHexa " src={FotoMauro} />
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Mauro Vera</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/maurovera/' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/Mauro069' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <div className="shadowForDiv">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 polygonHexa" src={FotoManu} />
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Manuel Miglioranza</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/manuel-miglioranza-arg/' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/mmiglioranza22' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <div className="shadowForDiv">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 polygonHexa" src={FotoDario} />
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Dario Gomez</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/dario-gomez-01666873/' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/Zven7' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <div className="shadowForDiv">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 polygonHexa" src={FotoJavi} />
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Javier Ojeda</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/ojedaajavier/' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/iCueLa' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <div className="shadowForDiv">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 polygonHexa" src={FotoDouglas} />
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Douglas San Anton Bianchi</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/douglas-san-anton-bianchi-1127941b2/?originalSubdomain=ar' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/Douglas-san-anton' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <div className="shadowForDiv">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 polygonHexa drop-shadow-md" src={FotoEli} />
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Eliana Ruiz</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/elianaruiz91/' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/Anailek' target="_blank" className="ml-2 text-gray-500 transition-transform transform hover:scale-125">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                
                <clipPath id="roundedPolygon">
                    <path
                    d="M79 6.237604307034a32 32 0 0 1 32 0l52.870489570875 30.524791385932a32 32 0 0 1 16 27.712812921102l0 61.049582771864a32 32 0 0 1 -16 27.712812921102l-52.870489570875 30.524791385932a32 32 0 0 1 -32 0l-52.870489570875 -30.524791385932a32 32 0 0 1 -16 -27.712812921102l0 -61.049582771864a32 32 0 0 1 16 -27.712812921102"
                    />
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default TeamComponent
