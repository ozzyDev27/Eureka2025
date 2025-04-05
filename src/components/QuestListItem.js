import '../App.css';
import { TbCampfire } from "react-icons/tb";
import { Link } from 'react-router-dom';

function QuestListItem({ title, level, description }) {
    return (
        <Link to={`/quest/${title}`} className="quest-list-item">
            <div className="icon-section">
                <TbCampfire className="icon" />
                <p className="level">LVL {level}</p>
            </div>
            <div className="text-section">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
        </Link>
    );
}

export default QuestListItem;