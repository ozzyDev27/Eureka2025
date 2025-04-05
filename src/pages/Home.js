import '../App.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import QuestListItem from '../components/QuestListItem';

function Home() {
  const [dailyQuests, setDailyQuests] = useState([]);

  useEffect(() => {
    async function fetchDailyQuests() {
      try {
        const response = await fetch('/quests.json');
        const data = await response.json();
        const allQuests = Object.values(data).flat(); // Flatten all quests into a single array
        setDailyQuests(allQuests.slice(0, 2)); // Get the first two quests
      } catch (error) {
        console.error('Error fetching daily quests:', error);
      }
    }

    fetchDailyQuests();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={require('../ozzyLogo-shadow.png')} className="pfp" alt="pfp" />
        <p className="username">Miles Easton</p>
        <p className="usertitle"><b>Level 5</b>: Veteran Camper</p>
        <div className="userlevel"><div className="levelprogress"></div></div>
        <p className="main-title">CampQuest</p>
      </header>
      <body>
        <div className="whattodo">What would you like to work towards?</div>
        <div className="button-group">
          <Link to="/bushcraft"><button className="nav-button">
            <img src={require('../coolasstent.png')} className="epictent" alt="tent" />
            <p className="selectorthingy">Bushcraft</p>
          </button></Link>
          <Link to="/fire"><button className="nav-button">
            <img src={require('../coolassfire.png')} className="epictent andfire" alt="tent" />
            <p className="selectorthingy">Fire</p>
          </button></Link>
          <Link to="/food"><button className="nav-button">
            <img src={require('../coolassstove.png')} className="epictent" alt="tent" />
            <p className="selectorthingy">Cooking</p>
          </button></Link>
          <Link to="/navigation"><button className="nav-button">
            <img src={require('../coolasscompass.png')} className="epictent" alt="a" />
            <p className="selectorthingy">Orienteering</p>
          </button></Link>
        </div>
        <div className="epicbox">
          <p className="selectorthingy">Daily Quests</p>
          {dailyQuests.map((quest, index) => (
            <QuestListItem
              key={index}
              title={quest.title}
              description={quest.description}
              level={quest.level}
              icon={quest.icon}
            />
          ))}
        </div>
      </body>
    </div>
  );
}

export default Home;
