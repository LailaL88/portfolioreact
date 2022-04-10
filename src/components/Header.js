import { Link } from "react-scroll";
import Nav from './Nav';
import border from '../img/border.png';

function Header() {
    return (
        <header className='App-header' id='home'>
        <Nav />
        <div className="hero container">
          <h1>Hi, I'm Olga</h1>
          <h2>Junior frontend developer</h2>
          <Link to="portfolio" smooth={true} offset={-60}>
          <button className='button'><span>See my works</span></button>
          </Link>
        </div>
        <img className='border' src={border} alt="section border" />
      </header>
    )
}

export default Header;