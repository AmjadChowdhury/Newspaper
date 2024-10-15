import moment from 'moment';
import logo from '../../src/assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto w-3/4 lg:w-auto' src={logo} alt="" />
            <p className='font-semibold text-xl'>Journalism without Fear and Favour</p>
            <p className='font-bold text-xl'>{moment().format('dddd MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;