import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from '../components/Header.js';
import QuestListItem from '../components/QuestListItem.js';

function QuestPage({ name }) {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("quests.json");
        const data = await result.json();
        setQuests(data[name]);
      } catch (error) {
        console.error("Error fetching quests:", error);
      }
    }

    fetchData();
  }, []);

  // Group quests by level
  const questsByLevel = quests.reduce((acc, quest) => {
    let { level, order } = quest;
    if (!acc[level]) {
      acc[level] = [];
    }
    acc[level].push(quest);
    return acc;
  }, {});

  return (
    <div>
      <Header title="Bushcraft" />
      <h1>Bushcraft Skills</h1>
      <div>
        {Object.keys(questsByLevel).map(level => (
          <div key={level}>
            <h2>Level {level}</h2>
            {questsByLevel[level].map((quest, index) => (
              <QuestListItem
                key={index}
                title={quest.title}
                description={quest.description}
                level={quest.level}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestPage;