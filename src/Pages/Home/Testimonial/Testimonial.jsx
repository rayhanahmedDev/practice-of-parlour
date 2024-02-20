import { useState } from 'react';
import iconImg from '../../../assets/icons/Group 33046.svg'
import { useEffect } from 'react';

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('testi.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto mt-[75px] mb-[98px]">
            <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* card */}

                {
                    testimonials.map(test => <div key={test.id} className="card bg-base-100 py-8 px-8 hover:drop-shadow-2xl">
                        <div className='flex items-center'>
                            <figure className="mr-5">
                                <img src={test.img} alt="" className="rounded-xl w-[72px]" />
                            </figure>
                            <div>
                                <h2 className="card-title">{test.title}</h2>
                                <p className="text-[#F63E7B] text-sm font-medium">{test.des2}</p>
                            </div>
                        </div>
                        <div>
                            <p className='my-4'>{test.des}</p>
                            <img className='w-32' src={iconImg} alt="" />
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Testimonial;