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
        </Routes>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App









// import React, { Component } from 'react';
// import { HiPlus, HiMinus } from 'react-icons/hi';

// class ExpandableSections extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openSection: null, // Keeps track of which section is open
//     };

//     this.toggleSection = this.toggleSection.bind(this);
//   }

//   toggleSection(index) {
//     this.setState(prevState => ({
//       openSection: prevState.openSection === index ? null : index
//     }));
//   }

//   render() {
//     const { openSection } = this.state;
//     const sections = [
//       { title: 'Title 1', content: 'Content for Title 1' },
//       { title: 'Title 2', content: 'Content for Title 2' },
//       { title: 'Title 3', content: 'Content for Title 3' },
//       { title: 'Title 4', content: 'Content for Title 4' },
//     ];

//     return (
//       <div className="space-y-4">
//         {sections.map((section, index) => (
//           <div key={index} className="relative">
//             <button
//               onClick={() => this.toggleSection(index)}
//               className="flex items-center justify-between w-full p-4 bg-blue-500 text-white rounded-md"
//             >
//               <span>{section.title}</span>
//               {openSection === index ? <HiMinus className="text-lg" /> : <HiPlus className="text-lg" />}
//             </button>

//             {openSection === index && (
//               <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded-md transition-all duration-300 ease-in-out">
//                 {section.content}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default ExpandableSections;
