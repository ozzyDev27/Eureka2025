import '../App.css';
import React from 'react';
import { useParams } from 'react-router-dom';

function QuestPage() {
  const { id } = useParams();
  
  return <div>quest: {id}</div>;
}
  
export default QuestPage;
  