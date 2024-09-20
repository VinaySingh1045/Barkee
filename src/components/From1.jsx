import React from 'react';

const Form1 = () => {
    return (
        <>
            <div className='flex flex-col md:flex md:flex-row bg-[#EEFCF2]'>
                <div className='w-1/2 bg-[#fffff] flex justify-center items-center p-12'>
                    <img src="/image2.png" alt="Relaxing with Pet" className='max-h-full' />
                </div>

                <div className='w-1/2 p-12 bg-white'>
                    <div className='flex justify-center  mb-6 gap-36'>
                        <button className='px-6 py-2  w-[50%] text-gray-800 font-semibold'>Dog</button>
                        <button className='px-6 py-2  w-[50%] text-gray-800 font-semibold'>Cat</button>
                    </div>
                    <h2 className='text-2xl font-bold mb-4'>Book trusted sitters and dog walkers.</h2>

                    <form>
                        <div className='flex space-x-4 mb-4'>
                            <button className='flex flex-col items-center py-2 border border-gray-300 rounded-lg w-32'><img src="/image22.png" alt="" className='w-[40px]' /><div>Boarding</div></button>
                            <button className='flex flex-col items-center py-2 border border-gray-300 rounded-lg w-32'><img src="/image23.png" alt="" className='w-[40px]' /><div>House Sitting</div></button>
                            <button className='flex flex-col items-center py-2 border border-gray-300 rounded-lg w-32'><img src="/image24.png" alt="" className='w-[40px]' /><div>Drop-In Visits</div></button>
                            <button className='flex flex-col items-center py-2 border border-gray-300 rounded-lg w-32'><img src="/image25.png" alt="" className='w-[40px]' /><div>Day Care</div></button>
                            <button className='flex flex-col items-center py-2 border border-gray-300 rounded-lg w-32'><img src="/image26.png" alt="" className='w-[40px]' /><div>Dog Walking</div></button>
                        </div>

                        <div className='mb-4 flex justify-between'>
                            <label className='block text-sm font-medium mb-1'>How often do you need this service?</label>
                            <div className='flex space-x-2'>
                                <div>
                                    <input type='radio' id='one-time' name='serviceFrequency' className='mr-2' />
                                    <label htmlFor='one-time' className='py-2 px-4  rounded-lg cursor-pointer'>
                                        One Time
                                    </label>
                                </div>
                                <div>
                                    <input type='radio' id='repeat-weekly' name='serviceFrequency' className='mr-2' />
                                    <label htmlFor='repeat-weekly' className='py-2 px-4  rounded-lg cursor-pointer'>
                                        Repeat Weekly
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-1'>Find near you</label>
                            <input type='text' placeholder='Zip code or Postal Code' className='w-full py-2 px-4 border border-gray-300 rounded-lg' />
                        </div>

                        <div className='flex space-x-4 mb-4'>
                            <div className='flex-1'>
                                <label className='block text-sm font-medium mb-1'>Start date</label>
                                <input type='date' className='w-full py-2 px-4 border border-gray-300 rounded-lg' />
                            </div>
                            <div className='flex-1'>
                                <label className='block text-sm font-medium mb-1'>End date</label>
                                <input type='date' className='w-full py-2 px-4 border border-gray-300 rounded-lg' />
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-1'>My pet size</label>
                            <select className='w-full py-2 px-4 border border-gray-300 rounded-lg'>
                                <option>Small - 0-7kg</option>
                                <option>Medium - 8-20kg</option>
                                <option>Large - 21-45kg</option>
                                <option>Massive - 46+ kg</option>
                            </select>
                        </div>

                        <button className='w-full py-2 px-4 bg-black text-white rounded-lg font-semibold'>Search</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form1;
