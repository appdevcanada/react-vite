import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFav } from "../../context/FavContext";

export default function Planet({ findStarship }) {
  const [starship, setStarship] = useState(null);
  const { id } = useParams();
  const [, , , favStarship, updateFav] = useFav();

  function favClicked(ev) {
    if (favStarship.id === parseInt(id) && favStarship.type === "starships") {
      //clear fav
      updateFav("", 0, {});
      return;
    }
    updateFav("starships", parseInt(id), starship);
  }

  useEffect(() => {
    setStarship(findStarship(id));
  }, [findStarship, id]);

  let details = (
    <>
      {starship && <p>Name: {starship.name}</p>}
      {starship && <p>Model: {starship.model} km</p>}
      {starship && <p>Manufacturer: {starship.manufacturer}</p>}
      {starship && <p>Class: {starship.starship_class}</p>}
    </>
  );

  return (
    <>
      <h2>Starship Details</h2>
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
