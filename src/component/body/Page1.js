"use client";

import React from 'react';

const Page1 = () => {
    const buttonValues = ['Realestate','Finance', 'Sports', 'Testimonials', 'CTA', 'Topbar', 'Calendar', 'Partners ', 'Sports', 'Blog', 'Contact', 'Footer', 'Footer', 'Footer', 'Footer'];

    return (
        <div className='border-t-[1px] border-[#DEE0D9] w-full'>
            <div className='mx-auto px-[24px] sm:px-0 lg:px-[50px]'>
                <div className='flex items-center justify-start gap-[10px] my-[22px ] md:my-[30px] xl:my-[44px] flex-wrap'>
                    {buttonValues.map((value, index) => (
                        <button
                            key={index}
                            className='filterbutton px-[10px] sm:px-[13px] lg:px-[20px] py-[5px] sm:py-[6px] lg:py-[8px] bg-[#0e13010d] hover:bg-[#C6EA60] duration-300'
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page1;
