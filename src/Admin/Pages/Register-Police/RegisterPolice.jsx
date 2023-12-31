import React, { useEffect, useState } from 'react';

const AddPolice = () => { 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    age: '',
    maritalStatus: '',
    email: '',
    contactLine: '',
    address :'',
    DOB: '',
    gender: '',
    lga: '',
    town: '',
    state: '',
    nationality: '',
    height: '',
    weight: '',
    eyeColor: '',
    bloodGroup: '',
    haircolor: '',
    nextOfKin: '',
    nextOfKinContact: '',
    nextOfKinAddress: '',
    rank: '',
    appointmentDate: '',
    currentStation: '',
    policeId: '',
    fingerPrints: null,
    image: null,
  });

  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
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
          form.append(key, formData[key])
        }
      }

      const response = await fetch('https://crime-llpq.onrender.com/admin/officerSignup', {
        method: 'POST',
        body: form,
      });

      const data = await response.json();
      console.log('API Response:', data)
      return data;
    } catch (error) {
      throw error;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await postFormData();
      
      if(data) {
        console.log('Data Posted Successfully:', data)
        setSuccessPopupOpen(true);
        setErrorPopupOpen(false);

        setFormData({
          ...formData,
          firstName: '',
          lastName: '',
          middleName: '',
          age: '',
          maritalStatus: '',
          email: '',
          contactLine: '',
          address :'',
          DOB: '',
          gender: '',
          lga: '',
          town: '',
          state: '',
          nationality: '',
          height: '',
          weight: '',
          eyeColor: '',
          bloodGroup: '',
          haircolor: '',
          nextOfKin: '',
          nextOfKinContact: '',
          nextOfKinAddress: '',
          rank: '',
          appointmentDate: '',
          currentStation: '',
          policeId: '',
          fingerPrints: null,
          image: null,
        })

        console.log(setFormData);
      }else {
        setErrorPopupOpen(true);
        setSuccessPopupOpen(false);
      }
    } catch (error) {
      console.error('Error posting data:', error);
      setErrorPopupOpen(true);
      setSuccessPopupOpen(false);
    }
  };

  const closeSuccessPopup = () => {
    setSuccessPopupOpen(false);
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <div className='criminal-record'>
      <div>
        {isLoading? (
          <PreLoader2 />
        ): (
          <div>
             <p className='add-text'>Register a New Police</p>
      <form className='add-container' onSubmit={handleFormSubmit}>
        <div className='add-box'>
          <ul style={{marginBottom: '3rem'}}>
            <h3>Police Details</h3>
          </ul>

          <ul>
            <p>First Name</p>
            <input type='text' name='firstName' onChange={handleInputChange} value={formData.firstName} />
          </ul>

          <ul>
            <p>Middle Name</p>
            <input type='text' name='middleName' onChange={handleInputChange} value={formData.middleName} />
          </ul>

          <ul>
            <p>Last Name</p>
            <input type='text' name='lastName' onChange={handleInputChange} value={formData.lastName} />
          </ul>

          <ul>
            <p>Date of Birth</p>
            <input type='date' name='DOB' onChange={handleInputChange} value={formData.DOB} />
          </ul>

          <ul>
            <p>Age</p>
            <input type='text' name='age' onChange={handleInputChange} value={formData.age} />
          </ul>

          <ul>
            <p>Gender</p>
            <input type='text' name='gender' onChange={handleInputChange} value={formData.gender} />
          </ul>

          <ul>
            <p>Nationality</p>
            <input type='text' name='nationality' onChange={handleInputChange} value={formData.nationality} />
          </ul>

          <ul>
            <p>State</p>
            <input type='text' name='state' onChange={handleInputChange} value={formData.state} />
          </ul>

          <ul>
            <p>LGA</p>
            <input type='text' name='lga' onChange={handleInputChange} value={formData.lga} />
          </ul>

          <ul>
            <p>Town</p>
            <input type='text' name='town' onChange={handleInputChange} value={formData.town} />
          </ul>

          <ul>
            <p>Address</p>
            <input type='text' name='address' onChange={handleInputChange} value={formData.address} />
          </ul>

          <ul>
            <p>Marital Status</p>
            <input type='text' name='maritalStatus' onChange={handleInputChange} value={formData.maritalStatus} />
          </ul>

          <ul>
            <p>Height</p>
            <input type='text' name='height' onChange={handleInputChange} value={formData.height} />
          </ul>

          <ul>
            <p>Weight</p>
            <input type='text' name='weight' onChange={handleInputChange} value={formData.weight} />
          </ul>

          <ul>
            <p>Eye Color</p>
            <input type='text' name='eyeColor' onChange={handleInputChange} value={formData.eyeColor} />
          </ul>

          <ul>
            <p>Blood Group</p>
            <input type='text' name='bloodGroup' onChange={handleInputChange} value={formData.bloodGroup} />
          </ul>

          <ul>
            <p>Hair Color</p>
            <input type='text' name='haircolor' onChange={handleInputChange} value={formData.haircolor} />
          </ul>
        </div>


        <div className='add-box'>
          <ul style={{marginBottom: '3rem'} }>
            <h3>Contact Details</h3>
          </ul>

          <ul>
            <p>Email</p>
            <input type='email' name='email' onChange={handleInputChange} value={formData.email} />
          </ul>

          <ul>
            <p>Contact Line</p>
            <input type='text' name='contactLine' onChange={handleInputChange} value={formData.contactLine} />
          </ul>

          <ul>
            <p>Next of Kin</p>
            <input type='text' name='nextOfKin' onChange={handleInputChange} value={formData.nextOfKin} />
          </ul>

          <ul>
            <p>Next of Kin Contact</p>
            <input type='text' name='nextOfKinContact' onChange={handleInputChange} value={formData.nextOfKinContact} />
          </ul>

          <ul>
            <p>Next of Kin Address</p>
            <input type='text' name='nextOfKinAddress' onChange={handleInputChange} value={formData.nextOfKinAddress} />
          </ul>

          <ul style={{marginTop: '3rem'}}>
            <h3>More info</h3>
          </ul>

          <ul>
            <p>Police id </p>
            <input type='text' name='policeId' onChange={handleInputChange} value={formData.policeId} />
          </ul>

          <ul>
            <p>Appointment Date</p>
            <input type='date' name='appointmentDate' onChange={handleInputChange} value={formData.appointmentDate} />
          </ul>

          <ul>
            <p>Current Station</p>
            <input type='text' name='currentStation' onChange={handleInputChange} value={formData.currentStation} />
          </ul>

          <ul>
            <p>Police Rank</p>
            <input type='text' name='rank' onChange={handleInputChange} value={formData.rank} />
          </ul>

          
            {/* Finger Print */}
            <ul className='biometric'>
              <p>Finger Print</p>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => handleImageChange(e, 'fingerPrints')}
              />
              {/* Display the selected image */}
              {formData.fingerPrints && (
                <div className='inputImage'>

                  <img src={URL.createObjectURL(formData.fingerPrints)} alt='' />
                </div>
              )}
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
                <div className="inputImage">
                  
                <img src={URL.createObjectURL(formData.image)} alt='' />
                </div>
              )}
            </ul>
         
        </div>

        <button type='submit' className='addBtn'>Add Record</button>
      </form>

      {/* Success Popup */}
      {isSuccessPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Record Successfully Updated</h2>
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

