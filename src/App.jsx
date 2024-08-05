// import React from 'react';
// import './App.css'
// import { Routes, Route, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
// import CustomerVerification from './pages/CustomerVerification';
// import Navbar from './components/Header';
// import Footer from './components/Footer';
// import BankAccountVerification from './pages/BankAccountVerification';
// import EKyc from './pages/EKyc';
// import FooterForAllComponent from './components/FooterForAllPage';
// import VideoKyc from './pages/VideoKyc';
// import ESign from './pages/ESign';
// import OfflineAadhar from './pages/OfflineAadhar';
// import AadharMasking from './pages/AadharMasking';
// import DBFMatch from './pages/DBFMatch';
// import Enach from './pages/Enach';
// import Demo from './pages/Demo';
// import LoginPage from './pages/Login';
// import ContactUs from './pages/ContactUs';
// import Company from './pages/Company';
// import Careers from './pages/Careers';
// import Blog from './pages/Blog';


// class App extends React.Component {

//   render() {


//     const location = useLocation();

//     // Define the paths where the footer should not be displayed
//     const hideFooterPaths = ['/login'];

//     // Check if the current path is in the list of paths to hide the footer
//     const shouldHideFooter = hideFooterPaths.includes(location.pathname);

//     return (
//       <div className='overflow-x-hidden'>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/customer_verification' element={<CustomerVerification />} />
//           <Route path='/account_verification' element={<BankAccountVerification />} />
//           <Route path='/e_kyc' element={<EKyc />} />
//           <Route path='/video_kyc' element={<VideoKyc />} />
//           <Route path='/e_sign' element={<ESign />} />
//           <Route path='/offline_aadhar' element={<OfflineAadhar />} />
//           <Route path='/aadhar_masking' element={<AadharMasking />} />
//           <Route path='/face-match' element={<DBFMatch />} />
//           <Route path='/e-nach' element={<Enach />} />
//           <Route path='/demo' element={<Demo />} />
//           <Route path='/login' element={<LoginPage />} />
//           <Route path='/contact-us' element={<ContactUs />} />
//           <Route path='/company' element={<Company />} />
//           <Route path='/careers' element={<Careers />} />
//           <Route path='/blog' element={<Blog />} />
//         </Routes>
//         {!shouldHideFooter && <Footer />}
//       </div>
//     )
//   }
// }

// export default App









// import React from 'react';
// import './App.css';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Home from './pages/Home';
// import CustomerVerification from './pages/CustomerVerification';
// import Navbar from './components/Header';
// import Footer from './components/Footer';
// import BankAccountVerification from './pages/BankAccountVerification';
// import EKyc from './pages/EKyc';
// import VideoKyc from './pages/VideoKyc';
// import ESign from './pages/ESign';
// import OfflineAadhar from './pages/OfflineAadhar';
// import AadharMasking from './pages/AadharMasking';
// import DBFMatch from './pages/DBFMatch';
// import Enach from './pages/Enach';
// import Demo from './pages/Demo';
// import LoginPage from './pages/Login';
// import ContactUs from './pages/ContactUs';
// import Company from './pages/Company';
// import Careers from './pages/Careers';
// import Blog from './pages/Blog';

// const App = () => {
//   const location = useLocation();

//   // Define the paths where the footer should not be displayed
//   const hideFooterPaths = ['/login'];

//   // Check if the current path is in the list of paths to hide the footer
//   const shouldHideFooter = hideFooterPaths.includes(location.pathname);

//   return (
//     <div className='overflow-x-hidden'>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/customer_verification' element={<CustomerVerification />} />
//         <Route path='/account_verification' element={<BankAccountVerification />} />
//         <Route path='/e_kyc' element={<EKyc />} />
//         <Route path='/video_kyc' element={<VideoKyc />} />
//         <Route path='/e_sign' element={<ESign />} />
//         <Route path='/offline_aadhar' element={<OfflineAadhar />} />
//         <Route path='/aadhar_masking' element={<AadharMasking />} />
//         <Route path='/face-match' element={<DBFMatch />} />
//         <Route path='/e-nach' element={<Enach />} />
//         <Route path='/demo' element={<Demo />} />
//         <Route path='/login' element={<LoginPage />} />
//         <Route path='/contact-us' element={<ContactUs />} />
//         <Route path='/company' element={<Company />} />
//         <Route path='/careers' element={<Careers />} />
//         <Route path='/blog' element={<Blog />} />
//       </Routes>
//       {!shouldHideFooter && <Footer />}
//     </div>
//   );
// }

