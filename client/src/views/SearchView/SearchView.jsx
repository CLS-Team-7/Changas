import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search'



function SearchView() {
    return (
        <div className="Home">
            <Header />
            <Search />
            <Footer />
        </div>
    )
}

export default SearchView;