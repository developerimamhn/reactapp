import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

const NavBar = lazy(() => import('./component/header/NavBar'));
const Body = lazy(() => import('./component/body/Body'));
const Footer = lazy(() => import('./component/footer/Footer'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div className='absolute left-[50%] top-[50%] translate-[-50%, -50%]'>Loading NavBar...</div>}>
          <NavBar />
        </Suspense>
        <Suspense fallback={<div className='absolute left-[50%] top-[55%] translate-[-50%, -50%]'>Loading Body...</div>}>
          <Body />
        </Suspense>
        <Suspense fallback={<div className='absolute left-[50%] top-[60%] translate-[-50%, -50%]'>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