// export default App;





// import React, { Component } from 'react';

// class FeaturesPerks extends Component {
//   render() {
//     return (
//       <section className="py-10 px-4 md:px-8 bg-white text-gray-900 font-myfont">
//         <div className="max-w-6xl mx-auto">
//           {/* Key Features */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-black mb-6 text-center">
//               Key Features
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="bg-[#e27daa] text-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
//                 <p>This is the best feature that you will love.</p>
//               </div>
//               <div className="bg-black text-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
//                 <p>Another amazing feature that stands out.</p>
//               </div>
//               <div className="bg-[#e27daa] text-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
//                 <p>Discover the benefits of this feature.</p>
//               </div>
//             </div>
//           </div>

//           {/* Perks */}
//           <div>
//             <h2 className="text-3xl font-bold text-black mb-6 text-center">
//               Perks
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="bg-white text-black p-6 rounded-lg border border-gray-200 shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">Perk 1</h3>
//                 <p>Oh my god, this is a fantastic perk.</p>
//               </div>
//               <div className="bg-white text-black p-6 rounded-lg border border-gray-200 shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">Perk 2</h3>
//                 <p>Enjoy this amazing perk we offer.</p>
//               </div>
//               <div className="bg-white text-black p-6 rounded-lg border border-gray-200 shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">Perk 3</h3>
//                 <p>Get the most out of this exclusive perk.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default FeaturesPerks;























import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomerVerification from './pages/CustomerVerification';
import Navbar from './components/Header';
import Footer from './components/Footer';
import BankAccountVerification from './pages/BankAccountVerification';
import EKyc from './pages/EKyc';
import VideoKyc from './pages/VideoKyc';
import ESign from './pages/ESign';
import OfflineAadhar from './pages/OfflineAadhar';
import AadharMasking from './pages/AadharMasking';
import DBFMatch from './pages/DBFMatch';
import Enach from './pages/Enach';
import Demo from './pages/Demo';
import LoginPage from './pages/Login';
import ContactUs from './pages/ContactUs';
import Company from './pages/Company';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import withLocation from './components/withLocation';

class App extends Component {
  render() {
    const { location } = this.props;
    
    // Define the paths where the footer should not be displayed
    const hideFooterPaths = ['/login'];

    // Check if the current path is in the list of paths to hide the footer
    const shouldHideFooter = hideFooterPaths.includes(location.pathname);

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
          <Route path='/offline_aadhar' element={<OfflineAadhar />} />
          <Route path='/aadhar_masking' element={<AadharMasking />} />
          <Route path='/face-match' element={<DBFMatch />} />
          <Route path='/e-nach' element={<Enach />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/company' element={<Company />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        {!shouldHideFooter && <Footer />}
      </div>
    );
  }
}

// Wrap the class component with withRouter to get routing props
export default withLocation(App);
































// import React, { Component } from 'react';

// // Define the color scheme
// const colors = {
//   primary: '#e27daa', // Pinkish color
//   secondary: 'black', // Black color
// };

// class VerifiedCustomerAcquisition extends Component {
//   render() {
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-full sm:max-w-lg mx-auto">
//         <div className="flex items-center justify-center mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-12 h-12 text-primary"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm8-4a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </div>
//         <h2 className="text-2xl font-bold text-secondary mb-2">
//           Verified Customer Acquisition
//         </h2>
//         <p className="text-gray-600 mb-4">
//           Ensure that your customer acquisition strategies are optimized and verified to maximize your business growth.
//         </p>
//         <button
//           className="bg-primary text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300"
//         >
//           Learn More
//         </button>
//       </div>
//     );
//   }
// }

// class CustomerAcquisitionCards extends Component {
//   render() {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
//         <VerifiedCustomerAcquisition />
//         <VerifiedCustomerAcquisition />
//         <VerifiedCustomerAcquisition />
//         <VerifiedCustomerAcquisition />
//         <VerifiedCustomerAcquisition />
//       </div>
//     );
//   }
// }

// export default CustomerAcquisitionCards;




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
