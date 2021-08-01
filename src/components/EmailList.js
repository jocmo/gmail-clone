import { Checkbox, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import EmailRow from './EmailRow'
import StarIcon from '@material-ui/icons/Star'
import { db } from '../firebase'


function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
                }))
            )
        );
        
    }, []);

    return (
        
            <EmailListContainer className="emailList_container">
                <EmailListSettings className="emailList_settings">
                    <EmailListSettingsLeft className="emailList_settingsLeft">
                        <Checkbox/>
                        <IconButton>
                            <ArrowDropDownIcon/>
                        </IconButton>

                        <IconButton>
                            <RefreshIcon/>
                        </IconButton>

                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </EmailListSettingsLeft>

                    <EmailListSettingsRight className="emailList_settingsRight">
                        <IconButton>
                            <NavigateBeforeIcon/>
                        </IconButton>

                        <IconButton>
                            <NavigateNextIcon/>
                        </IconButton>

                        <IconButton>
                            <KeyboardHideIcon/>
                        </IconButton>

                        <IconButton>
                            <SettingsIcon/>
                        </IconButton>
                    </EmailListSettingsRight>
                </EmailListSettings>

                <EmailListSection className="emailList_section">
                    <Section Icon={InboxIcon} title="Primary" color="red" selected/>
                    <Section Icon={PeopleIcon} title="Social" color="#1A73E8"/>
                    <Section Icon={LocalOfferIcon} title="Promotion" color="green"/>
                </EmailListSection>

                <EmailListList className="emailList_list">
                    {emails.map(({id, data: { to, subject, message, timestamp}}) => (
                        <EmailRow
                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                        
                        />
                    ))}
                    
                </EmailListList>

                


            </EmailListContainer>
    )
}

export default EmailList


const EmailListContainer = styled.div`
    flex: 1;
    overflow: scroll;
`;

const EmailListSettings = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 999;
`;

const EmailListSettingsLeft = styled.div`

`;

const EmailListSettingsRight = styled.div`

`;

const EmailListSection = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 999;
`;

const EmailListList = styled.div`
    padding-bottom: 20%;
`;



