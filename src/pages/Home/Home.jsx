import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';


const Home =()=>{
return(
    <div>
    
        <Sidebar/>
        <div className="content" style={{display: 'grid', marginLeft: '180px'}}>
        <Outlet/>
        </div>
    </div>
);
}

export default Home