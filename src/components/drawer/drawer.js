import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './drawer.css'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});
export default function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom"
            })}
            role="presentation"

        >

            {/* -----------------------------> SIDE BAR PAGES <------------------------- */}
            <List style={{ marginLeft: "40px", marginTop: "50px" }}>
            <a href="/Home" className="ml-1 link_color">
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} >
                    <div className="_drawerPageLInk">
                        Home</div>
                </ListItem>
                </a>
                <a href="/Instructions" className="ml-1 link_color">
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => props.path.push("Instructions")}>
                    <div className="_drawerPageLInk">My Profile</div>
                </ListItem>
                </a>
                <a href="/Contact" className="ml-1 link_color">
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} >
                    <div className="_drawerPageLInk">Contact</div>
                </ListItem>
                </a>
                <a href="/Questions" className="ml-1 link_color">
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} >
                    <div className="_drawerPageLInk">Results</div>
                </ListItem>
                </a>
                <a href="/" className="ml-1 link_color">
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} >
                    <div className="_drawerPageLInk">Logout</div>
                </ListItem>
                </a>
            </List>
        </div>
    );

    return (
        <AppBar>
            <div style={{ backgroundColor: "white", padding: 10 }}>
                {["left"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ flex: 1 }}>
                                <Button onClick={toggleDrawer(anchor, true)}>
                                    <MenuIcon />
                                </Button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                {/* <span className="_siteTitle">MENTORING</span>  */}
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                                    alt=""
                                    className="rounded-circle z-depth-1-half"
                                />

                                <MDBDropdown>
                                    <MDBDropdownToggle  caret color="white" >
                                        Shane Watson
      </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem></MDBDropdownItem>

                                        <MDBDropdownItem>email: shane@gmail.com

</MDBDropdownItem>
                                        <MDBDropdownItem>Wallet Coins: 239 coins</MDBDropdownItem>
                                        <MDBDropdownItem></MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                {/* <span className="_siteTitle">MENTORING</span>
                <span className="_siteTitle">MENTORING</span> */}

                                <div>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle style={{ color: "red" }} />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </AppBar>
    );
}