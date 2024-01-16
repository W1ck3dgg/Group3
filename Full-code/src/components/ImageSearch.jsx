import React, { useState, useEffect } from "react";
import "../style/ImageSearch.css";

const accessKey = "QBkJKjAADCYPmDEqTQ4PqlqE6oqMBcKlKtlB2Q_Goow";

function ImageSearch() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function searchImages() {
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=6`;

      const response = await fetch(url);
      const data = await response.json();

      if (page === 1) {
        setResults(data.results);
      } else {
        setResults((prevResults) => [...prevResults, ...data.results]);
      }

      setShowMore(true);
    }

    if (keyword !== "") {
      searchImages();
    }
  }, [keyword, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const handleShowMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Image Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search image..."
        />
        <button type="submit">Search</button>
      </form>
      <div id="search-result">
        {results.map((result, index) => (
          <div key={index}>
            <a
              href={result.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={result.urls.small} alt={result.alt_description} />
            </a>
          </div>
        ))}
      </div>
      {showMore && <button onClick={handleShowMoreClick}>Show More</button>}
    </div>
  );
}

export default ImageSearch;
