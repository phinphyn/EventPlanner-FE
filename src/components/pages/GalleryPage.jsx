import React from "react";
import Layout from "../layout/Layout";
 function GalleryPage () {


    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Gallery</h1>
                <p className="mb-4">
                    Explore our stunning gallery showcasing the beauty and elegance of Gazer Diamond Palace.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <img src="/images/gallery1.jpg" alt="Gallery Image 1" className="w-full h-auto rounded-lg shadow-md"/>
                    <img src="/images/gallery2.jpg" alt="Gallery Image 2" className="w-full h-auto rounded-lg shadow-md"/>
                    <img src="/images/gallery3.jpg" alt="Gallery Image 3" className="w-full h-auto rounded-lg shadow-md"/>
                    <img src="/images/gallery4.jpg" alt="Gallery Image 4" className="w-full h-auto rounded-lg shadow-md"/>
                </div>
            </div>
        </Layout>
    );
 }
export default GalleryPage;