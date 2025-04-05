import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('../ozzyLogo-shadow.png')} className="pfp" alt="pfp" />
        <p class="username">Miles Easton</p>
        <p class="usertitle">Veteran Camper</p>
        <p class="main title!">Camp Quest</p>
        
      </header>
      <body>
        <div className="button-group">
            <Link to="/bushcraft"><button className="nav-button">Bushcraft</button></Link>
            <Link to="/navigation"><button className="nav-button">Navigation & Safety</button></Link>
            <Link to="/food"><button className="nav-button">Cooking</button></Link>
            <Link to="/fire"><button className="nav-button">Fire</button></Link>
        </div>
      </body>
    </div>
  );
}

export default Home;
