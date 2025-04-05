import '../App.css';
import './QuestDetails.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.js';

function QuestComplete() {
  return (
    
    <div className="questcompleting">
        <Header title={name} />
    </div>
  );    
}
  
export default QuestComplete;