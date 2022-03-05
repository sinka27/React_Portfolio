import React from "react";
import Card from "react-bootstrap/Card";


export default function Project(props) {
  // just define the card to make the project
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={props.img} alt="Card image" className="card-image"/>
      <Card.ImgOverlay className="card-content">
        <Card.Title className="card-text">{props.name}</Card.Title>
        <Card.Text className="card-text">
          {props.description}
        </Card.Text>
        <a href={props.link} className="btn btn-info" role="button">Check it out</a>
      </Card.ImgOverlay>
    </Card>
  );
}