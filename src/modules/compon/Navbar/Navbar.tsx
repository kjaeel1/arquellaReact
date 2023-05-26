
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
// import { State } from "rootExports/rootReducer";
// import { ActionFeedBack } from "./ActionFeedback";
// import { NavbarPaths } from "./Navbar.Paths";
// import UserInfo from "./Navbar.UserInfo";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from 'tss-react/mui';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" to="https://material-ui.com/">
                HitchHiker
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const drawerWidth = 240;

// const useStyles = makeStyles()(theme => ({
//     root: {
//         display: "flex"
//     },
//     toolbar: {
//         paddingRight: 24, // keep right padding when drawer closed
//         background: "#bbdefb",
//         color: "black"
//     },
//     toolbarIcon: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "flex-end",
//         padding: "0 8px",
//         ...theme.mixins.toolbar
//     },
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(["width", "margin"], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//         })
//     },
//     appBarShift: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(["width", "margin"], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen
//         })
//     },
//     menuButton: {
//         marginRight: 36
//     },
//     menuButtonHidden: {
//         display: "none"
//     },
//     title: {
//         flexGrow: 1
//     },
//     drawerPaper: {
//         position: "relative",
//         whiteSpace: "nowrap",
//         width: drawerWidth,
//         transition: theme.transitions.create("width", {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen
//         }),
//         background: "#bbdefb"
//     },
//     drawerPaperClose: {
//         overflowX: "hidden",
//         transition: theme.transitions.create("width", {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up("sm")]: {
//             width: theme.spacing(9)
//         }
//     },
//     appBarSpacer: (theme as any).mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         height: "100vh",
//         overflow: "auto"
//     },
//     container: {
//         paddingTop: theme.spacing(4),
//         paddingBottom: theme.spacing(4)
//     },
//     paper: {
//         padding: theme.spacing(2),
//         display: "flex",
//         overflow: "auto",
//         flexDirection: "column"
//     },
//     fixedHeight: {
//         height: 240
//     }
// }));
interface NavbarProps {
    //   children: JSX.Element;
}
export const Navbar: React.FC<NavbarProps> = props => {
    // const { classes } = useStyles();
    const [open, setOpen] = React.useState(true);
    //   const IsAdmin: boolean = useSelector((state: any) => state.Session.IsAdmin);


    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            
            <div>
                <AppBar
                    position="absolute"
                    // className={clsx(classes.appBar, open && classes.appBarShift)}
                >
                    <Toolbar >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            // className={clsx(
                            //     classes.menuButton,
                            //     open && classes.menuButtonHidden
                            // )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            // className={classes.title}
                        >
                        </Typography>
                        {/* <UserInfo /> */}

                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    // classes={{
                    //     paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                    // }}
                    open={open}
                >
                    <div 
                    // className={classes.toolbarIcon}
                    >
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    {/* <NavbarPaths /> */}
                </Drawer>
                <main>
                    <div/>
                    <Container maxWidth={false}>
                        <div id="top-anchor"></div>
                        {/* {props.children} */}
                        {/* <ActionFeedBack></ActionFeedBack>
                        <Box pt={4}>
                            <Copyright />
                        </Box> */}
                    </Container>
                </main>
            </div>
      
           
            <React.Fragment>
                {/* {props.children} */}
            </React.Fragment>
      
    </React.Fragment>
    );
};

