import { useEffect, lazy, Suspense } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { useFav } from "../../context/FavContext";
import "./starships.css";

export default function Starships(props) {
  const Starship = lazy(() => import("../Starship/Starship"));
  const [, , , favStarship] = useFav();
  const { list, setSearchState } = props;

  useEffect(() => {}, [list]);

  useEffect(() => {
    setSearchState(false);
  });

  function findStarship(id) {
    const found = list.find((item, index) => parseInt(id) === index + 1);
    if (found) {
      return found;
    }
    return null;
  }

  return (
    <>
      <div className="results">
        <h2>Starship List</h2>
        {list.length === 0 && <p>No starships...</p>}
        {list.length > 0 &&
          list.map((starship, index) => (
            <p key={starship.name}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to={`/starships/${index + 1}`}
              >
                {starship.name}&nbsp;
                {favStarship.type === "starships" &&
                  index + 1 === parseInt(favStarship.id) && (
                    <>
                      <span className="material-icons small-font red-font">
                        favorite
                      </span>
                    </>
                  )}
              </NavLink>
            </p>
          ))}
      </div>
      <div className="details">
        <Routes>
          <Route
            path=":id"
            element={
              <Suspense>
                <Starship findStarship={findStarship} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}
