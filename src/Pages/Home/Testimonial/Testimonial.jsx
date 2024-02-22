import { useState } from 'react';
import { useEffect } from 'react';
import TestimonialCard from '../../../Component/TestimonialCard';


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
                    testimonials.map(test => <TestimonialCard key={test.id} test={test}></TestimonialCard>)
                }

            </div>
        </div>
    );
};

export default Testimonial;