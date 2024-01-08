import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='h-[300px] bg-slate-200 mt-[600px] drop-shadow-[150px_155px_205px_rgba(0,0,0,1)]'>

      <div className='flex flex-col p-[80px] ml-[100px]'>
        <h1 className='p-1 text-lg tracking-widest font-bold hover:underline'>Careers</h1>
        <h1 className='p-1 text-lg tracking-widest font-bold hover:underline'>About</h1>
        <h1 className='p-1 text-lg tracking-widest font-bold hover:underline'>Customer reviews</h1>
        <h1 className='p-1 text-lg tracking-widest font-bold hover:underline'>File a complaint</h1>
      </div>

      <div className='flex flex-col p-[80px] ml-[1050px] -mt-[300px]'>
        <h1 className='p-1 text-lg tracking-widest font-bold hover:underline'>© Tejasvi Sharma</h1>
        <h1 className='p-1 text-lg tracking-widest font-bold hover:underline'>© tejasvis3103@gmail.com</h1>
        <h1 className='p-1 text-lg tracking-widest font-bold hover:underline'>© Vixen-2024</h1>
      
      </div>

    </footer>
    </>
  )
}

export default Footer