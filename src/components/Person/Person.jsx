import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFav } from "../../context/FavContext";

export default function Person({ findPerson }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const [, favPerson, , , updateFav] = useFav();

  function favClicked(ev) {
    if (favPerson.id === parseInt(id) && favPerson.type === "people") {
      //clear fav
      updateFav("", 0, {});
      return;
    }
    updateFav("people", parseInt(id), person);
  }

  useEffect(() => {
    setPerson(findPerson(id));
  }, [findPerson, id]);

  return (
    <div>
      <h2>Person Details {id}</h2>
      {person && <p>Name: {person.name}</p>}
      {person && <p>Height: {person.height} cm</p>}
      {person && <p>Weight: {person.mass} kg</p>}
      {person && <p>Birth: {person.birth_year}</p>}
      <p>
        <button onClick={favClicked}>
          Set{" "}
          <span className="material-icons small-font red-font">favorite</span>
        </button>
      </p>
    </div>
  );
}
