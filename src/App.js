import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Mail from './components/Mail';
import styled from 'styled-components'
import EmailList from './components/EmailList'
import SendMail from './components/SendMail'
import { useDispatch, useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { login, selectUser } from './features/userSlice';
import Login from './components/Login'
import { auth } from './firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
      }))
      }
    })
  }, [])

  return (

      <Router>
        {!user ? (
          <Login/>
        ) : (
        
        <MainApp className="app">
          <Header/>
          <AppBody className="app_body">
        
        <SideBar/>

        <Switch>
          <Route path="/mail">
            <Mail/>
          </Route>

          <Route path="/">
            <EmailList/>
          </Route>
        </Switch>


        {sendMessageIsOpen && <SendMail/>}
      </AppBody>
        </MainApp>
      
        )}
      
      
      </Router>
    
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const MainApp = styled.div`

`;

