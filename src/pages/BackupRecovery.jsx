import React from 'react'
import BackupHeader from '../components/BackupRecovery/BackupHeader';
import BackupTopArea from '../components/BackupRecovery/BackupTopArea';
import BackupMain from '../components/BackupRecovery/BackupMain';
import BackupProducts from '../components/BackupRecovery/BackupProducts';

const BackupRecovery = () => {
  return (
    <>
      <BackupHeader/>
      <BackupTopArea/>
      <BackupProducts/>
      <BackupMain/>
    </>
  )
}

export default BackupRecovery
