import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { searchByTitle, searchByTitleClean } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination'
import SearchComponent from './SearchComponent';
import { Link } from 'react-router-dom';


function Search() {
  const dispatch = useDispatch();
  let { title } = useParams()

  const searchTitle = useSelector(state => state.searchByTitle)
  console.log(searchTitle)
  useEffect(() => {
    dispatch(searchByTitle(title));
    return dispatch(searchByTitleClean())
  }, [dispatch, title]);

  //useSelector()

  //Pagination
  const [currentPost, setCurrentPost] = useState(1);
  const postsPerPage = 12;

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPost(pageNumber);
  }

  const indexOfLastPost = currentPost * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchTitle.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts)

  return (
    <div className="container px-5 py-24 m-auto ">
      <div>

        {
          searchTitle.length !== 0 ? <SearchComponent posts={currentPosts} /> : <div classNameName="NotFound">
            <div className="bg-white marginauto dark:bg-gray-800 h-full NotFoundContent min-h-screen">
              <div className="text-center w-full mx-auto   sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-red-600 dark:text-white sm:text-4xl">
                  <span className="block font-extrabold text-Rich__Black">Error 404</span>
                  <span className="block text-red-600">No se encontro el Servicio</span>
                </h2>
                <div className="lg:mt-0 lg:flex-shrink-0">
                  <div className="mt-5 inline-flex rounded-md">
                    <Link to="/home" className="m-5 ">
                      <button className="transition duration-500 ease-in-out px-10 py-2 transform hover:-translate-y-1 hover:scale-110 rounded-full text-white  bg-Viridian__Green font-bold hover:bg-Blue__Shappire ">
                        Home
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="flex justify-center my-14">
        <Pagination ctsPerPage={postsPerPage} totalCts={searchTitle.length} paginate={paginate} />
      </div>
    </div>
  )
}

export default Search;


