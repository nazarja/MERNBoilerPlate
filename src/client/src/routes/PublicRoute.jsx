import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ user: { isAuth } }) => {
    return !isAuth ? <Outlet /> : <Navigate to="/" />;
};

const mapStateToProps = state => {
    return  {
        user: state.user
    };
};

export default connect(mapStateToProps, null)(PublicRoute);