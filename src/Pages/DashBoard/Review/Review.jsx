
const Review = () => {
    return (
        <div>
            <div className="mt-6 pl-10">
                <input className="md:w-[570px] w-full h-14 pl-5" placeholder="Your Name" type="text" name="" id="" />

                <input className="md:w-[570px] w-full h-14 pl-5 mt-5" placeholder="Company’s name, Designation" type="text" name="" id="" />
                {/* text area */}
                <textarea className="mt-6 p-5 md:w-[570px] w-full" name="" placeholder="Description" id="" cols="" rows="3"></textarea>

                <div className="mt-6">
                <button className="btn px-14 btn-error bg-[#F63E7B] text-white">Submit</button>
                </div>
            </div>

        </div>
    );
};

export default Review;