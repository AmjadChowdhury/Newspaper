import moment from 'moment';
import logo from '../../src/assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto w-3/4 lg:w-auto' src={logo} alt="" />
            <p>Journalism without Fear and Favour</p>
            <p>{moment().format('dddd MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;