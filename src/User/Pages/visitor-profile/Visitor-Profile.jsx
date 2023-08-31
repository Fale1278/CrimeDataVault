import React, { useEffect, useState } from 'react'
import Police2 from '../../../assets/police2.png'
import Contact from '../../../assets/contact.svg'
import PreLoader from '../PreLoader/PreLoader'

import { Link, useParams } from 'react-router-dom'

const VisitorProfile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [visitorRecord, setVisitorRecord] = useState(true)
  const { _id } = useParams()

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 2000)
  },[])

  useEffect(() =>{
    const fetchVistitorRecord = async () =>{
      try{
        const response = await fetch (`https://crime-xrrp.onrender.com/officers/visitor/${_id}`)
        if(response.ok){
          const data = await response.json()
          setVisitorRecord(data)
        }else{
          console.error('Error fetching visitor record',
          response.status)
        }
      }catch (error){
        console.error('Error fetching criminal record:', error)
      }
    }
    fetchVistitorRecord()
  },[])

  if(!visitorRecord){
    return <div style={{marginRight: '18rem'}}>Loading...</div>
  }

  return (
    <div className='police-profile'>
      <div>
        {isLoading? (
          <PreLoader />
        ): (
          <div>
            <div className='pol'>
              <div>
                <img src={Police2} alt="" /><span>Visitor Details</span>
              </div>

              <div className='back'><Link to='/viewVisitor' className='back'><i class='bx bx-left-arrow-alt'></i>Back</Link></div>
            </div>

            <div key={visitorRecord.id}className="police-details-container">
              <div className="police-details">
                <div className="police-details-box">
                  <div className="kiri-kiri">
                    <span>{visitorRecord.correctionalCenter}</span>
                    <h1>{visitorRecord.name}</h1>
                  </div>
                  <div className="external">
                    <img src={visitorRecord.image} alt="" />
                  </div>
                </div>
              </div>

              <div className="police-details2">
                <div className="police-details2-box">
                  <h1><i class='bx bxs-user'></i><span>Personal Details</span></h1>
                </div>

                <div className="external2">
                  <p><b>First Name: </b>{visitorRecord.fistname}</p>
                  <p><b>Middle Name: </b>{visitorRecord.middlename}</p>
                  <p><b>Last Name: </b> {visitorRecord.lastname}</p>
                  <p><b>Age: </b> {visitorRecord.Age}</p>
                  <p><b>Sex: </b>{visitorRecord.gender}</p>
                  <p><b>Nationality: </b> {visitorRecord.Nationality}</p>
                  <p><b>State: </b> {visitorRecord.state}</p>
                  <p><b>LGA: </b> {visitorRecord.LGA}</p>
                  <p><b>Blood Group: </b> {visitorRecord.bloodGroup}</p>
                  <p><b>Height: </b> {visitorRecord.height}</p>
                  <p><b>Marital Status: </b> {visitorRecord.maritalStatus}</p>
                </div>
              </div>

              <div className="police-details2">
                <div className="police-details2-box">
                  <h1><img src={Contact} alt="" /><span>Contact Details</span></h1>
                </div>

                <div className="external2">
                  <p><b>Contact Line: {visitorRecord.contactLine}</b></p>
                  <p><b>Address: </b> {visitorRecord.visitorAddress}</p>
                </div>
              </div>
            </div>

            <button className='update'>
              <Link to='/updateVisitor' className='link'>Update Record</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default VisitorProfile