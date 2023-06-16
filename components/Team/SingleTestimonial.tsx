import { Testimonial } from '@/types/testimonial'
import Link from 'next/link'
import Image from 'next/image'
const starIcon = (
    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
        <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
    </svg>
)

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
    const { name, image, designation, social } = testimonial

    return (
        <div className="w-full">
            <div
                className="wow fadeInUp shadow-one rounded-md bg-white p-8 dark:bg-[#1D2144] lg:px-5 xl:px-8"
                data-wow-delay=".1s"
            >
                <div className="flex items-center">
                    <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
                        <Image src={image} alt={name} fill />
                    </div>
                    <div className="w-full">
                        <a href={social} target="_blank" rel="noreferrer">
                            <h5 className="text-dark mb-1 text-lg font-semibold dark:text-white lg:text-base xl:text-lg">
                                {name}
                            </h5>
                        </a>{' '}
                        <p className="text-body-color text-sm">{designation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonial
