import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'
import './Navber.css'
const Navber = () => {

    const links = <>
    <li><NavLink className='mr-8' to='/'>Home</NavLink></li>
    <li><NavLink className='mr-8' to='/portfolio'>Our Portfolio</NavLink></li>
    <li><NavLink className='mr-8' to='/team'>Our Team</NavLink></li>
    <li><NavLink className='mr-8' to='/contact'>Contact Us</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div>
            <div className="drawer overflow-hidden">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#FFF8F5] py-6 md:px-8 lg:px-28">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img className="w-[127px]" src={logo} alt="" />
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu-horizontal">
                                {/* Navbar menu content here */}
                                {links}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;