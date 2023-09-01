import React from 'react'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Arrow from '../../assets/arrow.png'

import Chart from './Chart'



const Overview = () => {

  const [criminalsInCustody, setCriminalsInCustody] = useState([]);
  const [visitorsVisited, setVisitorsVisited] = useState([]);
  const [officersAtStation, setOfficersAtStation] = useState([])
  const [crimeCategories, setCrimeCategories] = useState(new Set());


  const fetchCriminalsInCustody = async () => {
    try {
      const response = await fetch('https://crime-xrrp.onrender.com/officers/criminals');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Error fetching criminals in custody:', response.status);
        return [];
      }
    } catch (error) {
      console.error('Error fetching criminals in custody:', error);
      return [];
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const criminalsData = await fetchCriminalsInCustody();
      setCriminalsInCustody(criminalsData);
      // Similar logic for other categories
    };

    fetchData();
  }, []);

  // For Visitors

  const fetchVisitorsVisted = async () => {
    try {
      const response = await fetch('https://crime-xrrp.onrender.com/officers/visitors');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Error fetching visitors that visited:', response.status);
        return [];
      }
    } catch (error) {
      console.error('Error fetching visitors that visited:', error);
      return [];
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const visitorData = await fetchVisitorsVisted();
      setVisitorsVisited(visitorData);
      // Similar logic for other categories
    };

    fetchData();
  }, []);

  // For officers

  const fetchOfficersAtStation = async () => {
    try{
      const response = await fetch ('https://crime-xrrp.onrender.com/admin/officers')
      if(response.ok){
        const data = await response.json();
        return data
      }else{
        console.error('Error fetching awailable officers:', response.status);
        return[]
      }
    }catch(error){
      console.error('Error fetching available offices: ', error);
      return[]
    }
  };

  useEffect(()=>{
    const fetchData = async ()=>{
      const officerData = await fetchOfficersAtStation()
      setOfficersAtStation(officerData)
    }
    fetchData()
  },[])

  // For crime categories

  useEffect(() => {
    const fetchData = async () => {
      const criminalsData = await fetchCriminalsInCustody();
      setCriminalsInCustody(criminalsData);
  
      // Extract unique crime categories
      const uniqueCategories = new Set();
      criminalsData.forEach(criminal => {
        if (criminal.category) {
          uniqueCategories.add(criminal.category);
        }
      });
      setCrimeCategories(uniqueCategories);
    };
  
    fetchData();
  }, []);
  

  
  return (
    <div className='overview'>
      <h3>Overview</h3>
      <div className="overview-container">
        <div className="overview-box">
          <h1>{criminalsInCustody.length}</h1>
          <h3>Criminals in Custody</h3>
          <Link className='info'><span>More info</span> <img src={Arrow} alt="" /></Link>
        </div>


        <div className="overview-box">
          <h1>{visitorsVisited.length}</h1>
          <h3>Visitors</h3>
          <Link className='info'><span>More info</span> <img src={Arrow} alt="" /></Link>
        </div>

        <div className="overview-box">
          <h1>{officersAtStation.length}</h1>
          <h3>Officers</h3>
          <Link href='#' className='info'><span>More info</span> <img src={Arrow} alt="" /></Link>
        </div>

        <div className="overview-box">
          <h1>{crimeCategories.size}</h1>
          <h3>Crime Categories</h3>
          <Link className="info">
            <span>More info</span> <img src={Arrow} alt="" />
          </Link>
        </div>

      </div>
      <div className='chart-container'>
      <Chart crimeCategories={Array.from(crimeCategories)} />
    </div>
      
      <p className='chart-p'>Crime Category Rate based on Criminal Record at Anglo Jos Station</p>
    </div>
  )
}

export default Overview