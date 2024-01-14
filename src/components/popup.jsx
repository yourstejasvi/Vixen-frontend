import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import { TextField } from '@mui/material';
import Box from "@mui/material/Box";
import Bg from "../backround.jpeg";




const Popup = () => {

    const [isOpen, setIsOpen] = useState(true);

    const CloseModal = () => {
        setIsOpen(false);
    };


  return (
    <>
    <Modal
    isOpen={isOpen}
    onRequestClose={CloseModal}
    contentLabel="Join Vixen"
    className="h-[600px] w-[1000px] ml-[280px] mt-[72px] text-salsa tracking-widest bg-slate-100 rounded-3xl outline-2 outline-black z-50"
    style={{position:'relative',zIndex:'30'}}
    >   


    <img src={Bg} alt="picture" className='h-[500px] ml-[40px] mt-[50px] relative z-20 rounded-2xl shadow-md' style={{position:'relative',top:'50px'}}/>
    <Box 
    component='form'
    sx={{'& .MuiTextField-root': { m:1, width:'35ch'},
    position: 'relative',
    zIndex: 30,
    }}
    noValidate
    autoComplete="off"
    >

    
     <button onClick={CloseModal} className='cursor-pointer ml-[920px] -mt-10 p-2 text-black bg-white hover:drop-shadow-drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] absolute'><IoCloseSharp style={{scale:'2'}} /></button>
        <h2 className='relative z-30 text-5xl text-black font-semibold content-center ml-[670px] -mt-[420px] pt-5'>LOG-IN</h2>
        <div className='relative z-50 w-1/5 bg-black h-1 rounded-lg ml-[658px] mt-3'></div>
        
        <div className='relative z-50 flex flex-col mt-12 ml-[620px]'>

            <TextField required id="email" label="Email" className='bg-white rounded-2xl' ></TextField>
            <TextField required id="password" label="Password" className='bg-white rounded-2xl'></TextField>
            <Link className='text-lg font-bold hover:underline'>New? Sign-up</Link>

            <button className='bg-black text-white font-bold w-1/3 h-12 mt-[20px] ml-[70px] rounded-2xl shadow-lg hover:bg-white hover:text-black hover:shadow-xl'>Login</button>

        </div>
        
        

    
    
    
    </Box>
       
    </Modal>
    </>
  )
}

export default Popup