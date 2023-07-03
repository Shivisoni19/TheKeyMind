import React from 'react'
import ServerHeader from '../components/Server/ServerHeader';
import ServerTopArea from '../components/Server/ServerTopArea';
import ServerMain from '../components/Server/ServerMain';
import ServerProducts from '../components/Server/ServerProducts';

const Server = () => {
  return (
    <>
      <ServerHeader/>
      <ServerTopArea/>
      <ServerProducts/>
      <ServerMain/>
    </>
  )
}

export default Server;
