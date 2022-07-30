import React, { Children, useState } from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'
import { Disclosure,  Menu, Transition } from '@headlessui/react'

import image from '../../public/images/038f3d29-2c3b-45b6-ad03-08730e058d4a.jpg'

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<section className="text-gray-600 body-font">

  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
      <div className="p-4 lg:w-1/3 drop-shadow-md  blur-none hover:drop-shadow-2xl backdrop-blur-none">
        <div className="h-full  bg-zinc-200 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">WORKING EXPIRIENCE</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-indigo-700 mb-3 ">Lifeguard</h1>
          <p className="leading-relaxed mb-3">Having a Lifeguard patent certified by the "Federazione Italiana Nuoto", created a concrete possibility to develop my skills in a working enviorment as a Lifeguard.</p>
          <a className="text-indigo-500 inline-flex items-center" href='https://www.linkedin.com/in/filippo-vicini-6ab35921a/'>Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
     
        </div>
      </div>
      <div className="p-4 lg:w-1/3 drop-shadow-md  blur-none hover:drop-shadow-2xl backdrop-blur-none">
        <div className="h-full bg-zinc-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">INSPIRATION </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-indigo-700 mb-3">HFarm innovation camp</h1>
          <p className="leading-relaxed mb-3">I participated to the Innovative H-Farm campus to develop creative minds. The enviorement and quality of teaching provided me amazing value and inspiring ideas for my future.</p>
          <a className="text-indigo-500 inline-flex items-center" href='https://www.h-farm.com/'>Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        
        </div>
      </div>
      <div className="p-4 lg:w-1/3 drop-shadow-md  blur-none hover:drop-shadow-2xl backdrop-blur-none">
        <div className="h-full bg-zinc-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SCHOOL</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-indigo-700 mb-3">IB Diploma Programme</h1>
          <p className="leading-relaxed mb-3">I am compleating my IB studies at the International School of Monza. In my Diploma programme I decided to take MathAIHL, PhyiscsHL, ChemistryHl, English, EconomicsHL and Italian</p>
          <a className="text-indigo-500 inline-flex items-center" href='https://www.linkedin.com/in/filippo-vicini-6ab35921a/'>Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          
        </div>
      </div>
      
    </div>
  </div>
</section>
 
  )
}


Resume.schema = {
  name: 'Resmue',
  label: 'Resume',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a custom Hero Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  
}

export default Resume
