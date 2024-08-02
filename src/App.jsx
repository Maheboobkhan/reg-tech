import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CustomerVerification from './pages/CustomerVerification';
import Navbar from './components/Header';
import Footer from './components/Footer';
import BankAccountVerification from './pages/BankAccountVerification';
import EKyc from './pages/EKyc';
import FooterForAllComponent from './components/FooterForAllPage';
import VideoKyc from './pages/VideoKyc';
import ESign from './pages/ESign';
import OfflineAadhar from './pages/OfflineAadhar';


class App extends React.Component {

  render() {
    return (
      <div className='overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customer_verification' element={<CustomerVerification />} />
          <Route path='/account_verification' element={<BankAccountVerification />} />
          <Route path='/e_kyc' element={<EKyc />} />
          <Route path='/video_kyc' element={<VideoKyc />} />
          <Route path='/e_sign' element={<ESign />} />
          <Route path='/aadhar' element={<OfflineAadhar />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App

















// import React, { Component } from 'react';
// import './App.css'; // Import the CSS file for styling and animation

// class TextAnimation extends Component {
//   render() {
//     return (
//       <div className="text-container">
//         <p className="animated-text">This is the text where the cursor pan animation will occur.</p>
//       </div>
//     );
//   }
// }

// export default TextAnimation;
