import { useLoaderData } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Button from "../../Component/Button";
import Swal from "sweetalert2";


const Details = () => {
    const { img, title, price, des } = useLoaderData()

    const handleBook = () => {
        const items = {
            img,
            title,
            price,
            des
        }
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(items),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.insertedId){
                    Swal.fire({
                        title: "Good job!",
                        text: `${title} Has been Booked`,
                        icon: "success"
                      });
                }
            });
    };

return (
    <div>
        <Navber></Navber>
        <div className="h-[70vh] flex justify-center mt-6">
            <div className="card max-w-sm bg-base-100 hover:shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl w-[72px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[#F63E7B] text-sm font-medium">Price : ${price}</p>
                    <p>{des}</p>
                    <div onClick={handleBook}>
                        <Button ButtonTitle='Book Now'></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Details;