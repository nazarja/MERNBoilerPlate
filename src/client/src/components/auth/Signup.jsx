import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from '../../services/authService';

const Signup = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState(null);

    const [form, setForm] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    });

    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        if (form.password === form.repeatPassword) {
            if (await signUp(form)) navigate('/auth/signin');
            else {
                setForm({ ...form, username: "" });
                setErrors('That username has already been taken');
            };
        }
        else setErrors('Passwords do not match');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" value={form.username} onChange={handleChange} />
            <input type="password" name="password" placeholder="password" onChange={handleChange} />
            <input type="password" name="repeatPassword" placeholder="repeat password" onChange={handleChange} />
            <input type="submit" value="sign up" />
            <p>{errors}</p>
        </form>
    );
};

export default Signup;