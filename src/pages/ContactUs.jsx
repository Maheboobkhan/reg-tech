// import React, { Component } from 'react';
// import FooterForAllComponent from '../components/FooterForAllPage';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { GoMail } from "react-icons/go";
// import { MdOutlineCall } from "react-icons/md";
// import WindowSizeProvider from '../components/UseWindowSize';

// class ContactUs extends Component {
//     componentDidMount() {
//         AOS.init({ duration: 1000, once: true });
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             openIndex: null,
//             width: window.innerWidth, // Initialize width
//         };
//     }

//     componentDidMount() {
//         // Add event listener for window resize
//         window.addEventListener('resize', this.handleResize);
//     }

//     componentWillUnmount() {
//         // Clean up event listener
//         window.removeEventListener('resize', this.handleResize);
//     }

//     handleResize = () => {
//         this.setState({ width: window.innerWidth });
//     };

//     render() {
//         const { width } = this.state;
//         return (
//             <>
//                 <div className="max-w-md md:mt-16 mt-10 mb-16 mx-auto p-4 bg-white rounded-lg shadow-lg font-myfont" data-aos="fade-up-left">
//                     {/* <h2 className="text-2xl font-bold mb-6 text-[#e27daa] w-fit mx-auto">Contact Us</h2> */}
//                     {width <= 640 ?

//                         <form className="md:space-y-4 space-y-3 px-4 py-6">
//                             {/* Name Field */}
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                     placeholder=" "
//                                 />
//                                 <label
//                                     htmlFor="name"
//                                     className="absolute bottom-[12px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                                 >
//                                     Name
//                                 </label>
//                             </div>

//                             {/* Email Field */}
//                             <div className="relative">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                     placeholder=" "
//                                 />
//                                 <label
//                                     htmlFor="email"
//                                     className="absolute bottom-[12px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                                 >
//                                     Email
//                                 </label>
//                             </div>

//                             {/* Phone Field */}
//                             <div className="relative">
//                                 <input
//                                     type="tel"
//                                     id="phone"
//                                     className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                     placeholder=" "
//                                 />
//                                 <label
//                                     htmlFor="phone"
//                                     className="absolute bottom-[12px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                                 >
//                                     Phone
//                                 </label>
//                             </div>

//                             {/* Enquire For Dropdown */}
//                             <div className="relative">
//                                 <select
//                                     id="enquire-for"
//                                     // value=""
//                                     defaultValue="mdk"
//                                     className="w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0 bg-white text-black"
//                                 >
//                                     <option value="" disabled selected>Select an option</option>
//                                     <option value="document-collection">Document Collection</option>
//                                     <option value="debt-recovery">Debt Recovery</option>
//                                     <option value="regtech-api">Regtech API</option>
//                                     <option value="other">Other</option>
//                                 </select>
//                             </div>

//                             {/* Message Field */}
//                             <div className="relative">
//                                 <textarea
//                                     id="message"
//                                     rows="1"
//                                     className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                     placeholder=" "
//                                 />
//                                 <label
//                                     htmlFor="message"
//                                     className="absolute bottom-[12px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                                 >
//                                     Message
//                                 </label>
//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 type="submit"
//                                 className="w-full py-3 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
//                             >
//                                 Contact Us
//                             </button>
//                         </form>

//                         : <form className="space-y-4">
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                     placeholder=" "
//                                 />
//                                 <label
//                                     htmlFor="name"
//                                     className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                                 >
//                                     Name
//                                 </label>
//                             </div>
//                             <div className="relative">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                     placeholder=" "
//                                 />
//                                 <label
//                                     htmlFor="email"
//                                     className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                                 >
//                                     Email
//                                 </label>
//                             </div>
//                             <div className="relative">
//                                 <input
//                                     type="tel"
//                                     id="phone"
//                                     className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                     placeholder=" "
//                                 />
//                                 <label
//                                     htmlFor="phone"
//                                     className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                                 >
//                                     Phone
//                                 </label>
//                             </div>
//                             <div className="relative">
//                                 <select
//                                     id="enquire-for"
//                                     value="mk"
//                                     // defaultValue="mk"
//                                     className="peer w-full px-3 py-3 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                 >
//                                     <option className='' value="" disabled selected>Enquire For</option>
//                                     <option value="document-collection">Document Collection</option>
//                                     <option value="debt-recovery">Debt Recovery</option>
//                                     <option value="regtech-api">Regtech API</option>
//                                     <option value="other">Other</option>
//                                 </select>
//                             </div>
//                             <div className="relative">
//                                 <textarea
//                                     id="message"
//                                     rows="1"
//                                     className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
//                                     placeholder=" "
//                                 />
//                                 <label
//                                     htmlFor="message"
//                                     className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
//                                 >
//                                     Message
//                                 </label>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full py-2 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
//                             >
//                                 Contact Us
//                             </button>
//                         </form>}


