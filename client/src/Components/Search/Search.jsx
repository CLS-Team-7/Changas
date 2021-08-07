import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { searchByTitle } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination'
import SearchComponent from './SearchComponent';


function Search() {
  const dispatch = useDispatch();
  let { title } = useParams()

  const searchTitle = useSelector(state => state.searchByTitle)
  console.log(searchTitle)
  useEffect(() => {
    dispatch(searchByTitle(title));
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
        <SearchComponent posts={currentPosts} />
      </div>
      <div className="flex justify-center my-14">
        <Pagination ctsPerPage={postsPerPage} totalCts={searchTitle.length} paginate={paginate} />
      </div>
    </div>
  )
}

export default Search;


