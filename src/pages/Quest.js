import '../App.css';
import './QuestDetails.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTent, FaFire, FaTree } from "react-icons/fa6";
import Header from '../components/Header.js';
import { Link } from 'react-router-dom';

function QuestDetails() {
  const { name } = useParams();

  const [quests, setQuests] = useState([]);
  const [quest, setQuest] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("/quests.json");
        const data = await result.json();
        const allQuests = Object.values(data).flat(); // Flatten all quests into a single array
        const foundQuest = allQuests.find(q => q.title === name);
        setQuest(foundQuest);
      } catch (error) {
        console.error("Error fetching quests:", error);
      }
    }

    fetchData();
  }, [name]);

  const icon = quest?.icon || "campfire";

  let iconElem;

  if (icon === "tree") {
    iconElem = <FaTree className="icon" />;
  } else if (icon === "campfire") {
    iconElem = <FaFire className="icon" />;
  } else if (icon === "shelter") {
    iconElem = <FaTent className="icon" />;
  } else {
    console.log("Invalid icon name: " + icon);
  }

  if (!quest) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quest-container">
      <Header title={quest.title} className="aa"/>
      <div className="level-icon">
        {iconElem}
        <div className="level">Level {quest.level} Quest</div>
      </div>
      <div className="image-container">
        <img
          src={quest.url || "https://via.placeholder.com/300x200"}
          alt={quest.imgdesc || "Quest image"}
          className="quest-image"
        />
      </div>
      <p className="descriptionA">{quest.description}</p>
      <h2 className="tips-title">Tips</h2>
      <ul className="tips-list">
        {quest.tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      <Link to={`/complete/${quest.title}`} className="complete-button">
        Complete Quest
      </Link>
    </div>
  );
}

export default QuestDetails;