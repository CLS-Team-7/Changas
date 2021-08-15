import React from "react";
import Rating from "./Rating"
import "./Review.css"


function Review(props) {
    const { createdAt, rating, description, fullName } = props;
    return (
        <div>
            <div className="ml-6">
                <p className="flex items-baseline">
                    <span className="text-gray-600 font-bold">{fullName}</span>
                    <span className="ml-2 text-green-600 text-xs">Cuenta verificada</span>
                </p>
                <div className="flex items-center mt-4 text-gray-600">
                    <div className="flex items-center">
                        <span className="text-sm">Calidad del Servicio</span>
                        <div className="flex items-center ml-2">
                            <span>{createdAt}</span>
                            <div>
                                <i className='commentsIcons'><Rating rating={rating} /></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="mt-1 text-justify" >"{description}"</p>
                </div>
            </div>
        </div>

    )
}

export default Review