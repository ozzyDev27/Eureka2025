import '../App.css';
import { TbCampfire } from "react-icons/tb";

function QuestListItem({ title, level, description }) {
    return <div>
      <TbCampfire/>
      <p>LVL {level}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>;
  }
  
  export default QuestListItem;
  