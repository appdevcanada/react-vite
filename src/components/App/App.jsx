import "./App.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Main from "../Main/Main";
import { FavProvider } from "../../context/FavContext";

export default function App(props) {
  const name = "Star Wars API";
  const [keyword, setKeyword] = useState("");
  const { pathname, search } = useLocation();
  const [, category, id] = pathname.split("/");
  const [oldPage, setOldPage] = useState(category);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (oldPage === category) {
      if (search) {
        const value = search.replace("?search=", "");
        setKeyword(value);
      } else {
        if (!id) {
          setKeyword("");
        }
      }
    } else {
      setKeyword("");
      setOldPage(category);
    }
  }, [category, search, id, oldPage]);

  function setSearchState(state) {
    setDisabled(state);
  }

  return (
    <FavProvider>
      <div className="App">
        <Header company={name} />
        <SearchBar keyword={keyword} category={category} btnState={disabled} />

        <main className="content">
          <Main
            keyword={keyword}
            setSearchState={setSearchState}
            category={category}
          />
        </main>
      </div>
    </FavProvider>
  );
}
