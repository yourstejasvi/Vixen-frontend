import React, { useEffect, useRef } from 'react';
import Banner from "../Lakme Assets/Lakme Banner.jpg";
import Logo from "../Lakme Assets/lakme.svg";

const Lakme = () => {
    const elementRef = useRef();

    useEffect(() => {
        const element = elementRef.current;

        const handleScroll = () => {
            // Get the position of the element relative to the viewport
            const rect = element.getBoundingClientRect();

            // Check if the element is in the viewport
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                // Add animation class when the element is in the Viewport
                element.classList.add('animate-slowSlideRight'); // Corrected class name
            } else {
                // Remove the animation class when the element is not in the Viewport
                element.classList.remove('animate-slowSlideRight');
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Trigger the initial check when the component mounts
        handleScroll();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <>  

            <div className=''>

                <div className='h-96 w-96 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] mt-[200px] ml-[1100px] border-t-2 border-slate-100 animate-float hover:drop-shadow-[10px_15px_15px_rgba(0,0,0,1)] '> 
                    <div className='flex flex-col'>
                        <h1 className='text-2xl text-white ml-[120px] mt-[120px] tracking-widest'>SHOP FOR</h1>
                        <img src={Logo} className="w-2/3 ml-16 mt-[10px] fill-white"/>

                    </div>
                    
                </div>
                <div className='h-48 w-48 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] -mt-[180px] ml-[900px] border-t-2 border-slate-100 animate-reverseFloat'></div>
                <div className='h-36 w-36 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] -mt-[460px] ml-[950px] border-t-2 border-slate-100 animate-reverseFloat'></div>
                

            </div>
            <div className='mt-[20px]'>
                <img ref={elementRef} src={Banner} className='z-10 absolute w-2/3 rounded-2xl' />
            </div>
        </>
    )
}

export default Lakme;
