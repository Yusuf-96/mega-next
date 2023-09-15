'use client';

import { Button, Image } from '@nextui-org/react';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap xl:items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <h1 className="mb-6 text-4xl text-white md:text-5xl lg:text-6xl leading-tight font-bold tracting-tight ">
              Easy way to find your Dream house.
            </h1>
            <p className="mb-8 text-xl md:text-xl font-medium text-gray-300 ">
              We offer a full range of Property Management services tailored to
              you as an investor, homeowner or landlord.
            </p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-auto py-1 md:py-0 md:mr-4 mb-4">
                <Button color="primary" variant="flat">
                  Explore More
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 ralative lg:mb-0 mb-12">
            <div className="mx-auto md:mr-0 flex items-center justify-center">
              {/* <Image src={HomeImage} alt='homeimage'/> */}
              <Image
                isBlurred
                width={'100%'}
                height={'100%'}
                className="ralative rounded-7xl lg:max-w-lg w-full h-auto"
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3440&q=80"
                alt="hero-iamge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
