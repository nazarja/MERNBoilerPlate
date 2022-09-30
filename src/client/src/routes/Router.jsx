import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import Home from '../components/home/Home';
import Signin from '../components/auth/Signin';
import Signout from '../components/auth/Signout';
import Signup from '../components/auth/Signup';
import NotFound from '../components/errors/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<PublicRoute />}>
                    <Route path="/auth/signin" element={<Signin />} />
                    <Route path="/auth/signup" element={<Signup />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/auth/signout" element={<Signout />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;