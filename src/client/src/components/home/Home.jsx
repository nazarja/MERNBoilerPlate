import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ user }) => {
	return !user.isAuth 
    ? (
		<>
			<Link to="/auth/signin">Sign in</Link>
			<Link to="/auth/signup">Sign up</Link>
		</>
	)
    : (
        <>
			<h1>Hello, {user.username}!</h1>
			<Link to="/auth/signout">Sign out</Link>
		</>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);