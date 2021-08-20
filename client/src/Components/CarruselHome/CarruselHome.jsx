import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import CardPost from '../CardPost/CardPost';
import CarruselCard from './CarruselCard';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function CarruselHome({ type, post }) {
    const postList = useSelector(state => state.postList)
    const Premium = postList.filter(e => e.isPremium)
    return (
        <div className=" container p-3">
            <div className="p-5">
                <h1 className="title-font  text-start text-gray-900 mb-3 font-extrabold text-5xl text-left">{type}</h1>

            </div>
            <Carousel responsive={responsive} swipeable={false}
                draggable={false}
                showDots={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                focusOnSelect={false}
                slidesToSlide={3}
                itemClass="carousel-item-padding-40-px carousel-item-outline-none">
                {postList?.map(e => {
                    return <CarruselCard
                        title={e.title}
                        img={e.image}
                        key={e.id}
                        category={e.category}
                        id={e.id}
                        isPremium={e.isPremium}
                    />
                })}
            </Carousel>
        </div>
    )
}

export default CarruselHome
