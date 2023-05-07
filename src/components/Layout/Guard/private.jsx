
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function Private() {

   const { user } = useSelector((state) => state.auth)

  if (!user)

  return <Navigate to='/login' />
}

export default Private;
