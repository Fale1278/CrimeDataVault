// ViewCriminal.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Finger from '../../../assets/fingerprint.png';
import Eye2 from '../../../assets/eye2.png';

const ViewCriminal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [criminalRecords, setCriminalRecords] = useState([]);
  const [filteredCriminalRecords, setFilteredCriminalRecords] = useState([]);

  useEffect(() => {
    // Fetch the criminal records from the backend API
    const fetchCriminalRecords = async () => {
      try {
        const response = await fetch('https://crime-xrrp.onrender.com/officers/criminals');
        if (response.ok) {
          const data = await response.json();
          setCriminalRecords(data);
        } else {
          console.error('Error fetching criminal records:', response.status);
        }
      } catch (error) {
        console.error('Error fetching criminal records:', error);
      }
    };
    fetchCriminalRecords();
  }, []);

  useEffect(() => {
    // Filter the criminal records based on the search query
    const filteredRecords = criminalRecords.filter(
      (record) =>
        record.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.crime.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCriminalRecords(filteredRecords);
  }, [searchQuery, criminalRecords]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };


  return (
    <div className='view-record'>
      <div className="view-records-container">
        <div className="entries">
          <p><img src={Finger} alt="" /><span>Criminal Records</span></p>
          <p>Show 
            <select name="" id="">
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            entries
          </p>
        </div>

        <div className="entries2">
          <p><i className='bx bxs-filter-alt'></i>Filter Record</p>
          <ul>
            <span>Search: </span>
            <input type="text" value={searchQuery} onChange={handleSearchChange} />
          </ul>
        </div>
      </div>

      <table>
        <thead className='thead'>
          <tr>
            <th >ID</th>
            <th>IMAGE</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>GENDER</th>
            <th>CRIME</th>
            <th>CRIME DATE</th>
            <th>STATUS</th>
            <th>VIEW</th>
            <th>SENTENCE</th>
          </tr>
        </thead>

        <tbody>
          {filteredCriminalRecords.length > -1 ? filteredCriminalRecords.map((record) => (
            <tr key={record.ID}>
              <td>{record.ID}</td>
              <td><img src={record.image} alt="" style={{ width: '2rem', paddingTop: '2px' }} /></td>
              <td>{record.firstname}</td>
              <td>{record.lastname}</td>
              <td>{record.gender}</td>
              <td>{record.crime}</td>
              <td>{record.dateCommitted}</td>
              <td>{record.status}</td>
              <td><Link to={`/criminalProfile/${record._id}`}><img src={Eye2} alt="" /></Link></td>
              <td>{record.sentence}</td>
            </tr>
          )): <PreLoader2 />}
        </tbody>
      </table>

      <p className='skip'>
        <span><i className='bx bx-skip-previous'></i></span> <span>Prev | Next </span> <span><i className='bx bx-skip-next'></i></span>
      </p>
    </div>
  );
};

const PreLoader2 = () => {
  return (
    <div className='preLoader2'>
      <div className="dot-container2">
        <div className="dot2"></div>
        <div className="dot2"></div>
        <div className="dot2"></div>
      </div>
    </div>
  )
}

export default ViewCriminal;
