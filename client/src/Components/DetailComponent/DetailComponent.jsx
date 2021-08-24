import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearSinglePost, getSinglePost } from '../../Redux/actions'
import FavoriteComponent from '../FavoriteComponent/FavoriteComponent';
import SafeTips from "../SafeTips/SafeTips";
import Reviews from "../Review/Reviews";
import { useAuth0 } from "@auth0/auth0-react";
import Questions from '../Question/Questions';
import MapComponent from '../MapComponent/MapComponent';


function DetailComponent() {
    const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const singlePost = useSelector(state => state.singlePost);
    const { title, image, description, priceRange, category, specialty, user, location } =
        useSelector((state) => state.singlePost);

    let { id } = useParams();

    useEffect(() => {
        dispatch(getSinglePost(id));
        // dispatch(user del post para sacar el puntaje)
        dispatch(clearSinglePost());
    }, [dispatch, id]);
    //const singlePost = useSelector(state => state.singlePost)

    return ( 
        <>
        {
            !singlePost ? <div>Cargando</div> :
            <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 relative">
                        <div className="absolute top-0 right-0">
                            <FavoriteComponent id={id} title={title} img={image} />
                        </div>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{category?.title}</h2>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{specialty?.title}</h2>

                        <p className="m-2 leading-relaxed"> Puntaje del usuario: {/*consumir de algun estado interno del componente*/}</p>
                        <p className="m-2 leading-relaxed"> Trabajos realizados: {/*consumir de algun estado interno del componente*/}</p>

                        <p className="m-2 leading-relaxed pb-2">"{description}"</p>

                        <div className="flex flex-row">
                            <div className="title-font font-medium text-2xl text-gray-900">Precio Base: {!isNaN(priceRange) ? <span>${priceRange}</span> : <span>{priceRange}</span>}</div>
                            <SafeTips />
                        </div>
                        <div className="flex flex-row space-x-5">
                            <div>
                                {isAuthenticated /* && user?.id !== userLogin?.id*/ ? /*el boton se renderiza si esta autenticado Y el usuario del login NO es el usuario del posteo */
                                
                                    <Link to={`/reviews`} className="flex pt-4 ml-auto"><button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Dejar reseña</button></Link>

                                    : null}
                            </div>
                            <div>
                                {isAuthenticated /*&& user?.id !== userLogin?.id */ ?
                                    <Link to={`/question`} className="flex pt-4 ml-auto"><button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Hacer pregunta</button></Link>
                                    : null}
                            </div>
                            <div>
                                {isAuthenticated /*&& user?.id !== userLogin?.id */ ?
                                    <Link to={`/report`} className="flex pt-4 ml-auto"><button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Reportar anuncio</button></Link>
                                    : null}
                            </div>
                        </div>
                        
                    </div>
                </div>
                    <div className="pt-4 grid grid-row justify-center auto-cols-auto" >
                    <div style={{width: "800px", height: "200px"}}>
                    <MapComponent googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.REACT_APP_GOOGLE_KEY}` }
                    location={location}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}/>
                </div>
            </div>
            </div>
            
            <div className="self-center place-content-center">
                <Reviews />
            </div>
            <div className="self-center place-content-center">
                <Questions />
            </div>
            
        </section>}
        </>
    )
}

export default DetailComponent;
