import { useEffect, lazy, Suspense } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { useFav } from "../../context/FavContext";
import "./films.css";

export default function Films(props) {
  const Film = lazy(() => import("../Film/Film"));
  const [favFilm] = useFav();
  const { list, setSearchState } = props;

  useEffect(() => {}, [list]);

  useEffect(() => {
    setSearchState(false);
  });

  function findFilm(id) {
    const found = list.find((item, index) => parseInt(id) === index + 1);
    if (found) {
      return found;
    }
    return null;
  }

  return (
    <>
      <div className="results">
        <h2>Film List</h2>
        {list.length === 0 && <p>No films...</p>}
        {list.map((film, index) => (
          <p key={film.title}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to={`/films/${index + 1}`}
            >
              {film.title}&nbsp;
              {favFilm.type === "films" && index + 1 === parseInt(favFilm.id) && (
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
                <Film findFilm={findFilm} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}
