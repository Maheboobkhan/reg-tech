// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { HiChevronDown } from 'react-icons/hi';
// import { FiLogIn } from "react-icons/fi";

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isNavbarFixed, setNavbarFixed] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       // You can adjust the scroll threshold based on your design
//       const scrollThreshold = 20;

//       setNavbarFixed(scrollY > scrollThreshold);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`md:px-10 py-2 z-50 ${isNavbarFixed ? 'fixed top-0 left-0 z-50 w-full bg-white border-b-[0.5px] border-[#c6c2c2]' : 'relative bg-white'}`}>
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white leading-4">
//           <img src='/public/logo2.png' className='w-40' />
//         </div>

//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             {isMenuOpen ? (
//               <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             ) : (
//               <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//               </svg>
//             )}
//           </button>
//         </div>

//         <ul className="hidden md:flex lg:gap-x-6 items-center md:gap-x-2 space-x-4 mb-2">
//           <li><Link to="/" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Home</Link></li>
//           <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Company</a></li>
//           <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Careers</a></li>
//           <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Blog</a></li>
//           <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Contact Us</a></li>
//           <div className="relative inline-block text-left">
//             <button
//               onClick={toggleDropdown}
//               className="py-2 px-4 rounded-md focus:outline-none"
//             >
//               <div className='text-[#e27daa] hover:text-black font-montserrat font-bold'><span>RegTech Services</span><HiChevronDown className="ml-2 inline" /></div>
//             </button>
//             <div
//               className={`absolute left-3 right-0 top-8 z-50 mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg transition-opacity duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
//             >
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Customer Verification</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Bank Account Verification</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Kyc</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Video-Kyc</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Sign</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Offline Aadhar</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Aadhar Masking</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">DB Fmatch</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">e-NACH/e-Mandate</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Verified Customer Acquisition</a>
//               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Vehicle Verification</a>
//             </div>
//           </div>
//           <li className='ml-24'><a href="#" className="flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-montserrat text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms"><FiLogIn className='mr-2' />Login</a></li>

//         </ul>
//       </div>

//       <div className={`md:hidden absolute top-[66.5px] right-0 min-h-screen z-50 w-2/3 bg-[#F7F7FF] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
//         <ul className="flex flex-col items-center gap-y-16 space-y-4 py-2">
//           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">Home</a></li>
//           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">About</a></li>
//           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">Services</a></li>
//           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">Products</a></li>
//           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">Blog</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;























import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';
import { FiLogIn } from "react-icons/fi";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isNavbarFixed: false,
      isOpen: false,
      isServicesDropdownOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollY = window.scrollY;
    const scrollThreshold = 20;

    this.setState({
      isNavbarFixed: scrollY > scrollThreshold
    });
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  toggleDropdown() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  toggleServicesDropdown = () => {
    this.setState(prevState => ({
      isServicesDropdownOpen: !prevState.isServicesDropdownOpen
    }));
  };

  render() {
    const { isMenuOpen, isNavbarFixed, isOpen, isServicesDropdownOpen } = this.state;

    return (
      <nav className={`md:px-10 py-2 z-50 ${isNavbarFixed ? 'fixed top-0 left-0 z-50 w-full bg-white border-b-[0.5px] border-[#c6c2c2]' : 'relative bg-white'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white leading-4">
            <img src='/public/logo2.png' className='w-40' alt="Logo" />
          </div>

          <div className="md:hidden">
            <button onClick={this.toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>

          <ul className="hidden md:flex lg:gap-x-6 items-center md:gap-x-2 space-x-4 mb-2">
            <li><Link to="/" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Home</Link></li>
            <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Company</a></li>
            <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Careers</a></li>
            <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Blog</a></li>
            <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Contact Us</a></li>
            <div className="relative inline-block text-left">
              <button
                onClick={this.toggleDropdown}
                className="py-2 px-4 rounded-md focus:outline-none"
              >
                <div className='text-[#e27daa] hover:text-black font-montserrat font-bold'><span>RegTech Services</span><HiChevronDown className="ml-2 inline" /></div>
              </button>
              <div
                className={`absolute left-3 right-0 top-8 z-50 mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg transition-opacity duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              >
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Customer Verification</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Bank Account Verification</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Kyc</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Video-Kyc</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Sign</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Offline Aadhar</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Aadhar Masking</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">DB Fmatch</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">e-NACH/e-Mandate</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Verified Customer Acquisition</a>
                <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Vehicle Verification</a>
              </div>
            </div>
            {/* <li className='ml-24'><a href="#" className="flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-montserrat text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms"><FiLogIn className='mr-2' />Login</a></li> */}

          </ul>
          <button className='ml-10 hidden md:flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-montserrat text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms'>
            <a href="#" className="flex items-center">
              <FiLogIn className='mr-2' />Login
            </a>
          </button>

        </div>

        <div className={`md:hidden absolute top-[66.5px] right-0 min-h-screen z-50 w-2/3 bg-[#F7F7FF] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300 overflow-y-auto`}>
          <ul className="flex flex-col items-center space-y-4 py-2">
            <li><Link to="/" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Home</Link></li>
            <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Company</a></li>
            <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Careers</a></li>
            <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Blog</a></li>
            <li><a href="#" className="text-black font-montserrat hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Contact Us</a></li>

            <li className="relative">
              <button
                onClick={this.toggleServicesDropdown}
                className="flex items-center text-black font-montserrat active:text-[#e27daa] focus:outline-none"
              >
                <span className='text-[#e27daa] active:text-black font-montserrat font-bold'>RegTech Services</span>
                <HiChevronDown
                  className={`ml-2 text-[#e27daa] transition-transform ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  style={{ transition: 'transform 0.3s ease-in-out' }}
                />
              </button>
              <div
                className={`mt-2 absolute top-full left-[-12px] w-48 bg-white border border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isServicesDropdownOpen ? 'min-h-auto' : 'max-h-0'}`}
              >

                <ul className="py-2 pb-10">
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Customer Verification</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Bank Account Verification</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">E-Kyc</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Video-Kyc</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">E-Sign</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Offline Aadhar</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Aadhar Masking</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">DB Fmatch</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">e-NACH/e-Mandate</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Verified Customer Acquisition</a>
                  <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Vehicle Verification</a>
                </ul>
              </div>
            </li>
          </ul>
          <button className='mx-auto md:hidden flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-montserrat text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms'>
            <a href="#" className="flex items-center">
              <FiLogIn className='mr-2' />Login
            </a>
          </button>
        </div>

      </nav>
    );
  }
}

export default Navbar;