import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
            {/* Left: Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg md:mr-8">
                <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
                    Login
                </h1>
                <form className="space-y-4">

                    {/* Phone Number Input */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Aadhar Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            OTP
                        </label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                    >
                        Login
                    </button>
                </form>

                <Link to={"/signup"} className="text-green-500 text-center mt-4 block hover:text-green-600 transition-all duration-300">New user?</Link>
            </div>

            {/* Right: Information Section */}
            <div className="bg-green-100 p-8 rounded-lg shadow-lg w-full max-w-lg mt-8 md:mt-0">
                <div className="flex flex-col items-center space-y-4">
                    {/* Government Logo */}
                    <img src="/gov-logo.png" alt="Government Logo" className="h-20" />

                    <h2 className="text-xl font-semibold text-gray-800 text-center">
                        Patient Medical History Portal
                        <br />
                        Government of India
                    </h2>

                    {/* Logos */}
                    <div className="flex justify-center space-x-4">
                        <img src="/institute-logo.png" alt="Institute Logo" className="h-16" />
                        <img src="/digital-india-logo.png" alt="Digital India Logo" className="h-16" />
                    </div>

                    {/* Info Text */}
                    <p className="text-center text-sm text-gray-600">
                        This portal allows doctors to securely access and manage the medical treatment history of patients using their Aadhar card. Established by the Government of India in 2024, this initiative aims to streamline healthcare records and ensure continuity of care across medical facilities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
