import React from 'react'

const LocalSitters = () => {
    return (
        <>
            <div className='mb-20'>
                <h1 className='text-center my-20 font-bold text-4xl'>Meet Our Local Sitters</h1>
                <div className="flex justify-center gap-8 mx-32">

                    <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                        <div className="flex justify-center mb-4">
                            <img src="/image3.png" alt="" className="w-[72px] h-[72px]" />
                        </div>
                        <h2 className="font-semibold text-xl mb-2">Search</h2>
                        <p className="text-[#808080]">Read verified reviews by pet parents like <div> you choose a sitter who’s a great match for you and your pets.</div></p>
                    </div>
                    <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                        <div className="flex justify-center mb-4">
                            <img src="/image4.png" alt="" className="w-[72px] h-[72px]" />
                        </div>
                        <h2 className="font-semibold text-xl mb-2">Book & Pay</h2>
                        <p className="text-[#808080]">No cash or checks needed. We make it
                            <div>simple to book and make secured payments through our website or app.</div></p>
                    </div>
                    <div className="text-center p-4 bg-white shadow-lg rounded-lg">
                        <div className="flex justify-center mb-4">
                            <img src="/image5.png" alt="" className="w-[72px] h-[72px]" />
                        </div>
                        <h2 className="font-semibold text-xl mb-2">Relax</h2>
                        <p className="text-[#808080]">Your pets are in great hands with a loving <div> sitter. Plus your booking is backed by 24/7 Support and the Barkee Guarantee.</div></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocalSitters
