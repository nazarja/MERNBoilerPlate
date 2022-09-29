import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../components/shared/Loader';

const ProtectedRoute = ({ user: { isAuth } }) => {
    if (isAuth === null) return <Loader />;
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, null)(ProtectedRoute);