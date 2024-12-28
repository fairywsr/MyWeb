import React from 'react'

function Services() {
  return (
    <section className="text-gray-600 body-font">
      {/* Container for the section */}
      <div className="container px-5 py-24 mx-auto">
        
        {/* Heading section */}
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Pitchfork Kickstarter Taxidermy
          </h1>
          {/* Description below the title */}
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        
        {/* Flexbox container for service cards */}
        <div className="flex flex-wrap -m-4">
          {/* Individual service card */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              
              {/* Icon for the service */}
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                {/* SVG icon for "Shooting Stars" */}
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              
              {/* Service title */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              
              {/* Service description */}
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
              </p>
            </div>
          </div>
          
          {/* Repeat for other service cards */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
              </p>
            </div>
          </div>
          
          {/* More service cards can be added in the same way */}
          
          {/* Example service card with another SVG icon */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
              </p>
            </div>
          </div>
          
          {/* Additional cards can follow the same structure */}
        </div>
        
        {/* Call to Action Button */}
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  )
}

export default Services
