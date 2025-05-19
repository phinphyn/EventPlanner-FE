import React from "react";

 function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form className="flex flex-col items-center w-full max-w-sm p-4 space-y-4">
            <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded"
            />
            <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
            />
            <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
            />
            <input
            type="phonenumber"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded"
            />
            



            <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
            Sign Up
            </button>
        </form>
        </div>
    );
}

export default SignUp;