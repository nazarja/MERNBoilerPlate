import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>404</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    );
};

export default NotFound;