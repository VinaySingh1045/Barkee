import React from 'react'

const Walkers = () => {
    return (
        <>
            <div className='mb-20'>
                <h1 className='text-center my-20 font-bold text-4xl'>Meet Our Barkee Walkers</h1>
                <div className="flex justify-center gap-8 mx-32">

                    <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                        <div className="flex justify-center mb-4">
                            <img src="/image6.png" alt="" className="w-[256px] h-[256px]" />
                        </div>
                        <h2 className="font-semibold text-xl mb-2">Search For A Dog Walker</h2>
                        <p className="text-[#808080]">Step aside, boredom! Our dog walking service brings joy and excitement to every stroll</p>
                    </div>
                    <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                        <div className="flex justify-center mb-4">
                            <img src="/image7.png" alt="" className=" h-[256px]" />
                        </div>
                        <h2 className="font-semibold text-xl mb-2">Organize a free meet</h2>
                        <p className="text-[#808080]">Inviting all furry friends and their humans to our free dog meet! Let's wag, sniff, and play together</p>
                    </div>
                    <div className="text-center p-4 bg-white shadow-lg rounded-lg">
                        <div className="flex justify-center mb-4">
                            <img src="/image8.png" alt="" className="w-[256px] h-[256px]" />
                        </div>
                        <h2 className="font-semibold text-xl mb-2">Confirm Booking</h2>
                        <p className="text-[#808080]">Ready to make your dog's day? Confirm their booking now and let the excitement begin!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Walkers
