import React from "react";
import useCountriesInfo from "./Hooks/usecountriesinfo"; // Adjust the path based on your project structure

function App() {
  const countryInfo = useCountriesInfo();

  // You can now use the fetched country information in your component
  console.log(countryInfo);

  return (
    <div>
      <h1>My App</h1>
      {/* Your component JSX here */}
    </div>
  );
}

export default App;
