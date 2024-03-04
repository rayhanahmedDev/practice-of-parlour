import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Book = () => {

    const { user } = UseAuth()
    const [bookings, setBookings] = useState([])
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        fetch('http://localhost:5000/bookingsData')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const totalPrice = bookings.reduce((previousValue, total) => previousValue + total.price, 0)

    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = async (data, event) => {
        event.preventDefault()

        const orderData = {
            name : data.name,
            email : data.email,
            service : data.service,
            credit_card : data.credit_card,
            status : 'pending'
        }
        axiosPublic.post('/order-data', orderData)
        .then((res) => {
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: `${data.service}Order Successful`,
                    icon: "success"
                  });
            }
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mt-6 lg:pl-10 px-4">
                <input
                    required
                    {...register("name", { required: true })}
                    className="md:w-[570px] w-full h-14 pl-5"
                    placeholder="Your Name"
                    type="text"
                    name="name" id=""
                />

                {
                    user?.email ? <input
                        required
                        {...register("email", { required: true })}
                        className="md:w-[570px] w-full h-14 pl-5 mt-5" placeholder="Company’s name, Designation"
                        readOnly value={user.email}
                        type="email"
                        name="email"
                        id="" /> : ""
                }
                <input
                    required
                    {...register("service", { required: true })}
                    className="md:w-[570px] w-full h-14 pl-5 mt-5"
                    placeholder="Your Service Name"
                    type="text"
                    name="service"
                    id="" />

                {/* payment system */}
                <div>
                    <p className="my-5">Pay With</p>
                    <select name="" id="" defaultValue='default' {...register("credit_card", { required: true })}>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Paypal">Paypal</option>
                    </select>
                </div>
                {/* nested input field */}
                <div className="md:w-[570px] w-full h-14 pl-5">

                </div>
                <div className="mt-6 flex items-center justify-between md:w-[570px]">
                    <p className="font-bold">Your Service  charged will be $ {totalPrice}</p>

                    <button type="submit" className="btn px-7 btn-error bg-[#F63E7B] text-white">Order</button>

                    <Link to={'/dashboard/payments'}>
                        <button className="btn px-9 btn-error bg-[#F63E7B] text-white">Pay</button>
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default Book;