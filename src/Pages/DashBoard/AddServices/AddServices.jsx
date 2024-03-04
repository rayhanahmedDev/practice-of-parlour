import { AiOutlineCloudUpload } from "react-icons/ai";
import './AddService.css'

const AddServices = () => {
    return (
        <div>
            <div className="mt-6 lg:pl-10 px-4">
                <div className="flex gap-14 items-center">
                    <div>
                        <p>Service Title</p>
                        <input className="md:w-[570px] w-full h-12 pl-5 mt-1" placeholder="Enter Title" type="text" name="" id="" />
                    </div>
                    <div>
                        <p className="mb-1">Image</p>
                        <input type="file" name="" id="uploadImage" />
                        <label className="flex items-center gap-4 label-style" htmlFor="uploadImage"><AiOutlineCloudUpload className="text-xl" /> Upload Image</label>
                    </div>
                </div>

                <p className="mt-5">Price</p>
                <input className="md:w-[570px] w-full h-12 pl-5 mt-1" placeholder="Enter Your Price" type="text" name="" id="" />

                {/* text area */}
                <p className="mt-5">Description</p>
                <textarea className="p-5 md:w-[570px] w-full mt-1" name="" placeholder="Enter Description" id="" cols="" rows="3"></textarea>

                <div className="mt-6">
                    <button className="btn px-14 btn-error bg-[#F63E7B] text-white">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default AddServices;