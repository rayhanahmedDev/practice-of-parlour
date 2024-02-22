import { FaCartArrowDown, FaCommentDots, FaHome, FaList, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import DashNav from "../Pages/DashBoard/DashNav/DashNav";

const Dashboard = () => {
    return (
        <div>
            <DashNav></DashNav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="lg:col-span-3 px-16 bg-[#fff] flex flex-col item-center mt-8">
                    <ul className="">
                        <>
                            <li >
                                <NavLink to='/dashboard/book' className="flex items-center gap-5"><FaList></FaList>  Book</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/bookings' className="flex items-center gap-5 my-3"><FaCartArrowDown></FaCartArrowDown> Bookings</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/review' className="flex items-center gap-5"><FaCommentDots></FaCommentDots> Review</NavLink>
                            </li>
                        </>
                        {/* shared links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to='/' className="flex items-center gap-5"><FaHome></FaHome>Home</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="lg:col-span-9 h-full bg-[#F4F7FC] min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;