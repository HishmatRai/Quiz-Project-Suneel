import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './card.css'

  export default function Card() {
    
  let CardData = [
    {title : 'M', heading: "Mathematics Quiz", id : "quiz id: 23GH65"},
    {title : 'P', heading: "Physics Quiz", id : "quiz id: 98BH67"},
    {title : 'M', heading: "Mathematics Quiz", id : "quiz id: 72DF98"},
    {title : 'G', heading: "Geography Quiz", id : "quiz id: 76DF45"},
  ]
    return (
     <MDBRow>
{
  CardData.map((v,i)=>{
    return(
      <MDBCol sm="3">
      <div className="card_box">
    <div className="_round_div">
               <p className="_round_div_text">{v.title}</p>
           </div>
           <p className="_heading" style={{fontFamily: 'Ubuntu'}}>{v.heading}</p>
           <p className="_card_id">
            {v.id}
                </p>
      </div>
    </MDBCol>
  )
})
}
</MDBRow>
     
    );
  }