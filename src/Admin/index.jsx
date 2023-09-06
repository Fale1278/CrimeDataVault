

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import TableChart from '../Admin/Pages/Table-chart/TableChart'
import ViewCriminal from '../Admin/Pages/view-criminal/View-criminal-record'
import CriminalProfile from '../Admin/Pages/crime-profile/Criminal-Profile'
import ViewVisitor from '../Admin/Pages/view-visitor/View-visitors-record'
import PoliceRecord from '../Admin/Pages/police-records/Police-records'
import AssignPolice from '../Admin/Pages/Assign-Police/AssignPolice'
import RegisterPolice from '../Admin/Pages/Register-Police/RegisterPolice'
import PoliceProfile from '../User/Pages/police-profile/Police-Profile'
import CrimeCategory from '../Admin/Pages/crime-categories/Crime-Categories'
import Notification from '../Admin/Pages/Notifications/Notification'
import VisitorProfile from '../Admin/Pages/visitor-profile/Visitor-Profile'
import AddStation from './Pages/Add-Station/AddStation'

const index = () => {
  const containerStyle = {
    
    // backgroundColor: 'lightblue',
    // ... other styles
  };

  return (
    <div style={containerStyle}>
    
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<TableChart />}/>
            <Route path='/adminNotification' element={<Notification />}/>
            <Route path='/viewCriminal' element={<ViewCriminal />} />
            <Route path='/criminalProfile/:_id' element={<CriminalProfile />} />
            <Route path='/viewVisitor' element={<ViewVisitor />} />
            
            <Route path='visitorProfile/:_id' element={<VisitorProfile />} />
            <Route path='/policeRecord' element={<PoliceRecord />} />
            <Route path='/registerPolice' element={<RegisterPolice />} />
            <Route path='/policeProfile/:_id' element={<PoliceProfile />} />
            <Route path='/addStation' element={<AddStation />} />
            <Route path='/assignPolice' element={<AssignPolice />} />
            <Route path='/crimeCategories' element={<CrimeCategory />} />
        </Routes> 
        <Footer />
      
    </div>
  )
}

export default index

