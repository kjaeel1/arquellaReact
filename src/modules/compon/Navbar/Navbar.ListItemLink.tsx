import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import './Navbar.css'
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
    useLocation
} from "react-router-dom";
import { NavbarArea } from "./Navbar.Area";
import { Divider } from "@mui/material";

interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
    nested: any
}


function ListItemLink(props: ListItemLinkProps) {
    let location = useLocation();
    const { icon, primary, to,nested } = props;
    const isActive = location.pathname.includes(props.to);
    const renderLink = React.useMemo(
        () =>
            React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
                <RouterLink to={to} ref={ref} {...itemProps} />
            )),
        [to]
    );
    console.log(nested)
    return (
        <>
        {
            !!nested? <div>
            {nested.map((area, index) =>{
                console.log(area)
            return <div key={index}>
                    <NavbarArea {...area} />
                    <Divider />
                </div>
            }
            )}
        </div>:
        <li>
            <ListItem
                component={!!nested ? 'div':renderLink}
                className="innerItemSpacing"
                // selected={isActive}
                >
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
        }
        
        </>
    );
}

export default ListItemLink;
