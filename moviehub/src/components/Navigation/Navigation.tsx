import './Navigation.scss';
import IconHome from '../../img/icons/Navigation/icon-home.svg';
import IconFilms from '../../img/icons/Navigation/icon-movie.svg';
import IconSearch from '../../img/icons/Navigation/icon-search.svg';
import IconSerials from '../../img/icons/Navigation/icon-serials.svg';
import IconProfile from '../../img/icons/Navigation/icon-profile.svg';

function Navigation() {
  return (
    <>
    <div className="navigation-bar">
        <div className="navigation-bar_item">
          <a href="">
            <img src={IconHome} alt="" />
          </a>
        </div>
        <div className="navigation-bar_item">
          <a href="">
            <img src={IconFilms} alt="" />
          </a>
        </div>
        <div className="navigation-bar_item">
          <a href="">
            <img src={IconSerials} alt="" />
          </a>
        </div>
        <div className="navigation-bar_item">
          <a href="">
            <img src={IconSearch} alt="" />
          </a>
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
