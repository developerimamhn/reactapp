"use client";

import React, {useState} from 'react';
// import Image from 'next/image';
// import image1 from './image/image (1).png';
// import image2 from './image/image (2).png';
// import image3 from './image/image (3).png';
// import image4 from './image/image (4).png';
// import image5 from './image/image (5).png';
// import image6 from './image/image (6).png';
// import image7 from './image/image (7).png';
// import image8 from './image/image (8).png';
// import image9 from './image/image9.png';
// import image10 from './image/image10.png';
import CopyFigmaComponentButton from '../footer/copyFigmaToClipboard';


const Page2 = () => {
    // const data = [
    //     {
    //         img: image1,
    //         title: 'Signup',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image2,
    //         title: 'Deposit',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image3,
    //         title: 'Confirmations',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image4,
    //         title: 'Withdrawals',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image5,
    //         title: 'Settings',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image6,
    //         title: 'Reports',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image7,
    //         title: 'Analytics',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image8,
    //         title: 'Support',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image1,
    //         title: 'Signup',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image2,
    //         title: 'Deposit',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image3,
    //         title: 'Confirmations',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image4,
    //         title: 'Withdrawals',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image5,
    //         title: 'Settings',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image6,
    //         title: 'Reports',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image7,
    //         title: 'Analytics',
    //         date: '24 July Updated',
    //     },
    //     {
    //         img: image8,
    //         title: 'Support',
    //         date: '24 July Updated',
    //     },
    // ];

    
    return (
        // <div>
        //     <div className="mx-auto px-[24px] sm:px-[50px]">
        //         <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-x-[30px] gap-y-[15px]">
        //             {data.map((item, index) => (
        //                 <div className="figmavlue group border-[1px] border-[#F3F4F1]" key={index}>
        //                     <div className="valueimage w-full">
        //                         <img className="w-full" src={item.img} alt={item.title} />
        //                     </div>
        //                     <div className="flex justify-between items-center w-full  relative">
        //                         <div className="flex flex-col">
        //                             <h4 className="Signup m-0 p-0">{item.title}</h4>
        //                             <p className="date mt-[6px] mb-0 p-0">{item.date}</p>
        //                         </div>
                                
                                <CopyFigmaComponentButton/>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};


export default Page2;



{/* <button className="searchitems group !bg-[#F5F5F5] group-hover:!bg-[#C6EA60] duration-300 cursor-pointer " onClick={handleImageChange}>
                                    <p className='absolute top-[-32px] right-[0px] copybutton m-0 p-0' >
                                    <img src={imageSrc} alt="Image" />
                                    </p>
                                    <svg
                                        className="group-hover:stroke-[#000] stroke-[#7C808E] w-[16px] lg:w-[18px] xl:w-[20px] 2xl:w-[22px]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="26"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                    >
                                        <path
                                            d="M10.1797 16.0938C10.1797 13.177 10.1797 11.7186 11.0858 10.8124C11.992 9.90625 13.4504 9.90625 16.3672 9.90625H17.3984C20.3152 9.90625 21.7736 9.90625 22.6798 10.8124C23.5859 11.7186 23.5859 13.177 23.5859 16.0938V17.125C23.5859 20.0418 23.5859 21.5002 22.6798 22.4063C21.7736 23.3125 20.3152 23.3125 17.3984 23.3125H16.3672C13.4504 23.3125 11.992 23.3125 11.0858 22.4063C10.1797 21.5002 10.1797 20.0418 10.1797 17.125V16.0938Z"
                                            strokeWidth="1.54688"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M18.4296 9.90625C18.4271 6.85675 18.381 5.27719 17.4933 4.19563C17.3219 3.98676 17.1304 3.79525 16.9216 3.62383C15.7806 2.6875 14.0855 2.6875 10.6953 2.6875C7.3051 2.6875 5.60999 2.6875 4.46907 3.62383C4.2602 3.79524 4.06869 3.98676 3.89727 4.19563C2.96094 5.33655 2.96094 7.03166 2.96094 10.4219C2.96094 13.8121 2.96094 15.5072 3.89727 16.6481C4.06868 16.857 4.2602 17.0485 4.46907 17.2199C5.55062 18.1076 7.13019 18.1537 10.1797 18.1561"
                                            strokeWidth="1.54688"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button> */}
                                
                                
                                
                                // const [imageSrc, setImageSrc] = useState(image9);
    // // const [copied, setCopied] = useState(false);

    // const handleImageChange = () => {
    //     setImageSrc(image10);
    //     setTimeout(() => {
    //         setImageSrc(image9);
    //     }, 700);
    // };
