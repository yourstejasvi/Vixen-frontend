import React from 'react';
import Rihanna from "../Fenty Assets/ri.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles.css';
import { EffectCoverflow } from 'swiper/modules';

import Fenty1 from "../Fenty Assets/product1.png";
import Fenty2 from "../Fenty Assets/product2.png";
import Fenty3 from "../Fenty Assets/product3.png";
import Fenty4 from "../Fenty Assets/product4.png";
import Fenty5 from "../Fenty Assets/product5.png";
import Fenty6 from "../Fenty Assets/product6.png";
import Fenty7 from "../Fenty Assets/product7.png";
import Fenty8 from "../Fenty Assets/product8.png";

import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Fenty = () => {
  return (
    <>
        <div className=''>

        <div className='h-96 w-96 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] mt-[300px] -ml-12 border-t-2 border-slate-100 animate-float'></div>
        <div className='h-48 w-48 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] -mt-[280px] ml-[400px] border-t-2 border-slate-100 animate-float'></div>
        <div className='h-36 w-36 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] -mt-[460px] ml-[450px] border-t-2 border-slate-100 animate-reverseFloat'></div>
        <div className='h-12 w-12 bg-black rounded-[200px] drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)] mt-[40px] ml-[550px] border-t-2 border-slate-100 animate-reverseFloat'></div>

        </div>

        <img src={Rihanna} className='relative z-10 -mt-[300px] ml-[38px] rounded-full animate-reverseFloat'/>

        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Fenty1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fenty2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fenty3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fenty4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fenty5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fenty6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fenty7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fenty8} />
        </SwiperSlide>
      </Swiper>

    <button className='flex text-white bg-black gap-7 pt-5 h-16 w-[200px] ml-[990px] drop-shadow-2xl rounded-3xl hover:drop-shadow-[10px_15px_15px_rgba(0,0,0,0.7)]'><PiShoppingCartSimpleFill style={{color:'white',scale:'2.8', marginLeft:'40px',marginTop:'2px'}}/>SHOP NOW</button>
    </>
    
  );
}

export default Fenty
