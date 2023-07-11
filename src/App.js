import React, { useState } from 'react';
import Headernav from './Layouts/Headernav';
import Home from './Pages/Home';
import Footer from './Layouts/Footer';
import Headtop from './Layouts/Headtop';
import Pages from './Pages/Pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [show, setShow] = useState(false);
  const handletoggle = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      {/* <Headtop handletoggle={handletoggle} />
      <Headernav show={show} /> */}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <Pages />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
