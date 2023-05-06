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

function Routers() {
	return (
		<Routes>
        
			<Route path='/' element={<Index />}>
				<Route path='login' element={<Login />} />
				<Route path='register' element={<RegisterForm />} />
				<Route path='reset' element={<ForgotPassword />} />
				<Route path='change' element={<ChangePassword />} />
			
        
				<Route path='/' element={<Home />}>
					<Route index element={<Dashboard/>}/>
					<Route path='users' element={<Users/>}/>
					<Route path='blogs' element={<Blogs/>}/>
					<Route path='profile' element={<Profile />} />
				</Route>
			</Route>
      
		</Routes>
	);
}

export default Routers;
