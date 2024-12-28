import React from 'react'

function Home() {
  return (
    // Main section container with background color and text styling
    <section className="text-gray-600 body-font bg-slate-200">
      {/* Container for the entire content, making it responsive with flex layout */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ltr:ml-10">
        
        {/* Left side content (text and buttons) */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-20">
          
          {/* Heading with dynamic line breaks for smaller screens */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />readymade gluten
          </h1>
          
          {/* Description paragraph */}
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.
            Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          
          {/* Button group, with flex layout for spacing */}
          <div className="flex justify-center">
            {/* Primary button */}
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            {/* Secondary button */}
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        
        {/* Right side content (image) */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* Image with responsive properties and rounded corners */}
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/verified-profile-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-marketing-comparison-digital-company-suggested-ecommerce-pack-e-commerce-shopping-icons-3379643.png?f=webp"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
