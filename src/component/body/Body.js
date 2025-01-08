"use client";

import React, { Suspense, lazy } from 'react';
const Page1 = lazy(() => import('./Page1'));
const Page2 = lazy(() => import('./Page2'));
// import Page3 from './Page3';





const Body = () => {
    return (
        <div>
            <Suspense fallback={<div className='absolute left-[50%] top-[40%] translate-[-50%, -50%]'>Loading ...</div>}>
                <Page1 />
            </Suspense>
            <Suspense fallback={<div className='absolute left-[50%] top-[45%] translate-[-50%, -50%]'>Loading ...</div>}>
                <Page2 />
            </Suspense>
        </div>
    );
};

export default Body;