import { useEffect } from 'react';
import { refreshAuth } from './services/authService';
import Router from './routes/Router';
import './styles/app.scss';


const App = () => {
    useEffect(() => {
        refreshAuth();
        console.log("RUNNING")
    }, []);

    return <Router />;
};

export default App;