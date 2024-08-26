import React, { useState } from 'react';
import axios from 'axios'
function SearchBar() {

const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [searchInput, setSearchInput] = useState('');
const [yourTeam, setYourTeam] = useState(null);
const [filteredTeam, setFilteredTeam] = useState([])


  // Handle input change
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handle search button click
  const handleSearch = async () => {
    try {
      // call api for all player information
      const firstResponse = await axios.get('/api/players');
      const firstData = firstResponse.data;
      setData(firstData)

      // call api for all the players in managers team
      const url = '/api/' + searchInput;
      const secondResponse = await axios.get(url)
      const secondData = secondResponse.data;
      setYourTeam(secondData)
      //const filteredElements = firstData.elements.filter(item => secondData.picks.map(x => x.element)).includes(item.id);
      // all the elements in the team
      const elements = secondData.picks.map(item => item.element);
      const filteredElements = firstData.elements.filter(item => elements.includes(item.id));
      setFilteredTeam(filteredElements);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

console.log("Data", data)
 // Conditional rendering to prevent errors
  console.log("What the fuck is my team: ", yourTeam)
  console.log("filetered elements ", filteredTeam)
  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter Team ID" 
        value={searchInput} 
        onChange={handleInputChange} 
      />
      <button onClick={handleSearch}>Fetch Team Data</button>

      {filteredTeam ? (
         <div>
            <h1>This is your current Team</h1>
         {filteredTeam.map((player, index) => (
           <div key={index}>
             <p>{player.first_name} {player.second_name}</p>
           </div>
         ))}
       </div>
      ): (
        <p>No data available</p>
      )}
    </div>
  );
}

export default SearchBar
