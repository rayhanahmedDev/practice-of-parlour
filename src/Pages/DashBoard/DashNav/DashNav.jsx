import UseAuth from '../../../Hooks/UseAuth';
import DashLogo from '../../../assets/logo.png'

const DashNav = () => {

    const {user} = UseAuth()

    return (
        <div>
            <div className="drawer overflow-hidden">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#fff] py-5 md:px-8 lg:px-16">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img className="w-[127px]" src={DashLogo} alt="" />
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu-horizontal">
                                {/* Navbar menu content here */}
                                <h2 className="text-xl font-medium">{user.displayName}</h2>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <h2 className="text-xl font-medium">Rayhan</h2>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashNav;