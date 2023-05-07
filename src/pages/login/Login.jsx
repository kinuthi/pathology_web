
import { useFormik } from "formik";
import {  useNavigate, useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import {

    FaUserLock,
  
  } from "react-icons/fa";
import {  useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/Auth/authActions';
import { useEffect, useState } from 'react';
import { reset } from '../../features/Auth/authSlice';
import Spinner from '../../components/spinner/Spinner';
import { FaEye, FaEyeSlash } from "react-icons/fa";

  


function Login() {
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [err, setErr] = useState("");
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "* Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(loginUser(values))
      // navigate("/");
   
    },
  });

  useEffect(() => {
    if (isError) {
      setErr(message);
    }
    if (isSuccess || user) {
      navigate(from, {replace: true});
    }
   dispatch(reset());
  }, [isSuccess, user, isError, message, navigate, dispatch, from]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="formDiv">
      <form onSubmit={formik.handleSubmit} className="formmain">
    
        <div className="img--logo">
        <FaUserLock size={50} />
          </div>
        <span className="headingtag">Login</span>
        {err ? (
            <div id="alert-border-2" className="flex p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
            <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            <div className="ml-3 text-sm font-medium">
             {err}
            </div>
            <button type="button" onClick={()=> setErr('')} className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">
              <span className="sr-only">Dismiss</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
        ) : (
          ""
        )}
        <label htmlFor="email"></label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="e.g johndoe@gmail.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="errors">{formik.errors.email}</div>
        ) : null}
       <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      <div
    className="password-toggle-icon"
    onClick={() => setShowPassword(!showPassword)}
     >
               {showPassword ? <FaEyeSlash /> : <FaEye />}
         </div>
     
          <Link className="forgot" to='/reset'>
          Forgot Password?</Link>
       
        <button type="submit" id="btn">
          Login
        </button>
        <p className="signup">
          Dont have an account?{" "}
          <Link
            className="linked"
            style={{ textDecoration: "none", color: "#87Ceeb" }}
            to="/register"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;