import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function FavoriteComponent() {
  const favsFromLocalStorage = JSON.parse(localStorage.getItem("favs") || "[]");

  let x;
  favsFromLocalStorage.length > 0 ? (x = favsFromLocalStorage) : (x = []);
  console.log(x, favsFromLocalStorage);

  const [favs, setFavs] = useState(x);
  const post = useSelector((state) => state.singlePost);

  useEffect(() => {
    window.localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  let heartcolor;
  let strokeColor;

  let isPostFavorite = favsFromLocalStorage.find((e) => e.id === post?.id);
  if (isPostFavorite) {
    heartcolor = "red";
    strokeColor = "none";
  } else {
    heartcolor = "none";
    strokeColor = "black";
  }

  function handleClick(e) {
    if (isPostFavorite) {
      const filter = favsFromLocalStorage.filter((e) => e.id !== post?.id);
      setFavs(filter);
    } else {
      setFavs([...favs, post]);
    }
  }

  return (
    <div>
      <button className="btn" onClick={(e) => handleClick(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red"
          fill={heartcolor}
          viewBox="0 0 24 24"
          stroke={strokeColor}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        {/* Add to Fav */}
      </button>
    </div>
  );
}

export default FavoriteComponent;
