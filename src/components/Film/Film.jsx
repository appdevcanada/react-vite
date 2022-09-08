import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFav } from "../../context/FavContext";

export default function Film({ findFilm }) {
  const [film, setFilm] = useState(null);
  const { id } = useParams();
  const [favFilm, , , , updateFav] = useFav();

  function favClicked(ev) {
    if (favFilm.id === parseInt(id) && favFilm.type === "films") {
      //clear fav
      updateFav("", 0, {});
      return;
    }
    updateFav("films", parseInt(id), film);
  }

  useEffect(() => {
    setFilm(findFilm(id));
  }, [findFilm, id]);

  let details = (
    <>
      {film && <p>Title: {film.title}</p>}
      {film && <p>Release Date: {film.release_date}</p>}
      {film && <p>Introduction: {film.opening_crawl}</p>}
    </>
  );

  return (
    <>
      <h2>Film Details</h2>
      {details}
      <p>
        <button onClick={favClicked}>
          Set{" "}
          <span className="material-icons small-font red-font">favorite</span>
        </button>
      </p>
    </>
  );
}
