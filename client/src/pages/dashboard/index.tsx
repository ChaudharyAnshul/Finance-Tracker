import {useUser} from '@clerk/clerk-react'
import { useState } from 'react';


export const Dashboard = () => {
  const{ user } = useUser();


  return (
    <div className="dashboard-container"> 
      <h1> Welcome {user?.firstName}! Here Are Your FInances:</h1> 

    </div>
  );
};