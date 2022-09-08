import "./main.css";
import Home from "../Home/Home";
import Sub from "../Sub/Sub";
import Info from "../Info/Info";
import useStarWars from "../../hooks/useStarWars";
import { Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Spinner from "../Spinner/Spinner";

export default function Main(props) {
  const home = "react-vite";
  const Films = lazy(() => import("../Films/Films"));
  const People = lazy(() => import("../People/People"));
  const Planets = lazy(() => import("../Planets/Planets"));
  const Starships = lazy(() => import("../Starships/Starships"));
  const { keyword, setSearchState, category } = props;
  const [films, setFilms] = useStarWars("films");
  const [people, setPeople] = useStarWars("people");
  const [planets, setPlanets] = useStarWars("planets");
  const [starships, setStarships] = useStarWars("starships");

  useEffect(() => {
    if (category !== home) {
      switch (category) {
        case "films":
          setFilms(keyword);
          break;

        case "people":
          setPeople(keyword);
          break;

        case "planets":
          setPlanets(keyword);
          break;

        case "starships":
          setStarships(keyword);
          break;

        default:
          console.log(category);
          break;
      }
    }
    window.scrollTo(0, 0);
  }, [category, keyword, setFilms, setPeople, setPlanets, setStarships]);

  return (
    <div className="mainContent">
      <Routes>
        <Route
          path="/films/*"
          element={
            <Suspense fallback={<Spinner>Loading Data</Spinner>}>
              <Films list={films} setSearchState={setSearchState} />
            </Suspense>
          }
        />
        <Route
          path="/people/*"
          element={
            <Suspense fallback={<Spinner>Loading Data</Spinner>}>
              <People list={people} setSearchState={setSearchState} />
            </Suspense>
          }
        />
        <Route
          path="/planets/*"
          element={
            <Suspense fallback={<Spinner>Loading Data</Spinner>}>
              <Planets list={planets} setSearchState={setSearchState} />
            </Suspense>
          }
        />
        <Route
          path="/starships/*"
          element={
            <Suspense fallback={<Spinner>Loading Data</Spinner>}>
              <Starships list={starships} setSearchState={setSearchState} />
            </Suspense>
          }
        />

        <Route
          exact
          path={home}
          element={
            <Home
              name={"C-3PO"}
              active={true}
              time={new Date() - 50000000}
              setSearchState={setSearchState}
            >
              <Info />
              <Sub />
            </Home>
          }
        />
      </Routes>
    </div>
  );
}
