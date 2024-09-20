import React from 'react'

const SignupNow = () =>
{
  return (
    <div className="flex flex-col md:flex-row bg-white my-20">
      <div className="md:w-1/2">
        <img
          src="/image19.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 bg-[#2bb673] text-white p-10 flex flex-col justify-center items-start">
        <h2 className="text-4xl font-bold mb-4">
          Sign up now and get <span className="text-white">30% off</span> your first Booking
        </h2>
        <p className="text-lg mb-6">
          Experience the best care for your furry friend with our professional dog sitting and walking services.
        </p>
        <button className="bg-white text-green-500 py-3 px-8 rounded-lg font-semibold hover:bg-gray-200">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default SignupNow
