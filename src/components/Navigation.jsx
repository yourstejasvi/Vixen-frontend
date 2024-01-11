import React from 'react';
import { useState, useEffect } from 'react';
import Logo from "../Fenty Assets/logo.png";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import All from "../components/All.jsx";
import Stores from '../components/Stores.jsx';
import ContactUs from '../components/ContactUs.jsx';
import Fenty from '../components/Fenty.jsx';
import Lakme from '../components/Lakme.jsx';
import Sugar from '../components/Sugar.jsx';


const Navigation = () => {

  const dropdown = ['LIPSTICK', 'BLUSH', 'HIGHLIGHTER', 'EYELINER', 'FOUNDATION', 'EYE-SHADOW'];
  const [isOpen, setIsOpen] = useState(false);

  //Rendering components on the basis of active link

  const [activeLink, setActiveLink] = useState();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  const renderComponent = () => {
    switch (activeLink) {
      case 'All':
        return <All />;
      case 'Stores':
        return <Stores />;
      case 'ContactUs':
        return <ContactUs />;
      default:
        return (
          <>
          <Fenty />
          <Lakme />
          <Sugar />
          </>
        )
    
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll',handleScroll);
    };
  }, []);

  return (
    <>
        <div className={`z-20 w-full h-[120px] bg-slate-100 shadow-lg ${isScrolled ? 'fixed top-0' : ''}`}>
            <div className='flex flex-row'>

            <img src={Logo} className='h-24 ml-[50px] my-4 drop-shadow-xl'/>
            <h2 className='font-salsa text-7xl p-4 mt-4 drop-shadow-xl tracking-wider'>Vixen</h2>

            </div>

            <div className='flex flex-row justify-around ml-[800px] -mt-[80px]'>
                <a className='p-2 text-xl cursor-pointer tracking-widest hover:shadow-inner'
                   onClick={()=>handleLinkClick('All')}>ALL</a>
                <div className='p-2 flex flex-row text-xl cursor-pointer hover:shadow-inner'>
                  <button className='flex flex-col tracking-wider' onClick={() => setIsOpen((prev) => !prev)}>
                    PRODUCTS
                    {!isOpen ? (
                      < AiOutlineCaretDown style={{marginLeft:'120px', marginTop:'-24px'}}  />
                    ) : (
                      < AiOutlineCaretUp style={{marginLeft:'120px', marginTop:'-24px'}}  />
                    )}

                  </button>
                  {isOpen && (
                    <div className='z-10 bg-slate-100 absolute p-10 shadow-lg mt-10 -ml-7 justify-around'>
                      {dropdown.map((item) => (
                        <div>
                          <a className='text-sm font-light tracking-widest p-1 hover:bg-slate-200'>{item}</a>
                          </div>
                      ))}

                    </div>
                  )}
                  </div>
                <a className='p-2 text-xl cursor-pointer tracking-wider hover:shadow-inner'
                   onClick={()=>handleLinkClick('Stores')}>STORES</a>
                <a className='p-2 text-xl cursor-pointer tracking-wider hover:shadow-inner'
                   onClick={()=>handleLinkClick('ContactUs')}>LOGIN</a>

            </div>
            

        </div>

        {renderComponent()}

        

    </>
  )
}

export default Navigation