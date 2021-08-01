import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star';
import TimeIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../features/mailSlice'



function SideBar() {
    const dispatch = useDispatch();

    return (
        <MainSideBar className="sidebar_main">
            <Button startIcon={<AddIcon fontSize="large"/>}
            className="compose_sidebar"
            onClick={() => dispatch(openSendMessage())}
            >Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
            <SidebarOption Icon={TimeIcon} title="Snoozed" number={554}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
            <SidebarOption Icon={SendIcon} title="Sent" number={54}/>
            <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={54}/>
            <SidebarOption Icon={ExpandMoreIcon} title="Show More"/>
            
            <FooterSideBar className="sidebar_footer">
                 <FooterIcons>
                     <IconButton>
                         <PersonIcon/>
                     </IconButton>
                     <IconButton>
                         <DuoIcon/>
                     </IconButton>
                     <IconButton>
                         <PhoneIcon/>
                     </IconButton>
                 </FooterIcons>
            </FooterSideBar>

        </MainSideBar>
    )
}

export default SideBar



const MainSideBar = styled.div`

    flex: 0.3;
    max-width: 300px;
    padding-right: 20px;

    > .MuiButton-root {
        margin-top: 15px !important;
        margin-left: 10px !important;
        margin-bottom: 15px !important;
        text-transform: capitalize !important;
        color: gray;
        padding: 10px !important;

        border-radius: 30px !important;
        background-image: none;
        box-shadow: 0 2px 5px -2px rgba(0,0,0,0.75);
        width: 130px;
    }
`;

const FooterSideBar = styled.div`
    display: flex;
    justify-content: center;
`;

const FooterIcons = styled.div`

`;