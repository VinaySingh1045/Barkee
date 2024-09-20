import React from 'react';

const AskedQuestions = () => {
    return (
        <>
            <div className="mx-24 p-8 flex mb-20">
                <div className='w-[30%]'>
                    <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
                    <p className="text-lg mb-8 text-gray-600">
                        Find answer to common questions about our dog care services, booking
                        process, and safety measures.
                    </p>
                </div>
                <div className='w-1/2 ml-80'>
                    <div className="">
                        <div className="border-b-2 pb-4 my-2">
                            <div className='flex justify-between'>
                                <h2 className="text-xl font-semibold">How do I book?</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="mt-2 text-gray-600">
                                Booking our dog care services is easy. Simply visit our website, select the desired service, choose the date and time, and proceed to checkout.
                            </p>
                        </div>
                    </div>
                    <div className="border-b-2 pb-4 flex justify-between">
                        <h2 className="text-xl font-semibold">What are your rates?</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="border-b-2 pb-4 flex justify-between">
                        <h2 className="text-xl font-semibold">Are you insured?</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="border-b-2 pb-4 flex justify-between">
                        <h2 className="text-xl font-semibold">Do you offer dog walking?</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AskedQuestions;
