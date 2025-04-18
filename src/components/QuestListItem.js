import '../App.css';
import { FaCheck, FaTent, FaFire, FaTree } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function QuestListItem({ title, level, description, icon }) {

    let iconElem

    const completedQuests = localStorage.getItem("completedQuests") ?? [];

    if (completedQuests.includes(title)){
        iconElem = <FaCheck className="icon" />
    }
    else if (icon === "tree") {
        iconElem = <FaTree className="icon" />
    } else if (icon === "campfire") {
        iconElem = <FaFire className="icon" />
    } else if (icon === "shelter") {
        iconElem = <FaTent className="icon" />
    } else {
        console.log("Invalid icon name: " + icon)
    }

    return (
        <Link to={`/quest/${title}`} className="quest-list-item">
            <div className="icon-section">
                {iconElem}
                <p className="level">LVL {level}</p>
            </div>
            <div className="text-section">
                <h3 className="titleaa">{title}</h3>
                <p className="description">{description}</p>
            </div>
        </Link>
    );
}

export default QuestListItem;