import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Component/Button";


const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    return (
        <div className="mt-24 mb-12">
            <div>
                <h2 className="text-4xl font-bold text-center mb-16">Our Awesome <span className="text-[#F63E7B]">Services</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-12 mx-auto mb-12 cursor-pointer">
                {
                    service.map(ser => <Link to={`/details/${ser._id}`} key={ser._id}>
                        <div className="card bg-base-100 hover:drop-shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img src={ser.img} alt="" className="rounded-xl w-[72px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{ser.title}</h2>
                                <p className="text-[#F63E7B] text-sm font-medium">Price : ${ser.price}</p>
                                <p>{ser.des}</p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
            <div className="text-center">
                <Button ButtonTitle={"Explore More"}></Button>
            </div>
        </div>
    );
};

export default Services;