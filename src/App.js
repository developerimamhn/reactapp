// import Button from './Button';
import NavBar from './component/header/NavBar';
import Body from './component/body/Body';
import Footer from './component/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Body/>
        <Footer/>
      </BrowserRouter>
      {/* <Button/> */}
    </div>
  );
}

export default App;
