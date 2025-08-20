function SearchBar({
  tagName,
  setTagName,
  setSearchBarVisible,
  searchBarVisible,
}) {
  function handleDeleteTag(element) {
    setTagName((prevTags) => prevTags.filter((tag) => tag !== element));
  }

  return (
    searchBarVisible && (
      <div className="search-bar">
        <div className="tags-container">
          {tagName?.length > 0 &&
            tagName.map((element, index) => (
              <div className="searchBar-tags" key={index}>
                <div className="tagName">{element}</div>
                <button
                  className="delete-tag"
                  onClick={() => handleDeleteTag(element)}
                >
                  &#x2716;
                </button>
              </div>
            ))}
        </div>

        <button
          className="clear-button"
          onClick={() => {
            setTagName([]);
            setSearchBarVisible(false);
          }}
        >
          Clear
        </button>
      </div>
    )
  );
}
export default SearchBar;
