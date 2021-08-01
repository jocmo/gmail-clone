import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Header() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
        
    };
    return (
        <MainContainer className="main_header">
            <HeaderLeft className="header_left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/>
            </HeaderLeft>

            <HeaderMiddle className="header_middle">
                <SearchOutlined/>
                <input type="text" placeholder="Search mail" />
                <ArrowDropDownIcon className="header_inputCaret" />
            </HeaderMiddle>

            <HeaderRight className="header_right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar className="avatar" onClick={signOut} src={user?.photoUrl}/>
            </HeaderRight>

        </MainContainer>
        
    )
}

export default Header

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
`;

const HeaderLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`;

const HeaderMiddle = styled.div`
    display: flex;
    align-items: center;
    flex: 0.7;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 7px;
    margin: 10px 0;
    height: 28px;

    > input {
        border: none;
        width: 100%;
        padding: 10px;
        background-color: transparent;
        outline: none;
        font-size: medium;
    }

    > .MuiSvgIcon-root {
        color: gray;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    padding-right: 20px;
    > .avatar {
        cursor: pointer;
    }
`;
