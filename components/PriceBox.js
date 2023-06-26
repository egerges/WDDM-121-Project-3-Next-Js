"use client"
// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';

export default function PriceBox() {
    return (
        <div className="">
            <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
                <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
                    <h2 className="text-2xl text-sky-900 font-bold md:text-4xl">Looking to book a photoshoot with me?</h2>
                </div>
                <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
                    <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                        <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div className="relative p-6 space-y-6 lg:p-8">
                            <h3 className="text-3xl text-gray-700 font-semibold text-center">Basic Package</h3>
                            <div>
                                <div className="relative flex justify-around">
                                    <div className="flex items-end">
                                        <span className="text-8xl text-gray-800 font-bold leading-0">400</span>
                                        <div className="pb-2">
                                            <span className="block text-2xl text-gray-700 font-bold">$</span>
                                            <span className="block text-xl text-sky-500 font-bold">CAD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul role="list" className="w-max space-y-4 py-6 m-auto text-gray-600">
                                <li className="space-x-2">
                                    <span className="text-sky-500 font-semibold"><FontAwesomeIcon icon={faCheck} className="icon" /></span>
                                    <span>Two hours sessions</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="text-sky-500 font-semibold"><FontAwesomeIcon icon={faCheck} className="icon" /></span>
                                    <span>Five photo edits for <br/>the pictures of your choice</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="text-sky-500 font-semibold"><FontAwesomeIcon icon={faCheck} className="icon" /></span>
                                    <span>All filtered and unfiltered pictures</span>
                                </li>
                            </ul>
                            <p className="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                                <span>Call me at</span>
                                <a href="tel:+16479614567" className="flex space-x-2 items-center text-sky-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                    <span className="font-semibold">+1 (647) 961 4567</span>
                                </a>
                                <span>or</span>
                            </p>
                            <a href="mailto:elio-gerges@outlook.com">
                                <button type="button" onClick={null} title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-sky-600 hover:bg-sky-700 active:bg-sky-800 focus:bg-indigo-600">
                                    <span className="text-white font-semibold">
                                        Send us an email
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="relative group md:w-6/12 lg:w-7/12">
                        <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>
                        <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                            <ul role="list" className="space-y-4 py-6 text-gray-600">
                                <li className="space-x-2">
                                    <span className="text-sky-500 font-semibold"><FontAwesomeIcon icon={faCheck} className="icon" /></span>
                                    <span>Extra hour costs an extra 45$</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="text-sky-500 font-semibold"><FontAwesomeIcon icon={faCheck} className="icon" /></span>
                                    <span>Next Day Delivery costs an extra 100$</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="text-sky-500 font-semibold"><FontAwesomeIcon icon={faCheck} className="icon" /></span>
                                    <span>Videography is not included</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}