/*

import React from 'react';
import { NextPage } from 'next';
import { footerList1, footerList2, footerList3 } from '../utils/constants';


const List = ({ items, mt }: { items: string[], mt: Boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item: string) => (
      <p key={item} className='text-gray-400 text-sm  hover:underline cursor-pointer' >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block'>
    <List items={footerList1} mt={false} />
    <List items={footerList2} mt />
    <List items={footerList3} mt />
    <p className='text-gray-400 text-sm mt-5'>© 2022 Cryptoverse TikTik</p>
  </div>
  );
}

export default Footer

*/


import React from 'react';
import { NextPage } from 'next';
import { footerList1, footerList2, footerList3 } from '../utils/constants';

const List = ({ items, mt }: { items: string[], mt: Boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item: string) => (
      <p key={item} className='text-gray-400 text-sm  hover:underline cursor-pointer' >
        {item}
      </p>
    ))}
  </div>
);

const Footer: NextPage = () => (
  <div className='mt-6 hidden xl:block'>

    <a className='text-navy-400 text-sm  hover:underline cursor-pointer' href="https://781c950034cc1f6a7b57-sherazbscs3979-iiuedupk.vercel.app/create">CryptoMeet</a>

    <List items={footerList1} mt={false} />
    
    <List items={footerList3} mt />

    <a className='text-navy-400 text-sm  hover:underline cursor-pointer' href="https://781c950034cc1f6a7b57-sherazbscs3979-iiuedupk.vercel.app/create">Cryptoverse Data Site</a>
   
    <p className='text-gray-400 text-sm mt-5'>© 2022 Cryptoverse TikTik</p>
  </div>
);

export default Footer;


