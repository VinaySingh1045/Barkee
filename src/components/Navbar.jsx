import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="bg-green-500">
                <div className="flex justify-between items-center p-6 mx-32">

                    <div className="flex items-center">
                        <h1 className="text-white text-3xl font-bold">BeAPetParent</h1>
                    </div>

                    <div className="flex items-center gap-7">
                        <a href="#become-sitter" className="text-white hover:underline">
                            Become a Sitter
                        </a>
                        <a href="#our-services" className="text-white hover:underline">
                            Our Services
                        </a>

                        <button className="bg-white px-5 py-3 rounded-full font-semibold">
                            Sign In
                        </button>

                        <div className="flex items-center gap-1">
                            <img src="/image1.png" alt="" className="h-6" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
