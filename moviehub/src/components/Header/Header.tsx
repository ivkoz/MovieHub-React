import React from 'react';
import Slider from "react-slick";
import '../../index.scss';
import './Header.scss'
import ReactPlayer from 'react-player';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const settings = {
  className: "slider variable-width",
  dots: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};
function Header() {
  return (
    <>
    <header>
        <div className="header-background"></div>
        <div className="container">
            <div className="logo"><h1>MOVIE</h1><h1 className='h1-orange'>HUB</h1></div>
            <h1 className='header-text'>Интересные трейлеры</h1>
            <div className="header-row-trailers">
              <div className="slider-container">
              <Slider {...settings}>
                <ReactPlayer url='https://www.youtube.com/watch?v=Scf8nIJCvs4&ab_channel=SonyPicturesEntertainment' controls={true} width={250} height={170} light={true}/>
                <ReactPlayer url='https://www.youtube.com/watch?v=6ZfuNTqbHE8&ab_channel=MarvelEntertainment' controls={true} width={250} height={170} light={true}/>
                <ReactPlayer url='https://www.youtube.com/watch?v=QdBZY2fkU-0&ab_channel=RockstarGames' controls={true} width={250} height={170} light={true}/>
                <ReactPlayer url='https://www.youtube.com/watch?v=cen0rBKLuYE&ab_channel=RyanReynolds' controls={true} width={250} height={170} light={true}/>
              </Slider>
              </div>
            </div>
        </div>
        
    </header>
    </>
  );
}

export default Header;
