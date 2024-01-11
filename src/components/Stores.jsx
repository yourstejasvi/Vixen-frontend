import React, { useState } from 'react';
import Store1 from "../Stores/1.jpg";
import Store2 from "../Stores/2.jpg";
import Store3 from "../Stores/3.avif";
import Store4 from "../Stores/4.jpg";
import Store5 from "../Stores/5.jpeg";
import Store6 from "../Stores/6.jpg";
import Store7 from "../Stores/7.jpg";
import Store8 from "../Stores/8.jpeg";
import Store9 from "../Stores/9.avif";
import Store10 from "../Stores/10.jpg";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Stores = () => {
  const Stores = [
    {
      id:1,
      src:Store1,
      address:"2706 Conroy Groves, Hillsborough, WI 22587",
      contact:"(206) 342-8631"
    },
    {
      id:2,
      src:Store2,
      address:"Suite 140 2250 Seymour Trail, Reingershire, ID 90365-6454",
      contact:"(717) 550-1675"
    },
    {
      id:3,
      src:Store3,
      address:"Suite 799 425 Brekke Creek, South Todd, ND 62637",
      contact:"(248) 762-0356"
    },
    {
      id:4,
      src:Store4,
      address:"963 Ward Locks, Sueannchester, MI 77116",
      contact:"(253) 644-2182"
    },
    {
      id:5,
      src:Store5,
      address:"3882 Bernhard Village, East Jeffrey, IN 70648",
      contact:"(212) 658-3916"
    },
    {
      id:6,
      src:Store6,
      address:"10472 Rueben Extension, New Kathi, MD 60483-6797",
      contact:"(262) 162-1585"
    },
    {
      id:7,
      src:Store7,
      address:"846 Devorah Coves, Spencerchester, AK 85726-2375",
      contact:"(252) 258-3799"
    },
    {
      id:8,
      src:Store8,
      address:"924 Powlowski Cliff, West Dinoton, GA 95433",
      contact:"(201) 874-8593"
    },
    {
      id:9,
      src:Store9,
      address:"Apt. 207 38541 Elton Parkway, Hermelindastad, SC 16832-1871",
      contact:"(209) 300-2557"
    },
    {
      id:10,
      src:Store10,
      address:"Apt. 163 5764 Delcie Expressway, New Porfirio, NE 13843-9431",
      contact:"(234) 109-6666"
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage-1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedStores = Stores.slice(startIndex, endIndex);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return ( 
    <>

            {displayedStores.map((object) => (
            <div id={object.id} className='pt-16 ml-[450px]'>
                <div className='w-[600px] h-[300px] pt-12 bg-white shadow-md rounded-xl hover:shadow-2xl'>
                     <img src={object.src} alt="" className='h-[200px] w-[300px] ml-10  rounded-xl shadow-md'/>
                     <div className='flex flex-col ml-[360px] -mt-[190px]'>
                          <h1 className='text-md tracking-wider p-5'>ADDRESS: {object.address}</h1>
                          <h1 className='text-md tracking-wider p-5'>CONTACT: {object.contact}</h1>

                     </div>

                </div>
            </div>
          ))};
        <Stack style={{marginTop:'100px',marginLeft:'700px'}}>
          <Pagination count={Math.ceil(Stores.length/ itemsPerPage)} page={currentPage} onChange={handlePageChange} />
        </Stack>

    </>
  )
}

export default Stores