import React, { Component } from 'react';
import FooterForAllComponent from '../components/FooterForAllPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

class LoginPage extends Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <div className="max-w-md mt-32 mb-36 mx-auto p-6 bg-white rounded-lg shadow-lg font-myfont overflow-y-hidden" data-aos="fade-up-left">
                    <h2 className="text-2xl font-bold mb-6 text-[#e27daa] text-center">Login</h2>
                    <form className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                id="username"
                                className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                placeholder=" "
                            />
                            <label
                                htmlFor="username"
                                className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
                            >
                                email
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                className="peer w-full px-3 pt-1 pb-5 border border-black rounded-lg outline-none transition-all duration-300 focus:border-[#e27daa] focus:ring-0"
                                placeholder=" "
                            />
                            <label
                                htmlFor="password"
                                className="absolute bottom-[10px] left-3 text-black transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:left-2 peer-focus:text-[#e27daa]"
                            >
                                Password
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    className="w-4 h-4 text-[#e27daa] rounded border border-black focus:ring-0"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 text-black"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <a
                                href="/forgot-password"
                                className="text-[#e27daa] hover:text-[#d46a85] transition duration-300"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-[#e27daa] text-white font-semibold rounded-lg shadow-md hover:bg-[#d46a85] transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                </div>
                {/* <FooterForAllComponent /> */}
      </>
        );
    }
}

export default LoginPage;
