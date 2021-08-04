import React from 'react';
import './Pagination.css'

function Pagination({ ctsPerPage, totalCts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCts / ctsPerPage); i++) {
        pageNumbers.push(i);

    }
    return (
        <div id='paginationDiv' className="py-2">
            <ul className="flex pl-0 rounded list-none flex-wrap">
                {pageNumbers.map(num => (
                        <a href="/home" key={num} className = 'PaginationLinkButton' onClick={(e) => paginate(num, e)}>
                            <h5 className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">{num}</h5>
                        </a>
                ))}
                </ul>
        </div>
    )
}

export default Pagination;
