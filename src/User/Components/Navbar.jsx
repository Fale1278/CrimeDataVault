import React, { useState, useEffect } from 'react';
import Officer2 from '../../assets/officer2.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [updateRequests, setUpdateRequests] = useState([]);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchUpdateRequests(); // Fetch update requests when the component mounts
  }, []);

  const fetchUpdateRequests = async () => {
    try {
      const response = await fetch('https://crime-xrrp.onrender.com/admin/officers');
      if (response.ok) {
        const data = await response.json();
        setUpdateRequests(data);
      } else {
        console.error('Failed to fetch update requests');
      }
    } catch (error) {
      console.error('Error fetching update requests', error);
    }
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <div className='Navbar'>
      <Link to='/adminNotification' className={`bell ${updateRequests.length > 0 ? 'has-updates' : ''}`}>
        <FaBell />
        {updateRequests.length > 0 && <span className='notification-badge'>{updateRequests.length}</span>}
      </Link>
      {/* {isDropdownOpen && (
        <div className='dropdown'>
          {updateRequests.map(request => (
            <div key={request.id} className='dropdown-item'>
              <p>{request.message}</p>
            </div>
          ))}
        </div>
          )} */}
      <ul className='officer2'>
        <span>Admin</span> <img src={Officer2} alt="" />
      </ul>
    </div>
  );
};

export default Navbar;
