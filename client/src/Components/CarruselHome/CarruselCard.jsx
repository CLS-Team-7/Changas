import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteComponent from '../FavoriteComponent/FavoriteComponent'

function CarruselCard({ title, img, category, id, isPremium }) {
    return (
        <div className="p-4 rounded-lg m-1 " key={id}>
            <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden duration-200 shadow hover:shadow-xl relative">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden duration-200 shadow hover:shadow-xl relativ ">
                    <Link to={`/posts/${id}`}><img src={img} alt="" className="lg:h-48 md:h-36 w-full object-cover object-center relative rounded-lg" /></Link>
                    {isPremium
                        ? <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black w-1/4 text-center rounded-r-xl p-2 font-medium absolute top-0 left-0 p-2">Premium</div>
                        : <span></span>
                    }
                    <div className="absolute button-0 right-0 p-1 ">
                        <FavoriteComponent id={id} img={img} title={title} />
                    </div>
                    <h2 className="tracking-widest text-xs title-font font-min text-gray-400 mb-1 mt-6 truncate ">{category.title}</h2>
                    <div className="h-24">
                        <Link to={`/posts/${id}`}><h1 className="title-font text-lg font-medium text-gray-900 mb-3 p-6">{title}</h1></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarruselCard
