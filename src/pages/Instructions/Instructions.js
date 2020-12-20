import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';
import Sidebar from './../../components/navbar/navbar'
import Card from './../../components/card/card'
import Drawer from './../../components/drawer/drawer'
import Paper from "@material-ui/core/Paper";
import LeftIcon from './../../img/left-arrow.png'
import RightIcon from './../../img/right-arrow.png'
import './Instructions.css'
class Instructions extends Component {
    state = {
        modal14: false
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {

        return (
            <div>
                <Drawer />
                <div className="home_card_main">
                    <Paper style={{ backgroundColor: "#8E5BE3" }}>
                        <p className="active_q">Mathematics Quiz | quiz id: 23GH65</p>
                    </Paper>


                    <MDBRow>
                        <MDBCol sm="5"></MDBCol>
                        <MDBCol sm="2">
                            <div className="card_box">
                                <div className="_round_div">
                                    <p className="_round_div_text">M</p>
                                </div>
                                <p className="_heading" style={{ fontFamily: 'Ubuntu' }}>Mathematics Quiz</p>
                                <p className="_card_id">
                                    quiz id: 23GH65
                </p>
                            </div>
                        </MDBCol>
                        <MDBCol sm="5"></MDBCol>

                    </MDBRow>
                    <br />
                    <br />
                    <br />

                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol sm="8">
                            <MDBRow style={{ backgroundColor: "white" }}>
                                <MDBCol sm="1">
                                </MDBCol>
                                <MDBCol sm="10">
                                    <p className="ins_heading">Instructions</p>
                                    <p className="paragraph">1. There will be 10 questions in this quiz.<br />
                                    2. For each question you will get 40 seconds to answer the question<br />
                                    3. Answer as quickly as possible to score higher<br />
                                    4. Example: If time left for question is 30 sec, you will score higher than if time left for question is 10 sec.<br />
                                    5. You cannot pass the question. Answer all question<br />
                                      6. When time gets over, you will be automatically directed to next question</p>  <br />
                                <br />
                           
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                              
                        
                            </MDBRow>

                        </MDBCol>
                        <MDBCol sm="2"></MDBCol>

                    </MDBRow>
                    <br /><br />
                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol sm="8">
                            <MDBRow>
                                <MDBCol sm="4">
                                <button className="right_btn">
                                Back to Home
                            </button>
                                </MDBCol>
                                <MDBCol sm="4">
                                
                                </MDBCol>
                                <MDBCol sm="4">
                                <button  className="right_btn">
                                Use 20 coins to start the quiz
                            </button>
                                </MDBCol>

                            </MDBRow>

                        </MDBCol>

                        <MDBCol sm="2"></MDBCol>
                    </MDBRow>
                    <MDBContainer>

                        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                            <MDBModalBody>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
          </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>
                </div>

                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Instructions;