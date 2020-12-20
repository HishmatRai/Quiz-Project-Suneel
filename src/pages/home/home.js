import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Card from './../../components/card/card'
import Drawer from './../../components/drawer/drawer'
import Paper from "@material-ui/core/Paper";
import './home.css'
const Home = () => {
  return (
    <div>
      {/* -----------------------------> DRAWER <------------------------- */}
      <Drawer />
      <div className="home_card_main">

        {/* -----------------------------> HEADING <------------------------- */}
        <Paper style={{ backgroundColor: "#8E5BE3" }}>
          <p className="active_q">Active Quizzes</p>
        </Paper>

        {/* -----------------------------> CARD <------------------------- */}
        <Card />

        {/* -----------------------------> COMPLETE QUIZ HEADING <------------------------- */}
        <Paper style={{ backgroundColor: "#8E5BE3" }}>
          <p className="active_q">Completed Quizzes</p>
        </Paper>

        {/* -----------------------------> DAILY STATUS <------------------------- */}
        <div>
          <p className="date">10 Dec 2020</p>
          <Paper >
            <MDBContainer>
              <MDBRow>
                <MDBCol sm="4">
                  <p className="daily_update">General Knowledge Quiz</p>
                </MDBCol>
                <MDBCol sm="4">
                  <p className="daily_update">Rank 1321</p></MDBCol>
                <MDBCol sm="4">
                  <p className="daily_update">Won USD 10</p></MDBCol>
              </MDBRow>
            </MDBContainer>
          </Paper>
          <Paper style={{ marginTop: "10px" }}>
            <MDBContainer>
              <MDBRow>
                <MDBCol sm="4">
                  <p className="daily_update">Geography Quiz</p>
                </MDBCol>
                <MDBCol sm="4">
                  <p className="daily_update">Rank 1321</p></MDBCol>
                <MDBCol sm="4">
                  <p className="daily_update">Won USD 10</p></MDBCol>
              </MDBRow>
            </MDBContainer>
          </Paper>
        </div>

        <div>
          <p className="date">02 Dec 2020</p>
          <Paper >
            <MDBContainer>
              <MDBRow>
                <MDBCol sm="4">
                  <p className="daily_update">Science Quiz</p>
                </MDBCol>
                <MDBCol sm="4">
                  <p className="daily_update">Rank 67</p></MDBCol>
                <MDBCol sm="4">
                  <p className="daily_update">Won USD 10</p></MDBCol>
              </MDBRow>
            </MDBContainer>
          </Paper>
        </div>
      </div> <br /> <br /> <br /> <br />
    </div>
  );
};

export default Home;