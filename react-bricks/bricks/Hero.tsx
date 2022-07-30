import React, { Children, useState } from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'

import { Disclosure,  Menu, Transition } from '@headlessui/react'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <section  className="text-gray-600 body-font " style={{padding:'5%'}}>
    <div className=" m-0 flex px-5 py-12 items-center justify-center flex-col">
      <div className="text-center lg:w-2/3 w-full">
        <h4 className='font-sans font-large mb-4 tracking-widest font-bold text-gray-500'>FILIPPO VICINI</h4>
        <h1 className="  font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >86400 is nothing but can mean a lot</h1>
        <p className="mb-8 leading-relaxed text-xl">It's just 86400 seconds in a day, it's scary, I know, but it truly makes me push forward in though times. Knowing that life is finite motivates me in developing something for the world</p>
        <div className="flex justify-center">
          <a ><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">A bit of ego</button></a>
         <a href='/portfolio'> <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-3xl text-lg">FunTime</button></a>
        </div>
      </div>
    </div>
  </section>
  

     
   
  
  )
}


Hero.schema = {
  name: 'hero',
  label: 'main hero',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a custom Hero Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
  ],
}

export default Hero
