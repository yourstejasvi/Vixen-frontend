import React, { useState } from 'react';
import Lipstick from "../Sugar Assets/Lipstick crayons.jpg";
import Blush from "../Sugar Assets/blush.avif";
import Foundation from "../Sugar Assets/Foundation stick.jpg";
import Eyeliner from "../Sugar Assets/eyeliner.jpeg";
import Eyeshadow from "../Sugar Assets/eyeshadow.avif";
import Nailpaint from "../Sugar Assets/nailpaints.jpg";
import Logo from "../Sugar Assets/sugar logo.png";
import { GoArrowRight } from "react-icons/go";
import { TbShoppingBagSearch } from "react-icons/tb";

const Sugar = () => {


    const [hoveredImage, setHoveredImage] = useState(null);

    const images = [
        {   
            id:1,
            src: Lipstick,
            desc: "Lipstick"
        },     
        {   
            id:2,
            src: Eyeshadow,
            desc: "Eyeshadow"
        },
        {
            id:3,
            src: Foundation,
            desc: "Foundation"
        },
        {   
            id:4,
            src: Eyeliner,
            desc: "Eyeliner"
        },
        {
            id:5,
            src: Blush,
            desc: "Blush"
        },
        {
            id:6,
            src: Nailpaint,
            desc: "Nailpaint"
        },
    ]


  return (
    <>

    <div className=''>

    <div className='h-96 w-96 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] mt-[500px] -ml-12 border-t-2 border-slate-100 animate-float'>
        <img src={Logo} alt="" className='scale-75 mt-[70px]'/>
    </div>
    <div className='h-36 w-36 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] -mt-[110px] ml-[330px] border-t-2 border-slate-100 animate-reverseFloat cursor-pointer hover:drop-shadow-[10px_15px_15px_rgba(0,0,0,1)]'>
        <h1 className='flex flex-col text-white text-xl ml-10 mt-14 tracking-widest'>SHOP <GoArrowRight style={{marginLeft:'20'}}/> </h1>
    </div>

    </div>

        <div className='grid grid-cols-3 grid-rows-2 gap-10 mt-[10px] h-[900px] p-14'> 
 
            {images.map((object) => (
                <div key={object.id}
                className='relative group'
                onMouseEnter={() => setHoveredImage(object.id)}
                onMouseLeave={() => setHoveredImage(null)}>
                    <button>

                        <img src={object.src} alt="" className='cursor-pointer hover:opacity-40'/>
                        {hoveredImage === object.id && (
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <TbShoppingBagSearch style={{scale:'5',color:'black'}} />
                        </div>
                        )};

                    </button>
                    
                
                </div>
            ))};

        </div>
    </>
  )
}

export default Sugar