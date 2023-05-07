import { useSelector } from 'react-redux';
import Card from '../../components/card/Card'
import './dashboard.css'
import { useNavigate } from 'react-router-dom';

const Dashboard =()=>{

    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    console.log('user',user);
    if(!user){
      navigate('/login')
    }

    return(

        <section className='dashboard'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>




        </section>
        

        
    )
}

export default Dashboard