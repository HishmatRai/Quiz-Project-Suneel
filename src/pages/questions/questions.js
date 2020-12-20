import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Drawer from './../../components/drawer/drawer'
import Paper from "@material-ui/core/Paper";
import LeftIcon from './../../img/left-arrow.png'
import RightIcon from './../../img/right-arrow.png'
import './questions.css';
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
                    <br /><br />

                    {/* -----------------------------> QUESTIONS <------------------------- */}
                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol sm="8">
                            <MDBRow>
                                <MDBCol size="6">
                                    <p className="questions_counter">Question <span>1</span> of 10</p>
                                </MDBCol>
                                <MDBCol size="6" style={{ textAlign: "right" }}>
                                    <p className="questions_counter">Time Left: <span>28s</span></p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol sm="2"></MDBCol>
                    </MDBRow>

                    {/* -----------------------------> RENDER QUESTION <------------------------- */}
                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol sm="8">
                            <Paper >
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol sm="1">
                                        </MDBCol>
                                        <MDBCol sm="10">
                                            <p className="question_render">Question 1: The 2 sides of a triangle are 7 m and 9 m. The two angles of this triangle are 37 degree and 23 degree. Identify the length of the 3rd side of the triangle from the options below: </p>
                                        </MDBCol>
                                        <MDBCol sm="1">
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </Paper>
                        </MDBCol>
                        <MDBCol sm="2"></MDBCol>
                    </MDBRow>
                    <br />

                    {/* -----------------------------> OPTIONS <------------------------- */}
                    <MDBRow>
                        <MDBCol sm="4"></MDBCol>
                        <MDBCol sm="4">
                            <Paper className="options_main">
                                <p className="options">A. Option1</p>
                            </Paper>
                        </MDBCol>
                        <MDBCol sm="4"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="4"></MDBCol>
                        <MDBCol sm="4">
                            <Paper className="options_main2">
                                <p className="options">B. Option2</p>
                            </Paper>
                        </MDBCol>
                        <MDBCol sm="4"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="4"></MDBCol>
                        <MDBCol sm="4">
                            <Paper className="options_main">
                                <p className="options">C. Option3</p>
                            </Paper>
                        </MDBCol>
                        <MDBCol sm="4"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="4"></MDBCol>
                        <MDBCol sm="4">
                            <Paper className="options_main">
                                <p className="options">D. Option4</p>
                            </Paper>
                        </MDBCol>
                        <MDBCol sm="4"></MDBCol>
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
                                    <button className="next_btn">
                                        <MDBRow >
                                            <MDBCol size="8">
                                                <span className="btn_txt">  Next</span>
                                            </MDBCol>
                                            <MDBCol size="2">
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
                </div>
                <br /><br /><br /><br />
            </div>
        );
    }
}
export default Instructions;