import React from 'react';
import './Pagination.css'

function Pagination({ ctsPerPage, totalCts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCts / ctsPerPage); i++) {
        pageNumbers.push(i);

    }
    return (
        <div id='paginationDiv'>
                {pageNumbers.map(num => (
                        <a href="/home" key={num} className = 'PaginationLinkButton' onClick={(e) => paginate(num, e)}>
                            <h5 >{num}</h5>
                        </a>
                ))}
        </div>
    )
}

export default Pagination;
