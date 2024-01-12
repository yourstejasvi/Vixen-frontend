import React, {useState, useEffect} from 'react';
import { TbFilterSearch } from "react-icons/tb";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


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

     const [value, setValue] = useState([20, 37]);

      const handleChange = (event, newValue) => {
        setValue(newValue);

      };

      const [products, setProducts] = useState(null);

      useEffect(() => {

        const fetchProducts = async () => {
          const response = await fetch('/api/products');
          const json = await response.json()

          if(response.ok) {
              setProducts(json);
          }

        }

        fetchProducts();
      }, [])

  
  return (
    <>
    
        <div className='flex flex-row ml-8 mt-5 '> 

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

            <div className=''>
              <h1 className='font-salsa text-2xl ml-12 mt-4 tracking-wider'>All products</h1>
              {products && products.map((product) => (
                <div key={product._id}>
                  <h1>{product.name}</h1>
                  <h1>{product.price}</h1>
                  </div>

              ))}

            </div>

  
      </div>
            
    
    </>
  )
}

export default All