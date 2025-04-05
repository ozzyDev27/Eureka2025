import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from '../components/Header.js';
import QuestListItem from '../components/QuestListItem.js';

function Bushcraft() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("quests.json");
        const data = await result.json();
        setQuests(data.Bushcraft);
      } catch (error) {
        console.error("Error fetching quests:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header title="Bushcraft" />
      <h1>Bushcraft Skills</h1>
      <div>
        {quests.map((quest, index) => (
          <QuestListItem
            key={index}
            title={quest.title}
            description={quest.description}
            level={quest.level}
          />
        ))}
      </div>
    </div>
  );
}

export default Bushcraft;