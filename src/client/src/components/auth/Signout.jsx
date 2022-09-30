import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signOut as signOutAction } from '../../store/actions/authActions';
import { signOut as signOutService } from '../../services/authService';

const Signout = ({ signOutAction }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        signOutAction();
        signOutService();
        navigate('/');
    };

    return (
        <button onClick={handleClick}>Sign Out</button>
    );
};

export default connect(null, { signOutAction })(Signout);