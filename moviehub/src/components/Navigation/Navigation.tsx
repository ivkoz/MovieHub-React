import './Navigation.scss';
import IconHome from '../../img/icons/Navigation/icon-home.svg';
import IconFilms from '../../img/icons/Navigation/icon-movie.svg';
import IconSearch from '../../img/icons/Navigation/icon-search.svg';
import IconSerials from '../../img/icons/Navigation/icon-serials.svg';
import IconProfile from '../../img/icons/Navigation/icon-profile.svg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import MovieSearch from '../MovieSearch/MovieSearch'

function Navigation() {
  return (
    <>
    <div className="navigation-bar">
        <div className="navigation-bar_item">
          <Link to={'/'}>
          <img src={IconHome} alt="" />
          </Link>
        </div>
        <div className="navigation-bar_item">
        <Link to={'/genres'}>
            <img src={IconFilms} alt="" />
          </Link>
        </div>
        {/* <div className="navigation-bar_item">
          <a href="">
            <img src={IconSerials} alt="" />
          </a>
        </div> */}
        <div className="navigation-bar_item">
      
            <Link to={'/movie/search'}>
            <img src={IconSearch} alt="" />
            </Link>
          
        </div>
        <div className="navigation-bar_item">
          <a href="">
            <img src={IconProfile} alt="" />
          </a>
        </div>
    </div>
    </>
  );
}

export default Navigation;
