import React from 'react'
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Maximize';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import { db } from '../firebase';
import firebase from 'firebase';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add(
            {
                to:formData.to,
                subject:formData.subject,
                message:formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            dispatch(closeSendMessage());
    };
    const dispatch = useDispatch();

    return (
        <SendMailContainer className="sendMail">
            <SendMailHeader className="sendMail_header">
                <h3>New Message</h3>
               
                <CloseIcon className="sendMail_close"
                onClick={() => dispatch(closeSendMessage())}/>
            </SendMailHeader>

            <SendMailForm onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="email" ref={register({ required: true })}/>
                {errors.to && <p className="sendMail_error"> To is Required!</p>}

                <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })}/>
                {errors.subject && <p className="sendMail_error"> Subject is Required!</p>}

                <input name="message" className="sendMail_message" type="text" ref={register({ required: true })}/>
                {errors.message && <p className="sendMail_error"> Message is Required!</p>}
                
                <SendMailOptions className="sendMail_options">
                    <Button
                    className="sendMail_send"
                    variant="contained"
                    color="primary"
                    type="submit"
                    >Send</Button>
                </SendMailOptions>

            </SendMailForm>
        </SendMailContainer>

    )
}

export default SendMail


const SendMailContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 50px;
    background-color: #404040;
    width: 40%;
    height: 40%;
    max-width: 500px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

const SendMailHeader = styled.div`
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;

    > h3 {
        color: whitesmoke;
        font-size: 13px;
    }

    > .sendMail_close {
        cursor: pointer;

    }
`;

const SendMailForm = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    > input {
        height: 30px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid whitesmoke;
        outline: none;
    }

    > .sendMail_message {
        flex: 1;
    }

    > .sendMail_error {
        background-color: white;
        color: red;
        text-align: right;
        padding: 2px;
    }
`;

const SendMailOptions = styled.div`
    > .sendMail_send {
        background-color: #3079ed !important;
        text-transform: capitalize !important;
        margin: 15px !important;
    }
`;
