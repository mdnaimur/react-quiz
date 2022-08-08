import classes from "../../styles/Signup.module.css";
import Buttton from '../Buttton';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from "../Illustration";
import TextInput from '../TextInput';


export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.signup} `}>
                    <TextInput type="text" placeholder="Enter name" icon="person" />
                    <TextInput type="text" placeholder="Enter Email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter Password" icon="lock" />
                    <TextInput type="password" placeholder="Enter Confirm Password" icon="lock_clock" />
                    <Checkbox text="I agree to the Terms &amp; Conditions" />
                    <Buttton>Submit Now</Buttton>


                    <div class="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}