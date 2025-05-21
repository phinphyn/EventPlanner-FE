import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

function SignUpBody() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        user_name: '', // Optional
        phone: '', // Optional
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        } else if (formData.email.length > 255) {
            newErrors.email = 'Email must be less than 255 characters';
        }
        
        // Validate password
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        } else if (formData.password.length > 255) {
            newErrors.password = 'Password must be less than 255 characters';
        }
        
        // Validate password confirmation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        
        // Validate terms agreement
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsLoading(true);
        
        try {
            // Create payload matching your Prisma schema
            const payload = {
                email: formData.email,
                password: formData.password,
                // Only include optional fields if they have values
                ...(formData.user_name && { user_name: formData.user_name }),
                ...(formData.phone && { phone: formData.phone })
            };
            
            const response = await axios.post(
                "http://localhost:5000/api/auth/register", 
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            
            // If registration automatically logs in the user
            if (response.data.token) {
                login(response.data.token);
            }
            
            // Redirect to login or dashboard
            navigate(response.data.token ? "/" : "/login");
            
        } catch (error) {
            console.error('Registration error:', error);
            
            if (error.response) {
                // Handle specific error cases
                if (error.response.status === 409) {
                    setErrors({ email: 'This email is already registered' });
                } else if (error.response.data && error.response.data.message) {
                    setErrors({ general: error.response.data.message });
                } else {
                    setErrors({ general: 'Failed to register. Please try again.' });
                }
            } else if (error.request) {
                setErrors({ general: 'No response from server. Please check your connection.' });
            } else {
                setErrors({ general: 'An error occurred. Please try again.' });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full">
            {errors.general && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {errors.general}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="Email" 
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={255}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                </div>
                
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input 
                        id="password"
                        name="password"
                        type="password" 
                        placeholder="Password" 
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                            errors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        value={formData.password}
                        onChange={handleChange}
                        maxLength={255}
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    )}
                </div>
                
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <input 
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password" 
                        placeholder="Confirm Password" 
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                        }`}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                    )}
                </div>
                
                {/* Optional Fields Section */}
                <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700 mb-4">Optional Information</h3>
                    
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-gray-500 text-xs">(Optional)</span>
                            </label>
                            <input 
                                id="user_name"
                                name="user_name"
                                type="text" 
                                placeholder="Username" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value={formData.user_name}
                                onChange={handleChange}
                                maxLength={100}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number <span className="text-gray-500 text-xs">(Optional)</span>
                            </label>
                            <input 
                                id="phone"
                                name="phone"
                                type="tel" 
                                placeholder="Phone Number" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value={formData.phone}
                                onChange={handleChange}
                                maxLength={20}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="agreeToTerms"
                            name="agreeToTerms"
                            type="checkbox"
                            className={`h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded ${
                                errors.agreeToTerms ? 'border-red-500' : ''
                            }`}
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                            I agree to the{' '}
                            <a href="/terms" className="text-orange-500 hover:text-orange-600">
                                Terms and Conditions
                            </a>
                        </label>
                        {errors.agreeToTerms && (
                            <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>
                        )}
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50"
                    disabled={isLoading}
                >
                    {isLoading ? 'Creating Account...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
}

export default SignUpBody;