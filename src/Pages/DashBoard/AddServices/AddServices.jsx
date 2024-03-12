import { AiOutlineCloudUpload } from "react-icons/ai";
import './AddService.css'
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_api
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddServices = () => {

    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const postData = {
                title: data.title,
                des: data.des,
                price: data.price,
                img: res.data.data.display_url,
            }
           const serviceData = await axiosPublic.post('/services-data', postData)
            if (serviceData.data.insertedId) {
                reset()
                Swal.fire({
                    title: "Service Adding Success",
                    text: "You clicked the button!",
                    icon: "success",
                });
            }
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-6 lg:pl-10 px-4">
                    <div className="flex gap-14 items-center">
                        <div>
                            <p>Service Title</p>
                            <input
                                {...register("title", { require: true })}
                                className="md:w-[570px] w-full h-12 pl-5 mt-1" placeholder="Enter Title"
                                type="text"
                                name="title" id="" />
                        </div>
                        <div>
                            <p className="mb-1">Image</p>
                            <input
                                {...register("image", { require: true })}
                                type="file"
                                name="image"
                                id="uploadImage" />
                            <label className="flex items-center gap-4 label-style" htmlFor="uploadImage"><AiOutlineCloudUpload className="text-xl" /> Upload Image</label>
                        </div>
                    </div>

                    <p className="mt-5">Price</p>
                    <input
                        {...register("price", { require: true })}
                        className="md:w-[570px] w-full h-12 pl-5 mt-1" placeholder="Enter Your Price"
                        type="text"
                        name="price" id="" />

                    {/* text area */}
                    <p className="mt-5">Description</p>
                    <textarea
                        {...register("des", { require: true })}
                        className="p-5 md:w-[570px] w-full mt-1"
                        name="des"
                        placeholder="Enter Description"
                        id="" cols=""
                        rows="3"></textarea>

                    <div className="mt-6">
                        <button type="submit" className="btn px-14 btn-error bg-[#F63E7B] text-white">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddServices;