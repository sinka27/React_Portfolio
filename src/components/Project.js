import React from "react";
import Card from "react-bootstrap/Card";


export default function Project(props) {
  // just define the card to make the project
  return (
    <Card className="text-white" >
      <Card.Img src={props.img} alt="Card image" className="card-image" style={{ height:'18rem' }}/>
      <Card.ImgOverlay className="card-content">
      </Card.ImgOverlay>
      <Card.Footer style={{ zIndex:'9' }}>
        <a href={props.link} className="btn btn-info" role="button">Check it out</a>
         &nbsp;&nbsp;
        <a href={props.github} className="btn btn-info" role="button">Github</a>
      </Card.Footer>
    </Card>
  );
}