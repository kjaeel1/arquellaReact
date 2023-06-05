import Divider from '@mui/material/Divider';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AppsIcon from "@mui/icons-material/Apps";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BuildIcon from "@mui/icons-material/Build";
import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from "@mui/icons-material/Dashboard";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import FilterListIcon from '@mui/icons-material/FilterList';
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import GetAppIcon from '@mui/icons-material/GetApp';
import GroupIcon from "@mui/icons-material/Group";
import HelpIcon from "@mui/icons-material/Help";
import HomeIcon from '@mui/icons-material/Home';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ImageIcon from '@mui/icons-material/Image';
import ListIcon from '@mui/icons-material/List';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PublishIcon from '@mui/icons-material/Publish';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarsIcon from '@mui/icons-material/Stars';
import WebIcon from "@mui/icons-material/Web";
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import React from "react";
import { useSelector } from "react-redux";
// import { State } from "rootExports/rootReducer";
import { NavbarArea, NavBarAreaProps } from "./Navbar.Area";
export const NavbarPaths: React.FC<{}> = () => {
    // const IsAdmin: boolean = useSelector((state: any) => state.Session.IsAdmin);
    // const IsHitchHiker: boolean = useSelector((state: any) => state.Session.IsHitchHiker);
    const areas: NavBarAreaProps[] = [
        {
            AreaIcon: <HomeIcon />,
            Links: [{
                Icon: <HelpIcon />,
                Path: "LiveDashboard",
                Title: "Live Dashboard"
            },
            {
                Icon: <HelpIcon />,
                Path: "Overview",
                Title: "Overview"
            }, {
                Icon: <HelpIcon />,
                Path: "MainDashboard",
                Title: "Main Dashboard"
            }, {
                Icon: <HelpIcon />,
                Path: "OverviewReports",
                Title: "Overview Reports"
            }, {
                Icon: <HelpIcon />,
                Path: "SystemNotice",
                Title: "System Notice"
            }, {
                Icon: <HelpIcon />,
                Path: "features",
                Title: "Adverts for new features of the system"
            }],
            RootPath: "CALL",
            Title: "CALL"
        },
        {
            AreaIcon: <DashboardIcon />,
            RootPath: "System",
            Title: "System",
            Links: [
                {
                    Icon: <HelpIcon />,
                    Path: "Call",
                    Title: "Call"
                },
                {
                    Icon: <AppsIcon />,
                    Path: "Maintenace",
                    Title: "Maintenace"
                },
                {
                    Icon: <AccountTreeIcon />,
                    Path: "KPI",
                    Title: "KPI"
                },
                {
                    Icon: <GroupIcon />,
                    Path: "Notification ",
                    Title: "Notification "
                },
                {
                    Icon: <BuildIcon />,
                    Path: "Move",
                    Title: "Move",
                    nested: [{
                        AreaIcon: <HomeIcon />,
                        Links: [{
                            Icon: <HelpIcon />,
                            Path: "Live View",
                            Title: "Live View"
                        },
                        {
                            Icon: <HelpIcon />,
                            Path: "Config",
                            Title: "Config"
                        },
                        {
                            Icon: <HelpIcon />,
                            Path: "Maintenace",
                            Title: "Maintenace"
                        },
                        {
                            Icon: <HelpIcon />,
                            Path: "KPI",
                            Title: "KPI"
                        },
                        {
                            Icon: <HelpIcon />,
                            Path: "Notification ",
                            Title: "Notification "
                        }
                        ],
                        RootPath: "Move",
                        Title: "Move",
                    }],
                    nestedLvl: 2
                },
                // {
                //     Icon: <BuildIcon />,
                //     Path: "sample",
                //     Title: "test",
                //     nested: [{
                //         AreaIcon: <HomeIcon />,
                //         Links: [{
                //             Icon: <HelpIcon />,
                //             Path: "gettingHome",
                //             Title: "GettingHome"
                //         },
                //         {
                //             Icon: <HelpIcon />,
                //             Path: "gettingHome",
                //             Title: "GettingHome"
                //         }
                //         ],
                //         RootPath: "home",
                //         Title: "NestedHome",
                //     }],
                //     nestedLvl: 2
                // },

            ],


        },
        {
            AreaIcon: <WebIcon />,
            RootPath: "displaysettings",
            Title: "Display settings",
            Links: [
                {
                    Icon: <HelpIcon />,
                    Path: "gettingstarted",
                    Title: "Getting started"
                },
                {
                    Icon: <FeaturedVideoIcon />,
                    Path: "general",
                    Title: "General settings"
                },
                {
                    Icon: <FilterListIcon />,
                    Path: "farefilter",
                    Title: "Fare filter"
                },
                {
                    Icon: <PeopleAltIcon />,
                    Path: "passengertypes",
                    Title: "Passenger types"
                },
                {
                    Icon: <AttachMoneyIcon />,
                    Path: "calc",
                    Title: "Calculation"
                },
                {
                    Icon: <ListAltIcon />,
                    Path: "bookingmanagervisibility",
                    Title: "Booking manager"
                },
                // {
                //     Icon: <ListAltIcon />,
                //     Path: "smartCalendar",
                //     Title: "Smart calendar"
                // },
            ]
        },
        {
            AreaIcon: <BusinessIcon />,
            RootPath: "corporateidentity",
            Title: "Corporate Identity",
            Links: [
                {
                    Icon: <HelpIcon />,
                    Path: "gettingstarted",
                    Title: "Getting started"
                },
                {
                    Icon: <ImageIcon />,
                    Path: "logos",
                    Title: "Logos"
                },
                {
                    Icon: <HourglassEmptyIcon />,
                    Path: "waitscreen",
                    Title: "Waitscreen"
                },
            ]
        },
        {
            AreaIcon: <GetAppIcon />,
            RootPath: "export",
            Title: "Export",
            Links: [
                {
                    Icon: <HelpIcon />,
                    Path: "gettingstarted",
                    Title: "Getting started"
                },
                {
                    Icon: <LockOpenIcon />,
                    Path: "deeplinks",
                    Title: "Deeplinks"
                },
            ]
        },
        {
            AreaIcon: <PublishIcon />,
            RootPath: "import",
            Title: "Import",
            Links: [
                {
                    Icon: <HelpIcon />,
                    Path: "gettingstarted",
                    Title: "Getting started"
                },
                {
                    Icon: <DashboardIcon />,
                    Path: "branches",
                    Title: "Branches"
                },
                {
                    Icon: <GroupIcon />,
                    Path: "users",
                    Title: "Users"
                },

            ]
        },
        {
            AreaIcon: <MonetizationOnIcon />,
            RootPath: "calculation",
            Title: "Calculation",
            Links: [
                {
                    Icon: <HelpIcon />,
                    Path: "gettingstarted",
                    Title: "Getting started"
                },
                {
                    Icon: <FormatListNumberedIcon />,
                    Path: "rules",
                    Title: "Rules"
                },
                {
                    Icon: <PlayCircleOutlineIcon />,
                    Path: "formulas",
                    Title: "Formulas"
                },
                {
                    Icon: <EuroSymbolIcon />,
                    Path: "currencies",
                    Title: "Currencies"
                },
                {
                    Icon: <AccountBalanceWalletIcon />,
                    Path: "consolidator",
                    Title: "Consolidator calculation"
                },
            ]
        },
        {
            AreaIcon: <StarsIcon />,
            RootPath: "salespreference",
            Title: "Sales preference",
            Links: [
                {
                    Icon: <HelpIcon />,
                    Path: "gettingstarted",
                    Title: "Getting started"
                },
                {
                    Icon: <FormatListNumberedIcon />,
                    Path: "rules",
                    Title: "Rules"
                },
                {
                    Icon: <PlayCircleOutlineIcon />,
                    Path: "actions",
                    Title: "Actions"
                },

            ]
        },
        {
            AreaIcon: <AccountBalanceWalletIcon />,
            RootPath: "budgeting",
            Title: "Budgeting",
            Links: [
                {
                    Icon: <HelpIcon />,
                    Path: "gettingstarted",
                    Title: "Getting started"
                },
                {
                    Icon: <LocalAtmIcon />,
                    Path: "deposits",
                    Title: "Deposits"
                },
            ]
        },
        {
            AreaIcon: <QueryBuilderIcon />,
            RootPath: "universaltempdata",
            Title: "Temporal data",
            Links: [
                {
                    Icon: <HelpIcon />,
                    Path: "gettingstarted",
                    Title: "Getting started",
                    // nested: true,
                },
                {
                    Icon: <ListIcon />,
                    Path: "customerprofiles/list",
                    Title: "Customer profiles"
                },
                {
                    Icon: <ListIcon />,
                    Path: "customerprofiles/list",
                    Title: "Customer profiles"
                },
            ]
        },


    ]
    return <div>
        {areas.map((area, index) =>
            <div key={index}>

                <NavbarArea {...area} />
                <Divider />
            </div>
        )}
    </div>
}