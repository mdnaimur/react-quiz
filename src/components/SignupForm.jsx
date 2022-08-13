import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Buttton from './Buttton'
import Checkbox from './Checkbox'
import Form from './Form'
import TextInput from './TextInput'

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState()

    const { signup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmpassword) {
            return setError("Password doesn't match!!")
        }
    }

    return (
        <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
            <TextInput type="text" required placeholder="Enter name" icon="person" value={username} onChange={(e) => (setUsername(e.target.value))} />
            <TextInput type="text" required placeholder="Enter Email" icon="alternate_email" value={email} onChange={(e) => (setUsername(e.target.value))} />
            <TextInput type="password" required placeholder="Enter Password" icon="lock" value={password} onChange={(e) => (setUsername(e.target.value))} />
            <TextInput type="password" required placeholder="Enter Confirm Password" icon="lock_clock" value={confirmpassword} onChange={(e) => (setUsername(e.target.value))} />
            <Checkbox text="I agree to the Terms &amp; Conditions" required />
            <Buttton> <span>Submit Now</span> </Buttton>
            {error && <p className="error">{error}</p>}

            <div class="info">
                Already have an account? <Link to="login">Login</Link> instead.
            </div>
        </Form>
    )
}
