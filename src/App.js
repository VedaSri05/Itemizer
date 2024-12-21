import React, { useState, useEffect } from "react";
import { fetchData } from "./fetchData"; // Import the fetchData function
import ErrorBoundary from "./ErrorBoundary"; // Import the ErrorBoundary component
import "./App.css"; // Import your styles

function App() {
  const [items, setItems] = useState([]); // State to store items
  const [page, setPage] = useState(1); // State to handle pagination
  const [searchTerm, setSearchTerm] = useState(""); // State to handle search input
  const [sortOption, setSortOption] = useState("name"); // State to handle sort option

  useEffect(() => {
    fetchData(page, searchTerm, setItems, sortOption); // Fetch data based on page, searchTerm, and sortOption
  }, [page, searchTerm, sortOption]);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <h1>Items</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for an item"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
          className="search-input"
        />

        {/* Sort by Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)} // Update sort option state
          className="sort-dropdown"
        >
          <option value="name">Sort by Name</option>
          <option value="created_at">Sort by Created Date</option>
        </select>

        {/* Render Items */}
        {items.length > 0 ? (
          <div className="items-list">
            {items.map((item) => (
              <div key={item.id} className="item-card">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No items found.</p>
        )}

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
            Previous
          </button>
          <span>Page {page}</span>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
