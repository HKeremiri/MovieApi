// src/components/Pagination.jsx
import React from "react";

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
    if (totalPages <= 1) return null;

   

    return (
		<div className="pagination2">
			<span>Page {currentPage} of {totalPages}:</span>
			{Array.from({ length: totalPages }, (_, i) => (
				<a
					key={i}
					className={currentPage === i + 1 ? 'active' : ''}
					href="#"
					onClick={(e) => {
						e.preventDefault();
						setCurrentPage(i + 1);
					}}
				>
					{i + 1}
				</a>
			))}
			{currentPage < totalPages && (
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						setCurrentPage(currentPage + 1);
					}}
				>
					<i className="ion-arrow-right-b"></i>
				</a>
			)}
		</div>
    );
}
