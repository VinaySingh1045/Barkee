import React from 'react'

const OurServices = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-center my-20 font-bold text-4xl">Our Services</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        <div className="flex flex-col items-center text-center">
          <div className="w-[85px] h-[85px] mb-4"><img src="/image14.png" alt="" /></div>
          <h3 className="text-xl font-semibold text-gray-800">Boarding</h3>
          <p className="text-gray-600 mt-2">
            Your pets stay overnight in your sitter’s home. They’ll be treated like part of the family in a comfortable environment.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-[85px] h-[85px] mb-4"><img src="/image15.png" alt="" /></div>
          <h3 className="text-xl font-semibold text-gray-800">House Sitting</h3>
          <p className="text-gray-600 mt-2">
            Your sitter takes care of your pets and your home. Your pets will get all the attention they need without leaving home.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-[85px] h-[85px] mb-4"><img src="/image16.png" alt="" /></div>
          <h3 className="text-xl font-semibold text-gray-800">Dog Walking</h3>
          <p className="text-gray-600 mt-2">
            Your dog gets a walk around your neighborhood. Perfect for busy days and dogs with extra energy to burn.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-[85px] h-[85px] mb-4"><img src="/image17.png" alt="" /></div>
          <h3 className="text-xl font-semibold text-gray-800">Drop-in Visits</h3>
          <p className="text-gray-600 mt-2">
            Pawsome care for your furry friend! Our drop-in visits ensure they get the love and attention they deserve.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-[85px] h-[85px] mb-4"><img src="/image18.png" alt="" /></div>
          <h3 className="text-xl font-semibold text-gray-800">Doggy Day Care $ Visit</h3>
          <p className="text-gray-600 mt-2">
            Your dog spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.
          </p>
        </div>

      </div>
    </div>
  )
}

export default OurServices
