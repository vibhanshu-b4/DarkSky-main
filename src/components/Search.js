import "../styles/components/Search.css";
import { searchPlaces } from "../api";
import { useContext } from "react";
import WeatherContext from "../context/weather.context";
import { useState } from "react";

function Search() {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setPlace } = useContext(WeatherContext);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  const onSearch = async (e) => {
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchResults(data);
    setOpenSearchResults(data.length > 0);
  };

  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setOpenSearchResults(false);
  };

  return (
    <>
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
          <input
            type="text"
            name="search-city"
            placeholder="Search city ..."
            value={text}
            onChange={onSearch}
          />
        </div>
        {openSearchResults && (
          <div className="search-results">
            <div className="results-container">
              {searchResults.map((place) => (
                <div
                  className="result"
                  key={place.place_id}
                  onClick={() => changePlace(place)}
                >
                  {place.name}, {place.adm_area1}, {place.country}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
