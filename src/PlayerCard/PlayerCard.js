import './PlayerCard.css'


function PlayerCard ({firstName, lastName, team, element_type, playerCode}){
const teams = {
    "1": {
      "teamName": "Arsenal",
      "jerseys": {
        "GK": "3_1",
        "DEF": "3",
        "MID": "3",
        "FWD": "3"
      }
    },
    "2": {
      "teamName": "Aston Villa",
      "jerseys": {
        "GK": "7_1",
        "DEF": "7",
        "MID": "7",
        "FWD": "7"
      }
    },
    "3": {
      "teamName": "Bournemouth",
      "jerseys": {
        "GK": "91_1",
        "DEF": "91",
        "MID": "91",
        "FWD": "91"
      }
    },
    "4": {
      "teamName": "Brentford",
      "jerseys": {
        "GK": "94_1",
        "DEF": "94",
        "MID": "94",
        "FWD": "94"
      }
    },
    "5": {
      "teamName": "Brighton",
      "jerseys": {
        "GK": "36_1",
        "DEF": "36",
        "MID": "36",
        "FWD": "36"
      }
    },
    "6": {
      "teamName": "Chelsea",
      "jerseys": {
        "GK": "8_1",
        "DEF": "8",
        "MID": "8",
        "FWD": "8"
      }
    },
    "7": {
      "teamName": "Crystal Palace",
      "jerseys": {
        "GK": "31_1",
        "DEF": "31",
        "MID": "31",
        "FWD": "31"
      }
    },
    "8": {
      "teamName": "Everton",
      "jerseys": {
        "GK": "11_1",
        "DEF": "11",
        "MID": "11",
        "FWD": "11"
      }
    },
    "9": {
      "teamName": "Fulham",
      "jerseys": {
        "GK": "54_1",
        "DEF": "54",
        "MID": "54",
        "FWD": "54"
      }
    },
    "10": {
      "teamName": "Ipswich Town",
      "jerseys": {
        "GK": "40_1",
        "DEF": "40",
        "MID": "40",
        "FWD": "40"
      }
    },
    "11": {
      "teamName": "Leicester",
      "jerseys": {
        "GK": "13_1",
        "DEF": "13",
        "MID": "13",
        "FWD": "13"
      }
    },
    "12": {
      "teamName": "Liverpool",
      "jerseys": {
        "GK": "14_1",
        "DEF": "14",
        "MID": "14",
        "FWD": "14"
      }
    },
    "13": {
      "teamName": "Man City",
      "jerseys": {
        "GK": "43_1",
        "DEF": "43",
        "MID": "43",
        "FWD": "43"
      }
    },
    "14": {
      "teamName": "Man United",
      "jerseys": {
        "GK": "1_1",
        "DEF": "1",
        "MID": "1",
        "FWD": "1"
      }
    },
    "15": {
      "teamName": "Newcastle",
      "jerseys": {
        "GK": "4_1",
        "DEF": "4",
        "MID": "4",
        "FWD": "4"
      }
    },
    "16": {
      "teamName": "Nottingham Forest",
      "jerseys": {
        "GK": "17_1",
        "DEF": "17",
        "MID": "17",
        "FWD": "17"
      }
    },
    "17": {
      "teamName": "Southampton",
      "jerseys": {
        "GK": "20_1",
        "DEF": "20",
        "MID": "20",
        "FWD": "20"
      }
    },
    "18": {
      "teamName": "Tottenham Spurs",
      "jerseys": {
        "GK": "6_1",
        "DEF": "6",
        "MID": "6",
        "FWD": "6"
      }
    },
    "19": {
      "teamName": "West Ham",
      "jerseys": {
        "GK": "21_1",
        "DEF": "21",
        "MID": "21",
        "FWD": "21"
      }
    },
    "20": {
      "teamName": "Wolves",
      "jerseys": {
        "GK": "39_1",
        "DEF": "39",
        "MID": "39",
        "FWD": "39"
      }
    }
  }
  

const positions = {
    "1": "GK",
    "2": "DEF",
    "3": "MID",
    "4": "FWD"
  }
const teamName = teams[team]["teamName"]
const position = positions[element_type]
const url = "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_" + teams[team]["jerseys"][position] + "-220.webp"

return (
    <div className="player-card">
        <div className="player-photo">
        <img src={url} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="player-name">
        <span className="first-name">{firstName}</span> <span className="last-name">{lastName}</span>
      </div>
      <div className="player-details">
        
        <p className="team-name">Team: {teamName}</p>
        <p className="position">Position: {position}</p>
      </div>
    </div>
  );
};

export default PlayerCard;