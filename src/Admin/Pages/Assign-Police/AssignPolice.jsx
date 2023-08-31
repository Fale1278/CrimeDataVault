
import React, { useEffect, useState } from 'react';

const AddPolice = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    password:'',
    lga: '',
    rank: '',
    assigningDate: '',
    station: '',
    image: null,
  });

  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const [generatedData, setGeneratedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 2000)
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e, type) => {
    const selectedImage = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: selectedImage,
    }));
  };

  const postFormData = async () => {
    try {
      const form = new FormData()

      for (const key in formData){
        if(formData[key]){
          form.append[key, formData[key]]
        }
      }

      const response = await fetch('https://crime-xrrp.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      return { data, status: response.status }; // Return both data and response status
    } catch (error) {
      throw error;
    }
  };

  const assignUser = async () => {
    try {
      const { data, status } = await postFormData();

      if (status === 200) {
        console.log('Data posted successfully:', data);
        setGeneratedData(data); // Store the generated data
        setSuccessPopupOpen(true);
        setErrorPopupOpen(false);
        // Optionally, you can reset the form after successful assignment
        setFormData({
          firstname: '',
          lastname: '',
          middlename: '',
          password: '',
          lga: '',
          rank: '',
          assigningDate: '',
          station: '',
          image:'',
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

    try {
      await assignUser();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const closeSuccessPopup = () => {
    setSuccessPopupOpen(false);
    setGeneratedData(null); // Clear generated data when popup is closed
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <div className='criminal-police'>
      <div>
        {isLoading? (
          <PreLoader2 />
        ): (
          <div>
            <p style={{ textAlign: 'center', padding: '2rem' }}>Assign Officer To Station</p>

              <form className='add-container2' onSubmit={handleFormSubmit}>
                <div className='add-box2'>
                  
              <ul>
              <ul>
                    <p>First Name</p>
                    <input type='text' name='firstname' onChange={handleInputChange} value={formData.firstname} />
                  </ul>

                  <ul>
                    <p>Middle Name</p>
                    <input type='text' name='middlename' onChange={handleInputChange} value={formData.middlename} />
                  </ul>

                  <ul>
                    <p>Last Name</p>
                    <input type='text' name='lastname' onChange={handleInputChange} value={formData.lastname} />
                  </ul>

                  <ul>
                    <p>Officer Rank</p>
                    <input type='text' name='rank' onChange={handleInputChange} value={formData.rank} />
                  </ul>

                  <ul>
                    <p>Assigning Date</p>
                    <input type='date' name='assigningDate' onChange={handleInputChange} value={formData.assigningDate} />
                  </ul>

              </ul>

                <ul>

                  <ul>
                    <p>LGA</p>
                    <input type='text' name='lga' onChange={handleInputChange} value={formData.lga} />
                  </ul>

                  <ul>
                    <p>Station</p>
                    <input type='text' name='station' onChange={handleInputChange} value={formData.station} />
                  </ul>
                  

                    {/* Capture */}
                    <ul className='biometric'>
                      <p>Capture</p>
                      <input
                        type='file'
                        accept='image/*'
                        onChange={(e) => handleImageChange(e, 'image')}
                      />
                      {/* Display the selected image */}
                      {formData.image && (
                        <div style={{width:'5rem', height: '5rem', borderRadius: '.5rem', marginLeft:'6rem', marginTop: '1rem'}}>
                          
                        <img style={{width: '100%', borderRadius:'.5rem'}} src={URL.createObjectURL(formData.image)} alt='' />
                        </div>
                      )}
                    </ul>
                  <button type='submit' className='addBtn2' style={{marginLeft:'6rem'}}>Assign Officer</button>
                </ul>
                </div>
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

export default AddPolice;
