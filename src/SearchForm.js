import React from "react";
import { useGlobalContext } from "./context";
import logo from "./logo.svg";
const SearchForm = () => {
	const { query, setQuery, error } = useGlobalContext();

	return (
		<form className="search-form" onSubmit={(e) => e.preventDefault()}>
			<div>
				<img src={logo} alt="MovieInfo" />
			</div>
			{/* <h2>Search Movies</h2> */}
			<input
				type="text"
				className="form-input"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			{error.show && <div className="error">{error.msg}</div>}
		</form>
	);
};

export default SearchForm;
