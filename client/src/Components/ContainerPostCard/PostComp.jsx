import React from 'react'
import CarruselHome from '../CarruselHome/CarruselHome'

function PostComp({ posts, offers, petition, premium }) {
    if (posts?.length === 0) {
        return (
            <div className="container px-5 py-24 m-auto ">
                <h1>No hay posts para esta categoría aún</h1>
            </div>
        )
    }
    return (
        <div className=" container flex flex-wrap -m-4 ">
            <CarruselHome type={"Premium"} post={premium} validate={false} />
            <CarruselHome type={"Ofertas de servicios"} post={offers} validate={true} link={"offer"} />
            <CarruselHome type={"Solicitudes de servicios"} post={petition} validate={true} link={"petition"} />
        </div>
    )
}

export default PostComp
