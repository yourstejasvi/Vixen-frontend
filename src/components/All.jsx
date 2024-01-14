import React, {useState, useEffect} from 'react';
import { TbFilterSearch } from "react-icons/tb";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { IoBagAddSharp } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
//Fenty Beauty products
import FP1 from "../Fenty products/1.jpg";
import FP2 from "../Fenty products/2.jpg";
import FP3 from "../Fenty products/3.jpg";
import FP4 from "../Fenty products/4.jpg";
import FP5 from "../Fenty products/5.jpg";
import FP6 from "../Fenty products/6.jpg";
import FP7 from "../Fenty products/7.jpg";
import FP8 from "../Fenty products/8.jpg";
import FP9 from "../Fenty products/9.jpg";
import FP10 from "../Fenty products/10.jpg";
import FP11 from "../Fenty products/11.jpg";
import FP12 from "../Fenty products/12.jpg";
import FP13 from "../Fenty products/13.jpg";
import FP14 from "../Fenty products/14.jpg";
import FP15 from "../Fenty products/15.jpg";
import FP16 from "../Fenty products/16.jpg";
//Lakme products
import LP1 from "../Lakme products/1.jpg";
import LP2 from "../Lakme products/2.jpg";
import LP3 from "../Lakme products/3.jpg";
import LP4 from "../Lakme products/4.jpg";
import LP5 from "../Lakme products/5.jpg";
import LP6 from "../Lakme products/6.jpg";
import LP7 from "../Lakme products/7.jpg";
import LP8 from "../Lakme products/8.jpg";
import LP9 from "../Lakme products/9.jpg";
import LP10 from "../Lakme products/10.jpg";
import LP11 from "../Lakme products/11.jpg";
import LP12 from "../Lakme products/12.jpg";
//Sugar products
import SP1 from "../Sugar products/1.jpg";
import SP2 from "../Sugar products/2.jpg";
import SP3 from "../Sugar products/3.jpg";
import SP4 from "../Sugar products/4.jpg";
import SP5 from "../Sugar products/5.jpg";
import SP6 from "../Sugar products/6.jpg";
import SP7 from "../Sugar products/7.jpg";
import SP8 from "../Sugar products/8.jpg";
import SP9 from "../Sugar products/9.jpg";
import SP10 from "../Sugar products/10.jpg";
import SP11 from "../Sugar products/11.jpg";
import SP12 from "../Sugar products/12.jpg";
import SP13 from "../Sugar products/13.jpg";
import SP14 from "../Sugar products/14.jpg";
import SP15 from "../Sugar products/15.jpg";
import SP16 from "../Sugar products/16.jpg";
//Pagination
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2';
import Info from "../components/info.jsx";




function valuetext(value) {
  return `${value}Rs`;
}



