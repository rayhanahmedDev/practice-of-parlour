import Button from '../../../Component/Button';
import bannerImg from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#FFF8F5]">
                <div className="flex items-center max-w-7xl lg:mx-auto justify-evenly flex-col lg:flex-row-reverse mx-6 py-12">
                    <div className="lg:w-1/2">
                    <img src={bannerImg} className="lg:w-[484px] lg:h-[478px] rounded-lg" />
                    </div>
                    <div className="lg:w-1/2 mr-[151px] mt-12">
                        <h1 className="text-5xl font-bold">BEAUTY SALON FOR EVERY WOMEN</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <Button ButtonTitle='Get an Appointment'></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;