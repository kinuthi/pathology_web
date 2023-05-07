
import { FaSignInAlt, FaUser , FaSignOutAlt } from "react-icons/fa";


import { Link, useNavigate, } from "react-router-dom";

import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/Auth/authActions';
import { reset } from '../../features/Auth/authSlice';



function Header() {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate('/login');
  
  };




  return (
    <div className="header hidden-print">
      <div id="header_tag">
        <Link to="/" style={{display: 'flex',alignItems : 'center', gap:'5'}}>
          <h1>Pathology</h1>
          <img src="https://imgs.search.brave.com/tye20r-9LIO1ZobUfddbN4RPid8CQh3up28MfeqaRqw/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9oZWxw/ZGVzay1pY29uLXBu/Zy9oZWxwZGVzay1p/Y29uLXBuZy0yMS5q/cGc" alt="" width={40} height={40} />
        </Link>
      </div>
      <ul className="links">
         {user &&
          <li>
                 <Link  onClick={handleLogout} id="logout--btn">
                {" "}
                <FaSignOutAlt />
                logout
              </Link>
       
          </li>
          }
 
          <>
          {!user &&
            <><li>

              <Link to="login">
                {" "}
                <FaSignInAlt />
                Login
              </Link>
            </li><li>
                <Link to="register">
                  <FaUser /> Register
                </Link>
              </li></>
         }
          </>
   
      </ul>
    </div>
  );
}

export default Header;
