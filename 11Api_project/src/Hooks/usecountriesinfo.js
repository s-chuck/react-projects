import { useState, useEffect } from "react";

function useCountriesInfo(country) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, [country]); // Add [country] to the dependency array

  return data; // Return the fetched data so it can be used outside the hook
}

export default useCountriesInfo;
