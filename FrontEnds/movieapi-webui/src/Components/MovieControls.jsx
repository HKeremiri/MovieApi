// src/components/MovieControls.jsx
import React from "react";
import PropTypes from "prop-types";

export default function MovieControls({
    totalCount,
    sortOption,
    setSortOption,
    moviesPerPage,
    setMoviesPerPage,
    viewMode,
    setViewMode
}) {
    return (
        <div className="topbar-filter">
            <p>Found <span>{totalCount}</span> in total</p>

            <label>Sort by:</label>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="popularity_desc">Popularity Descending</option>
                <option value="popularity_asc">Popularity Ascending</option>
                <option value="rating_desc">Rating Descending</option>
                <option value="rating_asc">Rating Ascending</option>
                <option value="date_desc">Release Date Descending</option>
                <option value="date_asc">Release Date Ascending</option>
            </select>

            <label style={{ marginLeft: 12 }}>Movies per page:</label>
            <select
                value={moviesPerPage}
                onChange={(e) => {
                    setMoviesPerPage(Number(e.target.value));
                }}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </select>

            <div className="view-toggle" style={{ display: "inline-block", marginLeft: 12 }}>
                <button
                    aria-pressed={viewMode === "list"}
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "active" : ""}
                >
                    <i className="ion-ios-list-outline"></i> List
                </button>
                <button
                    aria-pressed={viewMode === "grid"}
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "active" : ""}
                >
                    <i className="ion-grid"></i> Grid
                </button>
            </div>
        </div>
    );
}

MovieControls.propTypes = {
    totalCount: PropTypes.number.isRequired,
    sortOption: PropTypes.string.isRequired,
    setSortOption: PropTypes.func.isRequired,
    moviesPerPage: PropTypes.number.isRequired,
    setMoviesPerPage: PropTypes.func.isRequired,
    viewMode: PropTypes.oneOf(["grid", "list"]).isRequired,
    setViewMode: PropTypes.func.isRequired,
};
