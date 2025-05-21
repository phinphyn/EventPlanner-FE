import React from "react";
import Layout from "../layout/Layout";
 function ServicePage() {




    
    return (
        <div>
            <Layout>
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="mb-4">
            We offer a wide range of services to meet your needs. Our team of experts
            is dedicated to providing the best solutions for you.
        </p>
        <ul className="list-disc list-inside">
            <li className="mb-2">Service 1: Description of service 1</li>
            <li className="mb-2">Service 2: Description of service 2</li>
            <li className="mb-2">Service 3: Description of service 3</li>
            {/* Add more services as needed */}
        </ul>
        </div>
        </Layout>
    </div>
    );
 }
 export default ServicePage;