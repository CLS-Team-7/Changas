import React, { useEffect, useState, }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritePost, addFavTest } from '../../Redux/actions';


function FavoriteComponent() {
    const [state, setState] = useState ([])
    const dispatch = useDispatch();
    const favorite = useSelector(state => state.favoritePost);
    const allPost = useSelector(state => state.singlePost)

    

    
    useEffect(() => {
        localStorage.setItem("favTest", JSON.stringify(state.favorite));
      }, [state]);


    //const favoriteDisabled = !favorite ? true : false;  

    function handleClick() {
        //dispatch(addFavoritePost(allPost))
        dispatch(addFavTest(allPost.id))
      }

    return (
        <div>
           <button
            className="btn"
            onClick={() => handleClick()}>
            Add to Fav
          </button>
        </div>
    )
}

export default FavoriteComponent
