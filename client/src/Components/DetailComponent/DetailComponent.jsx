import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearSinglePost, getSinglePost } from '../../Redux/actions'
import FavoriteComponent from '../FavoriteComponent/FavoriteComponent';
import SafeTips from "../SafeTips/SafeTips";
import Reviews from "../Review/Reviews";

function DetailComponent() {
    const dispatch = useDispatch();
    const { title, image, description, priceRange, category, specialty } =
        useSelector((state) => state.singlePost);
    let { id } = useParams();

    useEffect(() => {
        dispatch(getSinglePost(id));
        dispatch(clearSinglePost());
    }, [dispatch, id]);


    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <FavoriteComponent />
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{category?.title}</h2>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{specialty?.title}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">5</span>  {/* <=== Cambiar ESTO CUANDO ESTE LA DB */}
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                            </span>
                        </div>
                        <p className="leading-relaxed"> Descripción : {description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">Precio Base: {priceRange?.map(e => `$${e}   `)}</span>
                            <SafeTips />
                        </div>
                        <Link to={`/reviews`} className="flex ml-auto"><button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Dejar reseña</button></Link>
                    </div>
                </div>
            </div>
            <div className="self-center place-content-center">
            <Reviews />
            </div>
        </section>
    )
}

export default DetailComponent;
