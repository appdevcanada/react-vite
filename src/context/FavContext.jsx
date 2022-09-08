import { useContext, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavContext = createContext();

function FavProvider(props) {
  const shape = {
    type: "",
    id: 0,
    data: {},
  };
  const [favFilm, setFavFilm] = useLocalStorage("FavFilm", shape);
  const [favPerson, setFavPerson] = useLocalStorage("FavPerson", shape);
  const [favPlanet, setFavPlanet] = useLocalStorage("FavPlanet", shape);
  const [favStarship, setFavStarship] = useLocalStorage("FavStarship", shape);

  function updateFav(type, id, data) {
    switch (type) {
      case "films":
        setFavFilm({
          type,
          id,
          data,
        });
        break;

      case "people":
        setFavPerson({
          type,
          id,
          data,
        });
        break;

      case "planets":
        setFavPlanet({
          type,
          id,
          data,
        });
        break;

      case "starships":
        setFavStarship({
          type,
          id,
          data,
        });
        break;

      default:
        break;
    }
  }

  return (
    <FavContext.Provider
      value={[favFilm, favPerson, favPlanet, favStarship, updateFav]}
      {...props}
    />
  );
}

function useFav() {
  const context = useContext(FavContext);
  if (!context) throw new Error("No context available!");

  return context;
}

export { FavProvider, useFav };
