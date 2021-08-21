import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
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


function CarruselHome({ type, post, link, validate }) {
    return (
        <div className=" container p-3">
            <div className="p-5 flex flex-row justify-between relative  ">
                <h1 className="title-font  text-start text-gray-900 mb-3 font-extrabold text-5xl text-left">{type}</h1>
                {validate ?
                    <Link to={`/filter/${link}`} className="text-bold text-2xl absolute  bottom-0 hover:text-indigo-600">ver mas <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></Link> :
                    <span></span>

                }


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
                {post?.map(e => {
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
