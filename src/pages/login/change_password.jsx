
import { useFormik } from "formik";
import "./Login.css";
import {

    FaUserLock,
  
  } from "react-icons/fa";
  


function ChangePassword() {
 //const navigate = useNavigate;

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""

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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="formDiv">
      <form onSubmit={formik.handleSubmit} className="formmain">
        <div className="img--logo">
        <FaUserLock size={50} />
          </div>
        <span className="headingtag">Create New Password</span>

        <label htmlFor=" Password"></label>
        <input
            id="password"
            name="password"
            type="password"
            placeholder="New Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="errors">{formik.errors.password}</div>
          ) : null}
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Repeat New Password"
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="errors">{formik.errors.confirmPassword}</div>
          ) : null}
     
        <button type="submit" id="btn">
          Request
        </button>
    

      </form>
    </div>
  );
}

export default ChangePassword;