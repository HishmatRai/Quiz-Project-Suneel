import React, { Component } from "react";
import Drawer from './../../components/drawer/drawer'
import Paper from "@material-ui/core/Paper";
import LeftIcon from './../../img/left-arrow.png'
import RightIcon from './../../img/right-arrow.png'
import './Instructions.css'
import { MDBContainer, MDBRow, MDBCol, MDBModal, MDBModalBody } from 'mdbreact';
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
            {/* -----------------------------> DRAWER <------------------------- */}
            <Drawer />
            <div className="home_card_main">
                <Paper style={{ backgroundColor: "#8E5BE3" }}>
                    <p className="active_q">Mathematics Quiz | quiz id: 23GH65</p>
                </Paper>

                {/* -----------------------------> CARD <------------------------- */}
                <MDBRow>
                    <MDBCol sm="5"></MDBCol>
                    <MDBCol sm="2">
                        <div className="card_box">
                            <div className="_round_div">
                                <p className="_round_div_text">M</p>
                            </div>
                            <p className="_heading" style={{ fontFamily: 'Ubuntu' }}>Mathematics Quiz</p>
                            <p className="_card_id">quiz id: 23GH65</p>
                        </div>
                    </MDBCol>
                    <MDBCol sm="5"></MDBCol>
                </MDBRow>
                <br /><br /><br />

                {/* -----------------------------> INSTRUCTIONS <------------------------- */}
                <MDBRow>
                    <MDBCol sm="2"></MDBCol>
                    <MDBCol sm="8">
                        <MDBRow style={{ backgroundColor: "white" }}>
                            <MDBCol sm="1"></MDBCol>
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

                {/* -----------------------------> BUTTONS <------------------------- */}
                <MDBRow>
                    <MDBCol sm="2"></MDBCol>
                    <MDBCol sm="8">
                        <MDBRow>
                            <MDBCol sm="4">
                                <button className="back_btn">
                                    <img src={LeftIcon} className="LeftIcon" />
                                    <span className="btn_txt">Back to Home</span>
                                </button>
                            </MDBCol>
                            <br /><br />
                            <MDBCol sm="4"></MDBCol>
                            <MDBCol sm="4">
                                <button className="start_btn" onClick={this.toggle(14)}>
                                    <MDBRow >
                                        <MDBCol size="9">
                                            <span className="start_txt">  Use 20 coins to start the quiz</span>
                                        </MDBCol>
                                        <MDBCol size="1">
                                            <img src={RightIcon} className="RightIcon" />
                                        </MDBCol>
                                        <MDBCol size="2">
                                        </MDBCol>
                                    </MDBRow>
                                </button>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol sm="2"></MDBCol>
                </MDBRow>
                {/* -----------------------------> DRAWER <------------------------- */}
                    <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                        <MDBModalBody>
                            <p className="popup_text">20 coins deducted from your wallet Updated Coin Balance:  219 coins</p>
                            <p className="popup_text">Starting Quiz......</p>
                        </MDBModalBody>
                    </MDBModal>
            </div>
            <br /> <br /> <br /> <br />
        </div>
        );
    }
}
export default Instructions;