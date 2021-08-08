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
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={FotoPablo} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Pablo Gomila</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/pablogomila/' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/pablogomila' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={FotoSibyl} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Sibyl Perez</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/sibyl-perez/' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/sibylperez' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={FotoMauro} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Mauro Vera</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/maurovera/' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/Mauro069' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={FotoManu} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Manuel Miglioranza</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/manuel-miglioranza-arg/' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/mmiglioranza22' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={FotoDario} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Dario Gomez</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/dario-gomez-01666873/' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/Zven7' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={FotoJavi} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Javier Ojeda</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/ojedaajavier/' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/iCueLa' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={FotoDouglas} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Douglas San Anton Bianchi</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/douglas-san-anton-bianchi-1127941b2/?originalSubdomain=ar' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/Douglas-san-anton' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={FotoEli} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Eliana Ruiz</h2>
                                    <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                                    
                                    <span className="inline-flex">
                                        
                                        <a rel='noreferrer' href='https://www.linkedin.com/in/elianaruiz91/' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                                        </a>
                                        <a rel='noreferrer' href='https://github.com/Anailek' target="_blank" className="ml-2 text-gray-500">
                                            <img style={{width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                                        </a>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TeamComponent
