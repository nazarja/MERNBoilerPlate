import { useState } from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signIn as signInAction } from '../../store/actions/authActions';
import { signIn as signInService } from '../../services/authService';

const Signin = ({ signInAction }) => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState(null);

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const response = await signInService(form);
        if (response) {
            signInAction(response.data.user);
            navigate('/');
        }
        else setErrors('Invalid Credentials')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" onChange={handleChange} />
            <input type="password" name="password" placeholder="password" onChange={handleChange} />
            <input type="submit" value="sign in" />
            {errors}
        </form>
    );
};

export default connect(null, { signInAction })(Signin);