const All = () => {

     const brands = [
      {
        id:1,
        name:"Fenty",
        tag:"Fenty"
      },
      {
        id:2,
        name:"Lakme",
        tag:"Lakme"
      },
      {
        id:3,
        name:"Sugar",
        tag:"Sugar"
      },
     ];


     const Products = [
      {
        id:1,
        name:"Lipstick",
      },
      {
        id:2,
        name:"Blush",
      },
      {
        id:3,
        name:"Nailpaint",
      },
      {
        id:4,
        name:"Eyeshadow",
      },
      {
        id:5,
        name:"Foundation",
      },
      {
        id:6,
        name:"Eyeliner",
      },

     ];

     const All_Products = [
      {
        id:1,
        name:"Stunna Lip paint- Pink Hue",
        src:FP1,
        price:"5200",
        brand:"Fenty"
      },
      {
        id:2,
        name:"Stunna Lip paint- Red town",
        src:FP2,
        price:"5200",
        brand:"Fenty"
      },
      {
        id:3,
        name:"Fenty Lip gloss- Tint",
        src:FP3,
        price:"6000",
        brand:"Fenty"
      },
      {
        id:4,
        name:"FOundation stick-Olive hue (210)",
        src:FP4,
        price:"10000",
        brand:"Fenty"
      },
      {
        id:5,
        name:"Summer edition lip gloss 987",
        src:FP5,
        price:"7000",
        brand:"Fenty"
      },
      {
        id:6,
        name:"Nailpaint combo",
        src:FP6,
        price:"15000",
        brand:"Fenty"
      },
      {
        id:7,
        name:"Lipstick stick 678",
        src:FP7,
        price:"3000",
        brand:"Fenty"
      },
      {
        id:8,
        name:"Foundation brown-8 dewy",
        src:FP8,
        price:"8000",
        brand:"Fenty"
      },
      {
        id:9,
        name:"Foundation olive-2 matte",
        src:FP9,
        price:"8200",
        brand:"Fenty"
      },
      {
        id:10,
        name:"Foundation stick black",
        src:FP10,
        price:"9800",
        brand:"Fenty"
      },
      {
        id:11,
        name:"Powder Shimmy",
        src:FP11,
        price:"9000",
        brand:"Fenty"
      },
      {
        id:12,
        name:"Night Sky Eyeshadow- 04",
        src:FP12,
        price:"10000",
        seller:" ",
        brand:" "
      },
      {
        id:13,
        name:"Pastel Eyeshadow-03",
        src:FP13,
        price:"10000",
        brand:"Fenty"
      },
      {
        id:14,
        name:"Dandelion Eyeshadow",
        src:FP14,
        price:"11000",
        brand:"Fenty"
      },
      {
        id:15,
        name:"Lip gloss",
        src:FP15,
        price:"7000",
        brand:"Fenty"
      },
      {
        id:16,
        name:"Bride Blush",
        src:FP16,
        price:"9000",
        brand:"Fenty"
      },
      ///////////////////////////////////////////
      {
        id:17,
        name:"Magenta Lipstick",
        src:LP1,
        price:"700",
        brand:"Lakme"
      },
      {
        id:18,
        name:"Nude Liptick-09",
        src:LP2,
        price:"570",
        brand:"Lakme"
      },
      {
        id:19,
        name:"Pink Hue Lipstick",
        src:LP3,
        price:"450",
        brand:"Lakme"
      },
      {
        id:20,
        name:"Blush me up",
        src:LP4,
        price:"870",
        brand:"Lakme"
      },
      {
        id:21,
        name:"Rejunevating Facemask",
        src:LP5,
        price:"100",
        brand:"Lakme"
      },
      {
        id:22,
        name:"Liquid FOundation- 20++ SPF",
        src:LP6,
        price:"700",
        brand:"Lakme"
      },
      {
        id:23,
        name:"Foundation + Primer",
        src:LP7,
        price:"580",
        brand:"Lakme"
      },
      {
        id:24,
        name:"Infinity Eye Shadow Pallette",
        src:LP8,
        price:"900",
        brand:"Lakme"
      },
      {
        id:25,
        name:"Infinity Pink Paradise",
        src:LP9,
        price:"900",
        brand:"Lakme"
      },
      {
        id:26,
        name:"ALL DAY mascara",
        src:LP10,
        price:"200",
        brand:"Lakme"
      },
      {
        id:27,
        name:"Waterproof Eyeliner",
        src:LP11,
        price:"240",
        brand:"Lakme"
      },
      {
        id:28,
        name:"Foundation stick -98b",
        src:LP12,
        price:"400",
        brand:"Lakme"
      },
      ////////////////////////////////////////////////////////////////
      {
        id:29,
        name:"Rub me Foundation cake-75",
        src:SP1,
        price:"500",
        brand:"Sugar"
      },
      {
        id:30,
        name:"Foundation + Moisturizer",
        src:SP2,
        price:"650",
        brand:"Sugar"
      },
      {
        id:31,
        name:"Shimmery gold Highlighter",
        src:SP3,
        price:"120",
        brand:"Sugar"
      },
      {
        id:32,
        name:"Concelear-78B",
        src:SP4,
        price:"340",
        brand:"Sugar"
      },
      {
        id:33,
        name:"Curl me up Mascara",
        src:SP5,
        price:"120",
        brand:"Sugar"
      },
      {
        id:34,
        name:"Liquid matte finish Foundation-903",
        src:SP6,
        price:"250",
        brand:"Sugar"
      },
      {
        id:35,
        name:"Cherry Lip Balm",
        src:SP7,
        price:"100",
        brand:"Sugar"
      },
      {
        id:36,
        name:"Dual shade liquid lipstick",
        src:SP8,
        price:"420",
        brand:"Sugar"
      },
      {
        id:37,
        name:"2 in 1 Liquid Lipstick",
        src:SP9,
        price:"300",
        brand:"Sugar"
      },
      {
        id:38,
        name:"Blush- Pink pinncake",
        src:SP10,
        price:"200",
        brand:"Sugar"
      },
      {
        id:39,
        name:"Eyeshadow Pink Sky pallete",
        src:SP11,
        price:"740",
        brand:"Sugar"
      },
      {
        id:40,
        name:"Jelly eyeshadow - brown",
        src:SP12,
        price:"300",
        brand:"Sugar"
      },
      {
        id:41,
        name:"Eyeshadow NUDE Sky pallete",
        src:SP13,
        price:"740",
        brand:"Sugar"
      },
      {
        id:42,
        name:"Foundation Stick",
        src:SP14,
        price:"560",
        brand:"Sugar"
      },
      {
        id:43,
        name:"Tictactoe Naipaint- turquoise",
        src:SP15,
        price:"80",
        brand:"Sugar"
      },
      {
        id:44,
        name:"Tictactoe Nailpaint- Wine",
        src:SP16,
        price:"80",
        brand:"Sugar"
      },
     ];

     const [value, setValue] = useState([20, 37]);

      const handleChange = (event, newValue) => {
        setValue(newValue);

      };

      const [products, setProducts] = useState(null);

      // For fetching dynamic data from mongodb
      useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch('/api/products/')
          const json = await response.json()

          if (response.ok) {
            setProducts(json)
          }
        }
        fetchProducts()
      },[])
      
      const itemsPerPage = 9;
      const [currentPage, setCurrentPage] = useState(1);
      const startIndex = (currentPage -1) * itemsPerPage;
      const EndIndex = startIndex + itemsPerPage;
      const displayedProducts = All_Products.slice(startIndex,EndIndex);
      const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
      };

       // For like button
      const [likeStates, setLikeStates] = useState(Array(All_Products.length).fill(false));

      // Swal Fire for like
      const[isLiked, setIsLiked] = useState(false);

      useEffect(() => {
        if (isLiked) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added to wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }, [isLiked]);

      // For adding to cart
      const [addToCartStates, setAddToCartStates] = useState(Array(All_Products.length).fill(false));

      // Swal Fire for adding to cart
      const [isClicked,setIsClicked] = useState(false);

      useEffect(() => {
        if (isClicked) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added to Cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }, [isClicked]);
  
  return (
    <>
    
        <div className='flex flex-row ml-8 mt-5 scroll-smooth '> 

            <div className='relative w-1/5 h-[700px] bg-white drop-shadow-md'>
      
              <div className='p-10 ml-14'>
                <h1 className='flex flex-row text-2xl tracking-widest font-salsa'>Filters<TbFilterSearch style={{marginTop:'2',marginLeft:'3'}}/></h1>
              </div>
              <FormGroup>

                  <h1 className='pl-12 -mt-5 text-xl text-black tracking-widest font-salsa'>Brands</h1>

                  {brands.map((object) => (
                    <>
                          <FormControlLabel key={object.id} control={<Checkbox />} label={object.name} style={{marginLeft:'25px',marginTop:'-4px'}} />
                    </>
                  ))}
                  
              </FormGroup>
              <FormGroup>

                  <h1 className='pl-12 mt-5 text-xl text-black tracking-widest font-salsa'>Products</h1>

                  {Products.map((object) => (
                    <>
                          <FormControlLabel key={object.id} control={<Checkbox />} label={object.name} style={{marginLeft:'25px',marginTop:'-4px'}} />
                    </>
                  ))}
                  
              </FormGroup>
              <h1 className='pl-12 mt-10 text-xl text-black tracking-widest font-salsa'>Price Range</h1>
              <Box sx={{ width: 150, marginLeft:'50px', marginTop:'20px' }}>
                    <Slider
                      getAriaLabel={() => 'Price range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      sx={{
                        color:'black', 
                        '& .MuiSlider-thumb': {
                          backgroundColor: 'black',
                        },
                        '& .MuiSlider-rail': {
                          backgroundColor: 'black', 
                        },
                        '& .MuiSlider-track': {
                          backgroundColor: 'black', 
                        },
                      }}
                      min={200}
                      max={5000}
                      step={100}
                    />
              </Box>
            </div>

            <Info />
            
            {/* Grids from static data */}
           
            <div className=''>
              <h1 className='font-salsa text-2xl ml-12 mt-4 tracking-wider hover:underline'>All products</h1>
              

                <div className='grid grid-cols-3 grid-rows-3 gap-24 ml-[130px] mt-[30px]'>
                {displayedProducts.map((object) => (
                    <div key={object.id} className='h-[320px] w-[250px] bg-white rounded-lg shadow-md'>
                      <div className='relative'>

                      <button
                    key={object.id}
                    className='bg-slate-100 rounded-full p-5 shadow-md -ml-5 hover:shadow-xl'
                    style={{ position: 'relative', top: '-65px' }}
                    onClick={() => {
                      const newAddToCartStates = [...addToCartStates];
                      newAddToCartStates[displayedProducts.indexOf(object)] = !newAddToCartStates[displayedProducts.indexOf(object)];
                      setAddToCartStates(newAddToCartStates);
                      setIsClicked((prev) => !prev);
                    }}
                  >
                    {addToCartStates[displayedProducts.indexOf(object)] ?
                     <> 
                     <IoBagCheck style={{ scale: '2' }}  />
                     </> : 
                     <IoBagAddSharp style={{ scale: '2' }} />}

                  </button>

                  <button
                    key={object.id}
                    className='bg-slate-100 rounded-full p-5 shadow-md -ml-14 mt-14 hover:shadow-xl'
                    onClick={() => {
                      const newLikeStates = [...likeStates];
                      newLikeStates[displayedProducts.indexOf(object)] = !newLikeStates[displayedProducts.indexOf(object)];
                      setLikeStates(newLikeStates);
                      setIsLiked((prev)=>!prev);
                    }}
                  >
                    {likeStates[displayedProducts.indexOf(object)] ? <GoHeartFill style={{ scale: '2' }} /> : <GoHeart style={{ scale: '2' }} />}

                  </button>

                      <img src={object.src} className='h-[220px] w-[190px] p-4 ml-7 -mt-24 shadow-md'/>
                      <h1 className='text-md p-2 ml-7 mt-1 tracking-wider cursor-pointer font-bold hover:underline'>{object.name}</h1>
                      <h1 className='text-md p-2 ml-7 -mt-4 tracking-wide'>₹{object.price}/-</h1>


                      </div>
                      

                    </div>

                

              ))}
              
              </div>
              <Stack style={{marginTop:'70px',marginLeft:'380px'}}>
                <Pagination count={Math.ceil(All_Products.length/ itemsPerPage)} page={currentPage} onChange={handlePageChange} />
              </Stack>
            </div>

  
      </div>
            
    
    </>
  )
}

export default All