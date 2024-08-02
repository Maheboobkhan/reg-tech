import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Footer from "../components/Footer";
import FooterForAllComponent from "../components/FooterForAllPage";

class ESign extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
    }
    render() {
        return (
            <div className="mt-24 font-montserrat" data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] w-full transform -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-montserrat">
                        E-Sign
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>
                <h2 className="text-gray-500 mt-10 hover:text-[#e27daa] text-xl font-montserrat border-b border-[#e27daa] cursor-pointer w-fit mx-auto">Schedule a Demo</h2>
                <div className="text-container w-fit mx-auto border-2">
                    <p className="animated-text">Click above to Schedule a Demo</p>
                </div>
                <div className="md:flex md:flex-row flex flex-col-reverse mt-8 p-4 items-center justify-center">
                    <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]">Get Your KYC Done in Minutes With RegTech e-Sign</h1>
                        <h1 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#e27daa]">We provide a e-sign OTP based signature service, authenticating the Aadhar holder via Aadhar based e-KYC service.</h1>
                        <p className="mt-4">Our eSign API has been designed to replace physical paper based signature to sign any document. This helps signatory to sign a digital document using Aadhar or PAN based OTP authentication. Cost effective, secure and easy to integrate.</p>
                    </div>
                    <img
                        src="esign/esign.jpg"
                        alt="Image 1"
                        className="md:w-1/3 w-full h-auto ml-4 object-cover"
                    />
                </div>


                <div className='flex flex-col'>
                    <div className="md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='esign/api.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">API's & SDK's</h2>
                                <p className="text-base sm:text-lg">Consistently integrable APIs and SDKs for realtime results</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='esign/workflow.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">WorkFlows</h2>
                                <p className="text-base sm:text-lg">A workflow consists of an orchestrated and repeatable pattern of activity, enabled by the systematic organization.</p>
                            </div>
                        </div>
                    </div>



                    <div className="flex justify-end md:flex md:justify-end md:flex-row flex-col">
                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='esign/digital-solution-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Digital Solution</h2>
                                <p className="text-base sm:text-lg">KYC can be possible in the comfort of your home</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center mt-8 p-4 md:w-[45%] w-full">
                            <img
                                src='esign/Accuracy-icon.png'
                                alt="Image 2"
                                className="w-24 h-24  object-auto"
                            />
                            <div className="w-full sm:w-1/2 pl-0 sm:pl-4 ml-0 sm:ml-8 md:text-left text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#e27daa]">Accuracy</h2>
                                <p className="text-base sm:text-lg">Crosscheck from Government issued ID</p>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterForAllComponent />
            </div>
        );
    }
}

export default ESign;