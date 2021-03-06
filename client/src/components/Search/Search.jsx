import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <label className="search-label">
        Search:
        <input
          className="search-input"
          value={props.value}
          onChange={(e) => props.handleSearch(e)}
          name="Search"
          type="text"
          autoFocus
        />
      </label>
    </form>
  );
};

export default Search;
