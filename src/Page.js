import React from "react";
import './Page.css'

export default function Page (){
    return (
      <div>
        <h1>EMMA COTTER</h1>

        <div className="photoBlock">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/035/827/original/IMG_8833.jpg?1653981590"
            alt="Me Coding"
            height="300px"
            width="300px"
          />
          <p className="Description">
            Hi, nice to meet you. These are the projects I have worked on in the
            past...
          </p>
        </div>
        <div className="row First">
          <div className="col">
            <iframe
              className="Weather"
              src="https://zingy-concha-edec1d.netlify.app/"
              height="500"
              width="500"
              frameBorder="0"
            >
              Sorry
            </iframe>
          </div>
          <div className="col WeatherInfo">
            <h2>Weather App </h2>
            <span>coded in ReactJS</span>
          </div>
        </div>

        <div className="row Second">
          <div className="col DictionaryInfo">
            <h2>Dictionary</h2>
            <span>coded in ReactJS</span>
          </div>
          <div className="col">
            <iframe
              className="Dictionary"
              src="https://stunning-nougat-5bb688.netlify.app/"
              height="500"
              width="500"
              frameBorder="0"
            >
              Sorry
            </iframe>
          </div>
        </div>
        <div className="ContactMe">
          <span className="Contact">Contact: </span>
          <span>ecotter22@gmail.com</span>
        </div>
      </div>
    );
}