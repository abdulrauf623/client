import React, { useState } from 'react';
import axios from 'axios'
import PlayerCard from '../PlayerCard/PlayerCard';
import './SearchBar.css'
function SearchBar() {

const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [searchInput, setSearchInput] = useState('');
const [yourTeam, setYourTeam] = useState(null);
const [filteredTeam, setFilteredTeam] = useState([])
const [groupedPlayers, setGroupPlayers] = useState([])


  // Handle input change
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const positions = {
    "1": "goalkeeper",
    "2": "defender",
    "3": "midfielder",
    "4": "forward"
  }

  // Handle search button click
  const handleSearch = async () => {
    try {
      // call api for all player information
      const firstResponse = await axios.get('/api/players');
      const firstData = firstResponse.data;
      console.log("first data here: ", firstData)
      const currentGameweek = (firstData.events.find(task => task.finished === false).id) - 1;
      setData(firstData)

      // call api for all the players in managers team
      const url = '/api/' + searchInput + "/" +currentGameweek;
      const secondResponse = await axios.get(url)
      const secondData = secondResponse.data;
      setYourTeam(secondData)
      //const filteredElements = firstData.elements.filter(item => secondData.picks.map(x => x.element)).includes(item.id);
      // all the elements in the team
      //const elements = secondData.picks.map(item => item.element);
      //const filteredElements = firstData.elements.filter(item => elements.includes(item.id));
      const filteredElements = secondData.picks.map(teamMember => {
        // Find the matching object in array2 based on the `id` key
        const players = firstData.elements.find(player => player.id === teamMember.element);
        // Return a new object that combines properties from both item1 and item2
        return {
          ...teamMember, // Spread properties from array1
          ...players  // Spread properties from array2 (overwrites any matching properties from item1)
        };
      });
    
      // Group players by position
      const groupedPlayer = filteredElements?.reduce((acc, player) => {
        const positionClass = positions[player.element_type];
        if (!acc[positionClass]) {
          acc[positionClass] = [];
        }
        acc[positionClass].push(player);
        return acc;
      }, {});
      setFilteredTeam(filteredElements);
      setGroupPlayers(groupedPlayer)
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

      {filteredTeam && groupedPlayers ? (
        <div>
          <h1>This is your current Team</h1>
          <div className="position-container">
            {/* Render Goalkeepers */}
            {groupedPlayers.goalkeeper && (
              <div className="position-group">
                {groupedPlayers.goalkeeper.map((player, index) => (
                  <PlayerCard
                    firstName={player.first_name}
                    lastName={player.second_name}
                    team={player.team}
                    element_type={player.element_type}
                    playerCode = {player.code}
                  />
                ))}
              </div>
            )}

            {/* Render Defenders */}
            {groupedPlayers.defender && (
              <div className="position-group">
                {groupedPlayers.defender.map((player, index) => (
                  <PlayerCard                   
                    firstName={player.first_name}
                    lastName={player.second_name}
                    team={player.team}
                    element_type={player.element_type}
                    playerCode = {player.code}
                  />
                ))}
              </div>
            )}

            {/* Render Midfielders */}
            {groupedPlayers.midfielder && (
              <div className="position-group">
                {groupedPlayers.midfielder.map((player, index) => (
                  <PlayerCard
                    firstName={player.first_name}
                    lastName={player.second_name}
                    team={player.team}
                    element_type={player.element_type}
                    playerCode = {player.code}
                  />
                ))}
              </div>
            )}

            {/* Render Forwards */}
            {groupedPlayers.forward && (
              <div className="position-group">
                {groupedPlayers.forward.map((player, index) => (
                  <PlayerCard
                    firstName={player.first_name}
                    lastName={player.second_name}
                    team={player.team}
                    element_type={player.element_type}
                    playerCode = {player.code}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default SearchBar
