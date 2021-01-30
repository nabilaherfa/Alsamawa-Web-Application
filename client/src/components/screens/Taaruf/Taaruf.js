  
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import {Image} from "react-bootstrap";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
];

export default function Taaruf() {
      return (
      <>
        <div className="Slider">
          <div className="left">
          <div className="tulisan"> TAARUF </div>
            <Carousel breakPoints={breakPoints}>
              <Item >One</Item>
              <Item>Two</Item>
              <Item>Three</Item>
              <Item>Four</Item>
              <Item>Five</Item>
              <Item>Six</Item>
              <Item>Seven</Item>
              <Item>Eight</Item>
            </Carousel>
          </div>
          <div className="buttona"> <a href=""> Taaruf</a></div>
          <div className="tele"><a href="">Message</a></div>
          <div className="buttoni"><a href="">Filter</a></div>
          <div className="box">
            <Image style={{width: 308, height: 250}} source={{uri: 'images/permintaan.JPG'}}/>
            <Image style={{width: 308, height: 250}} source={{uri: './images/pengajuan.JPG'}}/>
            <Image style={{width: 308, height: 250}} source={{uri: './images/pertanyaan.JPG'}}/>
          </div>
        </div>
      </>
  );
}