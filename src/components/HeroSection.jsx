import { Button } from '@nextui-org/button';
import React from 'react'

const HeroSection = () => {
  return (
    <div className="py-16 h-screen">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Column */}
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">Title</h1>
          <p className="text-lg text-gray-600 mb-8">Description goes here...</p>
          <Button color="primary" variant="flat">
            Learn More
          </Button>
        </div>

        {/* Right Column */}
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3440&q=80"
            alt="Hero Image"
            className="w-full h-auto"
          />
          {/* Add graphical patterns or overlays here */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection