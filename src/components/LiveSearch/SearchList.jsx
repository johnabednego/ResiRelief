import React, { useState } from "react";
import LiveSearch from "./LiveSearch";

const profiles = [
  { id: "1", name: "Accra" },
  { id: "2", name: "Kumasi" },
  { id: "3", name: "Cape Coast" },
  { id: "4", name: "Tamale" },
  { id: "5", name: "Tema" },
  { id: "6", name: "Legon" },
];

function SearchList(props) {
  const [results, setResults] = useState();
  const [selectedProfile, setSelectedProfile] = useState();

  const handleChange = (e) => {
    const { target } = e;
    if (!target.value.trim()) {
      setResults([]);
      setSelectedProfile("")
    }
    const filteredValue = profiles.filter((profile) =>
      profile.name.toLowerCase().includes((target.value).toLowerCase())
    );
    setResults(filteredValue);
    if(filteredValue.length<1){
      setSelectedProfile("")
    }
  };

  return (
    <LiveSearch
      results={results}
      value={selectedProfile?.name}
      renderItem={(item) => <p>{item.name}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />
  );
}

export default SearchList;
