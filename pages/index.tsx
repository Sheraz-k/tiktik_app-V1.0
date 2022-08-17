



import axios from 'axios';

import VideoCard from '../components/VideoCard';
import { BASE_URL } from '../utils';
import { Video } from '../types';
import NoResults from '../components/NoResults';

interface IProps {
  videos: Video[];
}

const Home = ({ videos } : IProps) => {

  return (
    <div className='flex flex-col gap-8 videos h-full'>
      {videos.length 
        ? videos?.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
  );
}

//Server Side Rendering from the page
// redering page whose data must fecth on request time

export const getServerSideProps = async ({
  query: {topic}

}: {
  query: {topic:string}
}) => {

  let response = null;

  if(topic) {

    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);


  } else { 

    response = await axios.get(`${BASE_URL}/api/post`);

  }

  return{

    props:{
      videos: response.data
    }, //will passed to the page componenet as props

  }


}

export default Home







/*


import React from 'react';
import axios from 'axios';

import VideoCard from '../components/VideoCard';
import { BASE_URL } from '../utils';
import { Video } from '../types';
import NoResults from '../components/NoResults';

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length 
        ? videos?.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }
  
  return {
    props: { videos: response.data },
  };
};


*/