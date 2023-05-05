import { useFormik } from "formik";
import "./Register.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {

  FaUserLock,

} from "react-icons/fa";

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
  if (!values.confirmPassword) {
    errors.confirmPassword = "* Password should match";
  } else if (values.password != values.confirmPassword) {
    errors.confirmPassword = "Does not match password";
  }

  return errors;
};

const RegisterForm = () => {
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      // console.log(values);
     // navigate("/");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="formDiv" id="form--div">
      <div className="foreground">
        <form onSubmit={formik.handleSubmit} className="formmain">
        <div className="img--logo">
        <FaUserLock size={50} />
          </div>
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
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="errors">{formik.errors.confirmPassword}</div>
          ) : null}

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
