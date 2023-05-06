import { useFormik } from "formik";
import "./Register.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Spinner from '../../components/spinner/Spinner';
import {

  FaUserLock,

} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../../features/Auth/authActions';
import { reset } from '../../features/Auth/authSlice';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "* Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "* Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "* Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "* Required";
  } else if (values.password.length <= 8) {
    errors.password = "Must be 8 characters or more";
  }
  // if (!values.confirmPassword) {
  //   errors.confirmPassword = "* Password should match";
  // } else if (values.password != values.confirmPassword) {
  //   errors.confirmPassword = "Does not match password";
  // }

  return errors;
};

const RegisterForm = () => {

  const dispatch =  useDispatch()
  // const navigate = useNavigate();
  const [err, setErr] = useState("");
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(RegisterUser(values))
      // navigate("/");
      window.location.href = '/login';
    },
  });

  useEffect(() => {
    if (isError) {
      setErr(message);
    }
    if (isSuccess || user) {
      //navigate("/");
      window.location.href = '/login';
    }
   dispatch(reset());
  }, [isSuccess, user, isError, message, dispatch]);


  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="formDiv" id="form--div">
      <div className="foreground">
        <form onSubmit={formik.handleSubmit} className="formmain">
        <div className="img--logo">
        <FaUserLock size={50} />
          </div>
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
          <span className="headingtag">Register/Sign Up</span>
          <label htmlFor="firstName"></label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Enter first name"
            type="text"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="errors">{formik.errors.firstName}</div>
          ) : null}
          <label htmlFor="lastName"></label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Enter last Name"
            type="text"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="errors">{formik.errors.lastName}</div>
          ) : null}
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g johndoe@gmail.com"
           {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="errors">{formik.errors.email}</div>
          ) : null}
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="errors">{formik.errors.password}</div>
          ) : null}
          {/* <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="errors">{formik.errors.confirmPassword}</div>
          ) : null} */}

          <button type="submit" id="btn">
            Register
          </button>
          <p className="signup">
            Already have an account?{" "}
            <Link
              className="linked"
              style={{ textDecoration: "none", color: "#87Ceeb" }}
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
