import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFav } from "../../context/FavContext";

export default function Planet({ findPlanet }) {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();
  const [, , favPlanet, , updateFav] = useFav();

  function favClicked(ev) {
    if (favPlanet.id === parseInt(id) && favPlanet.type === "planets") {
      //clear fav
      updateFav("", 0, {});
      return;
    }
    updateFav("planets", parseInt(id), planet);
  }

  useEffect(() => {
    setPlanet(findPlanet(id));
  }, [findPlanet, id]);

  let details = (
    <>
      {planet && <p>Name: {planet.name}</p>}
      {planet && <p>Diameter: {planet.diameter} km</p>}
      {planet && <p>Terrain: {planet.terrain}</p>}
      {planet && <p>Population: {planet.population}</p>}
    </>
  );

  return (
    <>
      <h2>Planet Details</h2>
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
