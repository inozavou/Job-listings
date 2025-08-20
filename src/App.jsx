import { useState } from "react";
import "./App.css";
import companyData from "./data.json";
import Header from "./Header";
import Job from "./Job";
import SearchBar from "./SearchBar";

function App() {
  const [tagName, setTagName] = useState([]);
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  return (
    <div className="App">
      <div className="app-background">
        <div className="main-content">
          <Header />
          <SearchBar
            tagName={tagName}
            setTagName={setTagName}
            searchBarVisible={searchBarVisible}
            setSearchBarVisible={setSearchBarVisible}
          />
          <Job
            companyData={companyData}
            tagName={tagName}
            searchBarVisible={searchBarVisible}
            setSearchBarVisible={setSearchBarVisible}
            setTagName={setTagName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