//                     <div className="md:mt-8 space-y-1 flex flex-col items-center">
//                         <h2 className="md:text-xl text-lg font-bold text-[#e27daa]">Contact Details</h2>
//                         {/* <p className='text-[13px] md:text-lg'>Feel free to get in touch with us</p> */}

//                         <div className="flex items-center">
//                             <MdOutlineCall className="mr-2 text-[#e27daa]" style={{ fontSize: '1.2rem' }} />
//                             <a href="tel:+1234567890" className="hover:underline hover:text-[#e27daa] text-[13px] md:text-[15px]">+91 7766969646</a>
//                         </div>

//                         <div className="flex items-center">
//                             <GoMail className="mr-2 text-[#e27daa]" style={{ fontSize: '1.2rem' }} />
//                             <a href="mailto:info@example.com" className="hover:underline hover:text-[#e27daa] text-[13px] md:text-[15px]">info@docboyz.in</a>
//                         </div>
//                     </div>
//                 </div>

//                 <FooterForAllComponent />
//             </>
//         );
//     }
// }

// export default ContactUs;
















import React, { Component } from 'react';
import FooterForAllComponent from '../components/FooterForAllPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoMail } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";
import WindowSizeProvider from '../components/UseWindowSize';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openIndex: null,
            width: window.innerWidth, // Initialize width
            enquireFor: '', // State for dropdown
        };
    }

    componentDidMount() {
        AOS.init({ duration: 1000, once: true });

        // Add event listener for window resize
        window.addEventListener('resize', this.handleResize);
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        // Clean up event listener
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ width: window.innerWidth });
    };

    handleSelectChange = (event) => {
        this.setState({ enquireFor: event.target.value });
    };

    render() {
        const { width, enquireFor } = this.state;
        return (
            <>
                <div className="max-w-md md:mt-16 mt-24 mb-16 mx-auto p-4 bg-white rounded-lg shadow-lg font-myfont" data-aos="fade-up-left">
                    {width <= 640 ? (
                        <form className="md:space-y-4 space-y-3 px-4 py-6">
                            {/* Name Field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute bottom-[12px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Name
                                </label>
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute bottom-[12px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Email
                                </label>
                            </div>

                            {/* Phone Field */}
                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute bottom-[12px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Phone
                                </label>
                            </div>

                            {/* Enquire For Dropdown */}
                            <div className="relative">
                                <select
                                    id="enquire-for"
                                    value={enquireFor}
                                    onChange={this.handleSelectChange}
                                    className="w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0 bg-white text-black"
                                >
                                    <option value="" disabled>Enquire For</option>
                                    <option value="document-collection">Document Collection</option>
                                    <option value="debt-recovery">Debt Recovery</option>
                                    <option value="regtech-api">Regtech API</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <textarea
                                    id="message"
                                    rows="1"
                                    className="peer w-full px-3 py-2 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute bottom-[12px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Message
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
                            >
                                Contact Us
                            </button>
                        </form>
                    ) : (
                        <form className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Phone
                                </label>
                            </div>
                            <div className="relative">
                                <select
                                    id="enquire-for"
                                    value={enquireFor}
                                    onChange={this.handleSelectChange}
                                    className="w-full px-3 py-3 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                >
                                    <option value="" disabled>Enquire For</option>
                                    <option value="document-collection">Document Collection</option>
                                    <option value="debt-recovery">Debt Recovery</option>
                                    <option value="regtech-api">Regtech API</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    rows="1"
                                    className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
                                >
                                    Message
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
                            >
                                Contact Us
                            </button>
                        </form>
                    )}

                    <div className="md:mt-8 space-y-1 flex flex-col items-center">
                        <h2 className="md:text-xl text-lg font-bold text-[#e27daa]">Contact Details</h2>

                        <div className="flex items-center">
                            <MdOutlineCall className="mr-2 text-[#e27daa]" style={{ fontSize: '1.2rem' }} />
                            <a href="tel:+1234567890" className="hover:underline hover:text-[#e27daa] text-[13px] md:text-[15px]">+91 7766969646</a>
                        </div>

                        <div className="flex items-center">
                            <GoMail className="mr-2 text-[#e27daa]" style={{ fontSize: '1.2rem' }} />
                            <a href="mailto:info@example.com" className="hover:underline hover:text-[#e27daa] text-[13px] md:text-[15px]">info@docboyz.in</a>
                        </div>
                    </div>
                </div>

                {/* <FooterForAllComponent /> */}
            </>
        );
    }
}

export default ContactUs;
