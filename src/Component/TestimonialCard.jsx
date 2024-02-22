import iconImg from '../assets/icons/Group 33046.svg'


const TestimonialCard = ({ test }) => {
    const { img, title, des, } = test;
    return (
        <div>
            <div className="card bg-base-100 py-8 px-8 hover:drop-shadow-2xl">
                <div className='flex items-center'>
                    <figure className="mr-5">
                        <img src={img} alt="" className="rounded-xl w-[72px]" />
                    </figure>
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <p className="text-[#F63E7B] text-sm font-medium">{test.des2}</p>
                    </div>
                </div>
                <div>
                    <p className='my-4'>{des}</p>
                    <img className='w-32' src={iconImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;