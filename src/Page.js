import React from "react";
import './Page.css'
export default function Page (){
    return (
      <div>
        <h1>EMMA COTTER</h1>
        <br />
        <br />
        <p className="Description">
          Hi, nice to meet you. These are the projects I have worked on in the
          past...
        </p>
        <h2>Weather App </h2>
        <span>coded in ReactJS</span>
        <iframe
          src="https://zingy-concha-edec1d.netlify.app/"
          height="400"
          width="500"
        ></iframe>
        <h2>Dictionary</h2>
        <span>coded in ReactJS</span>
        <iframe
          src="https://stunning-nougat-5bb688.netlify.app/"
          height="400"
          width="500"
        ></iframe>
        <div className="ContactMe">
          <span className="Contact">Contact: </span>
          <span>ecotter22@gmail.com</span>
        </div>
      </div>
    );
}