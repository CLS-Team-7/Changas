import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { searchByName } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination'
import PostComp from '../ContainerPostCard/PostComp';

function Search() {
  const dispatch = useDispatch();
  let { title } = useParams()

  const searchTitle = useSelector(state => state.searchByName)

  useEffect(() => {
    dispatch(searchByName(title));
  }, [dispatch, title]);

  const [currentPost, setCurrentPost] = useState(1);
  const postsPerPage = 12;


  useEffect(() => {
    dispatch(searchByName())
  }, [dispatch])


  //Pagination
  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPost(pageNumber);
  }

  const indexOfLastPost = currentPost * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchTitle.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div className="container px-5 py-24 m-auto ">
      <div>
        <PostComp posts={currentPosts} />
      </div>
      <div className="flex justify-center my-14">
        <Pagination ctsPerPage={postsPerPage} totalCts={searchTitle.length} paginate={paginate} />
      </div>
    </div>
  )
}

export default Search;


