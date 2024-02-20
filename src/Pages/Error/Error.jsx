import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.gif'

const Error = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errorImg} alt="" />
            <Link to='/'><button className='btn'>Go Home</button></Link>
        </div>
    );
};

export default Error;