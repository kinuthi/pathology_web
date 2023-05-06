
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {

    FaUserLock,
  
  } from "react-icons/fa";
  


function ForgotPassword() {

 const navigate = useNavigate;

  const formik = useFormik({
    initialValues: {
      email: "",
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
      console.log(values);
      navigate('/change');
      alert(JSON.stringify(values, null, 2));
    },
  });

  function handleClick() {
    navigate('/new-page');
  }
  return (
    <div className="formDiv">
      <form onSubmit={formik.handleSubmit} className="formmain">
        <div className="img--logo">
        <FaUserLock size={50} />
          </div>
        <span className="headingtag">Reset Password</span>
        <button onClick={handleClick}>Go to new page</button>
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
   
     
        <button type="submit" id="btn">
          Request
        </button>
        <p className="signup">
          Remembered password? {" "}
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
  );
}

export default ForgotPassword;