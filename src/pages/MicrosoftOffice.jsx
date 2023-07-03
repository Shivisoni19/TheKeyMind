import React from 'react'
import OfficeHeader from '../components/MicrosoftOffice/OfficeHeader'
import OfficeMain from '../components/MicrosoftOffice/OfficeMain';
import OfficeTopArea from '../components/MicrosoftOffice/OfficeTopArea';
import OfficeProduct from '../components/MicrosoftOffice/OfficeProduct';

const MicrosoftOffice = () => {
  return (
    <>
      <OfficeHeader/>
      <OfficeTopArea/>
      <OfficeProduct/>
      <OfficeMain/>
    </>
  )
}

export default MicrosoftOffice;
