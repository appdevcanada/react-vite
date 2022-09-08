import "./searchbar.css";
import { createRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar(props) {
  let inputSearch = createRef();
  let btnSearch = createRef();
  let navigate = useNavigate();
  const { btnState, keyword, category } = props;

  function submitted(ev) {
    ev.preventDefault();
    navigate(`/${category}?search=${inputSearch.current.value}`);
    inputSearch.current.value = "";
  }

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          ref={inputSearch}
          type="text"
          name="keyword"
          className="searchText"
          placeholder="keyword"
          disabled={btnState}
        />
        <button
          ref={btnSearch}
          type="submit"
          className="searchBtn"
          name="searchBtn"
          disabled={btnState}
        >
          Search
        </button>
      </form>
      {keyword && (
        <p className="margin-0">
          You searched for <strong>{keyword}</strong>
        </p>
      )}
    </section>
  );
}
