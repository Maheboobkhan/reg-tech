// import React from 'react';
// import { FaEnvelope, FaPhoneAlt, FaCode, FaLink } from 'react-icons/fa';
// import { GoMail } from "react-icons/go";
// import { MdOutlineCall } from "react-icons/md";

// class Footer extends React.Component {
//   render() {
//     return (
//       <footer className="pt-8">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 font-montserrat">
//           {/* Contact Details */}
//           <div className="space-y-4 flex flex-col w-fit ml-4 mx-auto">
//             <h2 className="text-lg font-bold text-[#e27daa]">Contact Details</h2>
//             <p className='font-montserrat'>Feel Free to get in touch with us</p>

//             <div className="flex items-center">
//               <MdOutlineCall className="mr-2 text-[#e27daa]" style={{ fontSize: '1.5rem' }} />
//               <a href="tel:+1234567890" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">+91 7766969646</a>
//             </div>

//             <div className="flex items-center">
//               <GoMail className="mr-2 text-[#e27daa]" style={{ fontSize: '1.5rem' }} />
//               <a href="mailto:info@example.com" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">info@docboyz.in</a>
//             </div>
//           </div>

//           {/* Our Services */}
//           <div className="space-y-4 flex flex-col w-fit mx-auto">
//             <h2 className="text-lg font-bold text-[#e27daa]">Our Services</h2>
//             <ul className='flex flex-col gap-y-3'>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">e-Nach/e-Mandate</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Bank Account Verification</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Verified Customer Acquisition</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Vehicle Verification</a></li>
//             </ul>
//           </div>

//           {/* Postman & API */}
//           <div className="space-y-4 flex flex-col w-fit mx-auto">
//             <h2 className="text-lg font-bold text-[#e27daa]">Postman & API</h2>
//             <ul className='flex flex-col gap-y-2'>
//               <li><a href="#" className="flex items-center hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Customer Verification</a></li>
//               <li><a href="#" className="flex items-center hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">E-Kyc</a></li>
//               <li><a href="#" className="flex items-center hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Video KYC</a></li>
//               <li><a href="#" className="flex items-center hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">E-Sign</a></li>
//               <li><a href="#" className="flex items-center hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Offline Aadhar</a></li>
//               <li><a href="#" className="flex items-center hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Aadhar Masking</a></li>
//               <li><a href="#" className="flex items-center hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">DB Fmatch</a></li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4 flex flex-col w-fit mx-auto">
//             <h2 className="text-lg font-bold text-[#e27daa]">Quick Links</h2>
//             <ul className='flex flex-col gap-y-2'>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">About Us</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Blog</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Careers</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Contact Us</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Media</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#e27daa] hover:border-[#e27daa]">Industries we serve</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="py-2 text-center mt-8 flex justify-between text-[#e5659f] border-t border-gray-300">
//           <p className="text-sm ml-32">© 2021 All Rights Resrved by RegTech</p>
//           <p className="text-sm mr-32">Designed & Devloped by RegTech</p>
//         </div>
//       </footer>
//     );
//   }
// }

// export default Footer;














import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaCode, FaLink, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { GoMail } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";

class Footer extends React.Component {
    render() {
        return (
            <footer className="pt-8 bg-gray-100 text-gray-800">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 font-montserrat">

                    {/* Contact Details */}
                    <div className="space-y-4 flex flex-col mx-auto">
                        <h2 className="text-lg font-bold text-[#e27daa]">Contact Details</h2>
                        <p>Feel free to get in touch with us</p>

                        <div className="flex items-center">
                            <MdOutlineCall className="mr-2 text-[#e27daa]" style={{ fontSize: '1.5rem' }} />
                            <a href="tel:+1234567890" className="hover:underline hover:text-[#e27daa]">+91 7766969646</a>
                        </div>

                        <div className="flex items-center">
                            <GoMail className="mr-2 text-[#e27daa]" style={{ fontSize: '1.5rem' }} />
                            <a href="mailto:info@example.com" className="hover:underline hover:text-[#e27daa]">info@docboyz.in</a>
                        </div>
                    </div>

                    {/* Our Services */}
                    <div className="space-y-4 flex flex-col mx-auto">
                        <h2 className="text-lg font-bold text-[#e27daa]">Our Services</h2>
                        <ul className='flex flex-col gap-y-3'>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">e-Nach/e-Mandate</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Bank Account Verification</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Verified Customer Acquisition</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Vehicle Verification</a></li>
                        </ul>
                    </div>

                    {/* Postman & API */}
                    <div className="space-y-4 flex flex-col mx-auto">
                        <h2 className="text-lg font-bold text-[#e27daa]">Postman & API</h2>
                        <ul className='flex flex-col gap-y-2'>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Customer Verification</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">E-Kyc</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Video KYC</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">E-Sign</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Offline Aadhar</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Aadhar Masking</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">DB Fmatch</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 flex flex-col mx-auto">
                        <h2 className="text-lg font-bold text-[#e27daa]">Quick Links</h2>
                        <ul className='flex flex-col gap-y-2'>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">About Us</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Blog</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Careers</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Contact Us</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Media</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#e27daa]">Industries We Serve</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="text-center mt-6">
                    <h3 className="text-lg font-bold text-[#e27daa] mb-2">Follow Us</h3>
                    <div className="flex justify-center space-x-4 mb-6">
                        <a href="#" className="text-[#e27daa] hover:text-[#e5659f]"><FaFacebook size={24} /></a>
                        <a href="#" className="text-[#e27daa] hover:text-[#e5659f]"><FaTwitter size={24} /></a>
                        <a href="#" className="text-[#e27daa] hover:text-[#e5659f]"><FaLinkedin size={24} /></a>
                        <a href="#" className="text-[#e27daa] hover:text-[#e5659f]"><FaInstagram size={24} /></a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-2 text-center mt-8 flex justify-between text-[#e5659f] border-t border-gray-300">
                    <p className="text-sm ml-32">© 2021 All Rights Resrved by RegTech</p>
                    <p className="text-sm mr-32">Designed & Devloped by RegTech</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
