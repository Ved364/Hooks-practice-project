import React, { useState, useEffect } from 'react';
import '../Styles/EffectTwo.css'; 

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const EffectTwo: React.FC = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const [searchTerm, setSearchTerm] = useState("l"); 

  const fetchDrink = async (search: string) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });

    try {
      const response = await fetch(`${BASE_URL}${search}`);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const { drinks } = await response.json();
      setDrinksData(drinks);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setIsError({ status: true, msg: error.message || "Something went wrong. Please try again!" });
    }
  };

  useEffect(() => {
    if(searchTerm){
    fetchDrink(searchTerm);
  }
  }, [searchTerm]); 

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); 
  };

  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError.status) {
    return (
      <div className="container">
        <h1>{isError.msg}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a drink"
          value={searchTerm}
          onChange={handleSearch} // Added onChange handler
        />
      </form>

      <hr />

      <ul className="cocktail-data">
        {drinksData && drinksData.length > 0 ? (
          drinksData.map((drink) => {
            const { idDrink, strDrink, strGlass, strDrinkThumb } = drink;
            return (
              <li key={idDrink}>
                <div>
                  <img src={strDrinkThumb} alt={strDrink} />
                </div>
                <div className="text">
                  <h2>{strDrink}</h2>
                  <p>{strGlass}</p>
                </div>
              </li>
            );
          })
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default EffectTwo;
