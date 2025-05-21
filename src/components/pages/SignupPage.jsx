import React from "react";
import { Link } from "react-router-dom";
import SignUpBody from "../AuthPages/SignUpBody";

function SignUpPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* Logo/Brand - using the same image as your login page */}
                <Link to="/">
                    <img 
                        className="mx-auto h-12 w-auto" 
                        src="/gallery1.jpg" 
                        alt="Gazer Diamond Palace" 
                    />
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-darkOlive">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-orange-500 hover:text-orange-600">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <SignUpBody />
                </div>
            </div>
            
            {/* Footer links - matching your login page */}
            <div className="mt-6 text-center">
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 mx-2">
                    Home
                </Link>
                <span className="text-gray-400">|</span>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 mx-2">
                    Contact Support
                </Link>
                <span className="text-gray-400">|</span>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 mx-2">
                    Privacy Policy
                </Link>
            </div>
        </div>
    );
}

export default SignUpPage;