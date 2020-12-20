import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';
import Sidebar from './../../components/navbar/navbar'
import Card from './../../components/card/card'
import Drawer from './../../components/drawer/drawer'
import Paper from "@material-ui/core/Paper";
import LeftIcon from './../../img/left-arrow.png'
import RightIcon from './../../img/right-arrow.png'
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
                    <br />
                    <br />
                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol sm="8">

                            <MDBRow>
                                <MDBCol size="6">
                                    <p>Question <span>1</span> of 10</p>
                                </MDBCol>
                                <MDBCol size="6" style={{ textAlign: "right" }}>
                                    <p>Time Left: <span>28s</span></p>

                                </MDBCol>
                            </MDBRow>

                        </MDBCol>
                        <MDBCol sm="2"></MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol sm="2"></MDBCol>
                        <MDBCol sm="8">
                            <Paper >
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol sm="1">
                                        </MDBCol>
                                        <MDBCol sm="10">
                                            <p>Question 1: The 2 sides of a triangle are 7 m and 9 m. The two angles of this triangle are 37 degree and 23 degree. Identify the length of the 3rd side of the triangle from the options below: </p>
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
                    <MDBRow>
                        <MDBCol sm="4"></MDBCol>
                        <MDBCol sm="4">
                            <Paper>
                                <p>ds</p>
                            </Paper>
                        </MDBCol>
                        <MDBCol sm="4"></MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="4"></MDBCol>
                        <MDBCol sm="4">
                            <Paper>
                                <p>ds</p>
                            </Paper>
                        </MDBCol>
                        <MDBCol sm="4"></MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="4"></MDBCol>
                        <MDBCol sm="4">
                            <Paper>
                                <p>ds</p>
                            </Paper>
                        </MDBCol>
                        <MDBCol sm="4"></MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="4"></MDBCol>
                        <MDBCol sm="4">
                            <Paper>
                                <p>ds</p>
                            </Paper>
                        </MDBCol>
                        <MDBCol sm="4"></MDBCol>

                    </MDBRow>






                    <br /><br />
                    <MDBRow>
                        <MDBCol sm="1"></MDBCol>
                        <MDBCol sm="10">
                            <MDBRow>
                                <MDBCol sm="4">
                                <button style={{ width: "100%" }}>
                                        btn
                            </button>
                                </MDBCol>
                                <MDBCol sm="4">
                                
                                </MDBCol>
                                <MDBCol sm="4">
                                <button style={{ width: "100%" }}>
                                        btn
                            </button>
                                </MDBCol>

                            </MDBRow>

                        </MDBCol>

                        <MDBCol sm="1"></MDBCol>
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