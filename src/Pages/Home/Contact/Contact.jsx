import Button from "../../../Component/Button";


const Contact = () => {
    return (
        <div className="pt-24 max-w-3xl mx-auto pb-12">
            <h2 className="text-4xl font-bold text-center pb-20 max-w-[410px] mx-auto">Let us handle your
                project, professionally.</h2>
            <div className="mx-6">
                {/* 1st input field */}
                <div className="flex items-center gap-6">
                    <input className="md:w-[368px] w-full h-14 pl-5" placeholder="Full Name" type="text" name="" id="" />

                    <input className="md:w-[368px] w-full h-14 pl-5" placeholder="Last Name" type="text" name="" id="" />
                </div>
                {/* 2nd input field */}
                <div className="flex items-center gap-6 mt-6">
                    <input className="md:w-[368px] w-full h-14 pl-5" placeholder="Email Address" type="text" name="" id="" />

                    <input className="md:w-[368px] w-full h-14 pl-5" placeholder="Phone Number" type="text" name="" id="" />
                </div>
                {/* text area */}
                <textarea className="mt-6 p-5 w-full" name="" placeholder="Your Message" id="" cols="" rows="6"></textarea>
                
                <div className="text-center mt-6">
                    <Button ButtonTitle={"Send Message"}></Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;