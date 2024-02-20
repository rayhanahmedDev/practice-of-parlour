import screenImg from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ScreenCare = () => {
    return (
        <div>
            <div className="hero lg:pt-[127px] pt-16 lg:pb-[140px] pb-16 bg-[#FFF8F5]">
                <div className="flex max-w-7xl lg:mx-auto mx-12 flex-col lg:flex-row">
                    <div className='lg:w-1/2 lg:mr-[80px]'>
                        <img className='lg:w-[580px]' src={screenImg} />
                    </div>
                    <div className='lg:w-1/3 mt-12 lg:mt-0'>
                        <h2 className="text-4xl font-bold">Let us handle your screen <span className='text-[#F63E7B]'>Professionally</span>.</h2>
                        <p className="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                        <div className='flex gap-20 lg:mt-[69px]'>
                            <div>
                                <h2 className='text-5xl font-bold text-[#F63E7B]'>500+</h2>
                                <p className='mt-4'>Happy Customer</p>
                            </div>
                            <div>
                                <h2 className='text-5xl font-bold text-[#F63E7B]'>16+</h2>
                                <p className='mt-4'>Total Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenCare;