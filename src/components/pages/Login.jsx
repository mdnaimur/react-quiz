import React from 'react';
import classes from "../../styles/Signup.module.css";
import Buttton from '../Buttton';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';


export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.login} `}>
                    <TextInput type="text" placeholder="Enter Email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter Password" icon="lock" />
                    <Buttton>Submit Now</Buttton>
                </Form>
            </div>

        </>
    )
}
