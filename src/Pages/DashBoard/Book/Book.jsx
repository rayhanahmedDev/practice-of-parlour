import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";


const Book = () => {

    const { user } = UseAuth()

    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6 pl-10">
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
                    <p>Pay With</p>
                    <p>Credit card</p>
                </div>
                {/* nested input field */}
                <div>
                    <input
                        required
                        {...register("service", { required: true })}
                        className="md:w-[570px] w-full h-14 pl-5 mt-5"
                        placeholder="Card Number"
                        type="text"
                        name="service"
                        id="" />

                    <div className="flex gap-5">
                        <input
                            required
                            {...register("service", { required: true })}
                            className="md:w-[275px] w-full h-14 pl-5 mt-5"
                            placeholder="MM/YY"
                            type="text"
                            name="service"
                            id="" />

                        <input
                            required
                            {...register("service", { required: true })}
                            className="md:w-[275px] w-full h-14 pl-5 mt-5"
                            placeholder="CVC"
                            type="text"
                            name="service"
                            id="" />
                    </div>
                </div>
                <div className="mt-6">
                    <button type="submit" className="btn px-14 btn-error bg-[#F63E7B] text-white">Pay</button>
                </div>
            </div>
        </form>
    );
};

export default Book;