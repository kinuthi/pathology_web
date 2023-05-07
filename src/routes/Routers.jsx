import { Routes, Route } from 'react-router-dom';
import Index from '../components/Layout/Index';
import Login from '../pages/login/Login';
import RegisterForm from '../pages/register/Register';
import ForgotPassword from '../pages/login/Forgot_password';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/dashboard/Dashboard';
import Users from '../pages/users/Users';
import Blogs from '../pages/blogs/blogs';
import ChangePassword from '../pages/login/change_password';
import Profile from '../pages/profile/profile';
import Private from '../components/Layout/Guard/private';

function Routers() {
	return (
		<Routes>
			<Route path='/' element={<Index />}>
				<Route path='login' element={<Login />} />
				<Route path='register' element={<RegisterForm />} />
				<Route path='reset' element={<ForgotPassword />} />
				<Route path='change' element={<ChangePassword />} />
			
        
				<Route path='/' element={<Private><Home /></Private>}>
					<Route index element={<Private><Dashboard/></Private>}/>
					<Route path='users' element={<Private><Users/></Private>}/>
					<Route path='blogs' element={<Private><Blogs/></Private>}/>
					<Route path='profile' element={<Private><Profile /></Private>} />
				</Route>
			</Route>      
		</Routes>
	);
}
export default Routers;
