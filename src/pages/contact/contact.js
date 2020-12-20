import React, { Component } from "react";
import Drawer from './../../components/drawer/drawer'
import Paper from "@material-ui/core/Paper";

class Contact extends Component {
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
                        <p className="active_q">Contact</p>
                    </Paper>
                    <br /><br />

                </div>
                <br /><br /><br /><br />
            </div>
        );
    }
}
export default Contact;