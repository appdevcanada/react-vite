import { useEffect, lazy, Suspense } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { useFav } from "../../context/FavContext";
import "./planets.css";

export default function Planets(props) {
  const Planet = lazy(() => import("../Planet/Planet"));
  const [, , favPlanet] = useFav();
  const { list, setSearchState } = props;

  useEffect(() => {}, [list]);

  useEffect(() => {
    setSearchState(false);
  });

  function findPlanet(id) {
    const found = list.find((item, index) => parseInt(id) === index + 1);
    if (found) {
      return found;
    }
    return null;
  }

  return (
    <>
      <div className="results">
        <h2>Planet List</h2>
        {list.length === 0 && <p>No planets...</p>}
        {list.length > 0 &&
          list.map((planet, index) => (
            <p key={planet.name}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to={`/planets/${index + 1}`}
              >
                {planet.name}&nbsp;
                {favPlanet.type === "planets" &&
                  index + 1 === parseInt(favPlanet.id) && (
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
                <Planet findPlanet={findPlanet} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}
