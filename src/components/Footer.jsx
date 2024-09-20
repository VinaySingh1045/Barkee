import React from 'react';

const Footer = () => {
    return (
        <>
            <div
                className="py-10 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/image9.png')`
                }}
            >
                <div className=" bg-opacity-50 py-10">
                    <div className="mx-24 px-4 text-black">
                        <div className="flex justify-between">

                            <div className='w-[40%]'>
                                <h1 className="text-2xl font-bold mb-2">
                                    <img src="/image.png" alt="" className='invert w-[114px] h-[38px]' />
                                </h1>
                                <p className="mb-4">We provide the best service for your pets. Please come and visit our shop.</p>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-black p-2 rounded-full text-white">
                                        <img src="/image10.png" alt="" className='h-[24px]' />
                                    </a>
                                    <a href="#" className="border p-2 rounded-full text-black">
                                        <img src="/image13.png" alt="" className='h-[24px]' />
                                    </a>
                                    <a href="#" className="border p-2 rounded-full text-black">
                                        <img src="/image11.png" alt="" className='h-[24px]' />
                                    </a>
                                    <a href="#" className="border p-2 rounded-full text-black">
                                        <img src="/image12.png" alt="" className='h-[24px]' />
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Services</h3>
                                <ul>
                                    <li className="mb-1"><a href="#">Walking</a></li>
                                    <li className="mb-1"><a href="#">Daily Drop-ins</a></li>
                                    <li className="mb-1"><a href="#">Pet Sittings</a></li>
                                    <li className="mb-1"><a href="#">Training</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Popular Locations</h3>
                                <ul>
                                    <li className="mb-1"><a href="#">San Francisco</a></li>
                                    <li className="mb-1"><a href="#">Los Angeles</a></li>
                                    <li className="mb-1"><a href="#">Chicago</a></li>
                                    <li className="mb-1"><a href="#">New York</a></li>
                                    <li className="mb-1"><a href="#">Athens, Greece</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Apply</h3>
                                <ul>
                                    <li className="mb-1"><a href="#">Become a Dog Walker</a></li>
                                    <li className="mb-1"><a href="#">Careers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='bg-black py-4'>
                <div className='flex justify-between items-center mx-24'>
                    <p className='text-white'>
                        &copy;2024 barkee.Inc All rights reserved.
                    </p>
                    <div className='flex space-x-4'>
                        <span className='text-white cursor-pointer'>
                            Privacy Policy
                        </span>
                        <span className='text-white cursor-pointer'>
                            Terms & Conditions
                        </span>
                        <span className='text-white cursor-pointer'>
                            Transparency
                        </span>
                        <span className='text-white cursor-pointer'>
                            Notice to CA Residents
                        </span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;
