import '../App.css';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";


function Header({ title }) {
  return (
    <div className="supercoolheader">
      <Link to="/">
        <button class="supercoolbackbutton">
          <IoMdArrowBack  class="supercoolbuttonicon"/>
        </button>
      </Link>
      <p className="supercoolheadertitle">{title}</p>
    </div>
  );
}

export default Header;