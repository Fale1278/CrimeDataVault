import React, { useEffect, useState } from 'react';

const AssignPolice = () => {
  const [formData, setFormData] = useState({
    officerID: '',
    stationID: '',
    password:'',
  });

  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const [generatedData, setGeneratedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // State to hold validation errors for each field
  const [formErrors, setFormErrors] = useState({
    officerID: '',
    stationID: '',
    password:'',
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Clear the error message for this field when the user types
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    // Validation logic for each field
    if (!formData.stationID.trim()) {
      errors.stationID = 'Fill out the Station ID';
      valid = false;
    }

    if (!formData.officerID.trim()) {
      errors.officerID = 'Fill out Officer ID';
      valid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Fill out Password';
      valid = false;
    }

    // Add more validation for other fields

    setFormErrors(errors);
    return valid;
  };

  const postFormData = async () => {
    try {
      const form = new FormData();

      for (const key in formData) {
        if (formData[key]) {
          form.append(key, formData[key]);
        }
      }

      const response = await fetch('https://crime-llpq.onrender.com/admin/assign-station', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      throw error;
    }
  };

  const assignUser = async () => {
    try {
      const { data, status } = await postFormData();

      if (status === 200) {
        console.log('Data posted successfully:', data);
        setGeneratedData(data);
        setSuccessPopupOpen(true);
        setErrorPopupOpen(false);

        // Reset the form after successful assignment
        setFormData({
          officerID: '',
          stationID: '',
          password:'',
        });

        // Clear error messages
        setFormErrors({
          officerID: '',
          stationID: '',
          password:'',
        });
      } else {
        setErrorPopupOpen(true);
        setSuccessPopupOpen(false);
      }
    } catch (error) {
      console.error('Error assigning user:', error);
      setErrorPopupOpen(true);
      setSuccessPopupOpen(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await assignUser();
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
  };

  const closeSuccessPopup = () => {
    setSuccessPopupOpen(false);
    setGeneratedData(null);
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <div className='criminal-police'>
      <div>
        {isLoading ? (
          <PreLoader2 />
        ) : (
          <div>
            <p style={{ textAlign: 'center', padding: '2rem' }}>Assign Officer To Station</p>

            <form className='add-container2' onSubmit={handleFormSubmit}>
              <div className='add-box2'>
                <ul>
                  <p>Station ID</p>
                  <input
                    type='text'
                    name='stationID'
                    onChange={handleInputChange}
                    value={formData.stationID}
                  />
                  {formErrors.stationID && <p style={{fontStyle: 'italic', color: 'red'}} className='error'>{formErrors.stationID}</p>}
                </ul>

                <ul>
                  <p>Offcer ID</p>
                  <input
                    type='text'
                    name='officerID'
                    onChange={handleInputChange}
                    value={formData.officerID}
                  />
                  {formErrors.officerID && <p style={{fontStyle: 'italic', color: 'red'}} className='error'>{formErrors.officerID}</p>}
                </ul>

                <ul>
                  <p>Password</p>
                  <input
                    type='password'
                    name='password'
                    onChange={handleInputChange}
                    value={formData.password}
                  />
                  {formErrors.password && <p style={{fontStyle: 'italic', color: 'red'}} className='error'>{formErrors.password}</p>}
                </ul>
              
                  <button type='submit' className='addBtn2' style={{marginLeft:'6rem'}}>Assign Officer</button>
              </div>
              {/* ...other form fields and submit button */}
            </form>
              {/* Success Popup */}
              {isSuccessPopupOpen && (
                <div className='popup'>
                  <div className='popup-content'>
                    <h2>Officer Assigned Successfully</h2>
                    {generatedData && (
                      <div>
                        <p>Generated ID: {generatedData.id}</p>
                        <p>Generated Password: {generatedData.password}</p>
                      </div>
                    )}
                    <button onClick={closeSuccessPopup}>Ok</button>
                  </div>
                </div>
              )}

              {/* Error Popup */}
              {isErrorPopupOpen && (
                <div className='popup'>
                  <div className='popup-content'>
                    <h2>Error: Something went wrong</h2>
                    <button onClick={closeErrorPopup}>Ok</button>
                  </div>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};

// ... PreLoader2 and export statement


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

export default AssignPolice;