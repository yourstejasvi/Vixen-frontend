import React from 'react';
import Rihanna from "../Fenty Assets/ri.png";

const Landing = () => {
  return (
    <>
        <div className=''>

        <div className='h-96 w-96 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] mt-[300px] -ml-12 border-t-2 border-slate-100 animate-float'></div>
        <div className='h-48 w-48 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] -mt-[280px] ml-[400px] border-t-2 border-slate-100 animate-float'></div>
        <div className='h-36 w-36 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] -mt-[460px] ml-[450px] border-t-2 border-slate-100 animate-reverseFloat'></div>
        <div className='h-12 w-12 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] mt-[40px] ml-[550px] border-t-2 border-slate-100 animate-reverseFloat'></div>

        </div>

        <img src={Rihanna} className='relative z-10 -mt-[300px] ml-[38px] rounded-full animate-reverseFloat'/>
    </>
    
  );
}

export default Landing;
