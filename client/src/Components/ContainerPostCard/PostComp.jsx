import React from 'react'
import CardPost from '../CardPost/CardPost'
import CarruselHome from '../CarruselHome/CarruselHome'

function PostComp({ posts }) {
    if (posts?.length === 0) {
        return (
            <div className="container px-5 py-24 m-auto ">
                <h1>No hay posts para esta categoría aún</h1>
            </div>
        )
    }
    return (
        <div className=" container flex flex-wrap -m-4 ">
            <CarruselHome type={"Premium"} post={""} />
            <CarruselHome type={"Ofertas de servicios"} post={""} />
            <CarruselHome type={"Solicitudes de servicios"} post={""} />
        </div>
    )
}

export default PostComp
