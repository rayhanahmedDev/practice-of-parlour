import { useLoaderData } from "react-router-dom";

const Bookings = () => {
    const bookingData = useLoaderData()

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-11 px-7">
                {
                    bookingData.map(booked => <div key={booked._id} className="card bg-base-100 py-8 px-8 hover:drop-shadow-2xl">
                        <div className=''>
                            <div className="mr-5 mb-6 flex justify-between items-center">
                                <img src={booked.img} alt="" className="rounded-xl w-[72px]" />
                                <p className="px-6 py-2 rounded-md bg-[#FFE3E3] text-[#FF4545]">Pending</p>
                            </div>
                            <div>
                                <h2 className="card-title mb-3">{booked.title}</h2>
                                <p className="text-sm font-medium text-[#606268]">{booked.des}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Bookings;