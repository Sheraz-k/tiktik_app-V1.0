


/*

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';
import { createOrGetUser } from '../utils';

import useAuthStore from '../store/authStore';

import Logo from '../utils/tiktik-logo.png';



const Navbar = () => {
  
  const {userProfile, addUser, removeUser} = useAuthStore();


  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[129px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt='tiktiklogo'
            layout='responsive'
          />
        </div>
      </Link>
      <div>SEARCH</div>

      <div>
        {userProfile ? ( <div className='flex gap-5 md:gap-10'>
            <Link href="/upload">
              <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                <IoMdAdd className='text-xl' />{' '}
                <span className='hidden md:block'>Upload </span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href={"/"}>
                <>
                  <Image
                    className='rounded-full cursor-pointer'
                    src={userProfile.image}
                    alt='user'
                    width={40}
                    height={40}
                  />
                </>
              </Link>
            )}
              <button
                type='button'
                className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md'
                onClick={() => {
                  googleLogout();
                  removeUser();
                }}
              >
                <AiOutlineLogout color='red' fontSize={21} />
              </button>
          </div>


        ) : (
          <GoogleLogin 
          onSuccess={(response) => createOrGetUser(response, addUser)}
          
          onError={() => console.log("Error in Google Login")}
          />
        )}
      </div>

     
      
    </div>
  )
}

export default Navbar


*/


import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';

import useAuthStore from '../store/authStore';
import { IUser } from '../types';
import { createOrGetUser } from '../utils';
import Logo from "../utils/Cryptoverse2.png";

const Navbar = () => {
  const [user, setUser] = useState<IUser | null>();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { userProfile, addUser, removeUser } = useAuthStore();
  
  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if(searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px] rounded-full'>
          <Image
            className='cursor-pointer rounded-full'
            src={Logo}
            alt='logo'
            layout='responsive'
          />
        </div>
      </Link>

      <div className='relative hidden md:block'>
        <form
          onSubmit={handleSearch}
          className='absolute md:static top-10 -left-20 bg-white'
        >
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0'
            placeholder='Search accounts and videos'
          />
          <button
            onClick={handleSearch}
            className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400 hover:text-[navy]'
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div>
        {user ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href='/upload'>
              <button className=' bg-[#001529] text-white border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2 hover:text-[#001529] hover:bg-[#fff]'>
                <IoMdAdd className='text-xl' />{' '}
                <span className='hidden md:block '>Upload </span>
              </button>
            </Link>
            
            {user.image && (
              <Link href={`/profile/${user._id}`}>
                <div>
                  <Image
                    className='rounded-full cursor-pointer'
                    src={user.image}
                    alt='user'
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            )}
              <button
                type='button'
                className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md'
                onClick={() => {
                  googleLogout();
                  removeUser();
                }}
              >
                <AiOutlineLogout color='red' fontSize={21} />
              </button>
          </div>
        ) : (
            <GoogleLogin
              onSuccess={(response) => createOrGetUser(response, addUser)}
              onError={() => console.log('Login Failed')}
            />
        )}
      </div>
    </div>
    
  );
};

export default Navbar;




//google api token (Client ID)
//148075551969-pq0agsqp6ur1mk47j53bsa2a126sa6vq.apps.googleusercontent.com

//Google Api Client Secret
//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