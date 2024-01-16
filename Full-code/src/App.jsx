import React from "react";
import ImageSearch from "./components/ImageSearch";
import Infograph from "./components/Infograph";
import Summary from "./components/Summary";
import Paraphrasing from "./components/Paraphrasing";

function App() {
  return (
    <div>
      <Paraphrasing />
      <Summary />
      <Infograph />
      <ImageSearch />
    </div>
  );
}

export default App;
