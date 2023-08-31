
import React, { useEffect, useState } from 'react';

const AddCriminal = () => {
  const [isLoading, setIsLoading] = useState(true)

  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 3000)
  },[])

  const [formData, setFormData] = useState({
    // Initialize all your form data fields here
    firstname: '',
    age: '',
    Contactfirstname: '',
    Contactlastname: '',
    Contactmiddlename: '',
    contactaddress: '',
    middlename: '',
    maritalStatus: '',
    sentence: '',
    dateCommitted: '',
    dateConvicted: '',
    contactNumber: '',
    correctionalCenter: '',
    contactRelationship: '',
    contactLine: '',
    lastname: '',
    crime: '',
    address: '',
    DOB: '',
    occupation: '',
    gender: '',
    complexion: '',
    category: '',
    LGA: '',
    town: '',
    nationality: '',
    state: '',
    status: '',
    height: '',
    reportedBy: '',
    bloodGroup: '',
    weight: '',
    eyecolor: '',
    haircolor: '',
    frequency: '',
    fingerPrints: null,
    image: null,
  });

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
      const form = new FormData();
  
      // Append form data fields to FormData
      for (const key in formData) {
        if (formData[key]) {
          form.append(key, formData[key]);
        }
      }
  
      const response = await fetch('https://crime-xrrp.onrender.com/officers/addcriminal', {
        method: 'POST',
        body: form,
      });
  
      const data = await response.json();
      console.log('API Response:', data); // Add this line
      return data;
    } catch (error) {
      throw error;
    }
  };
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await postFormData();

      if (data) {
        console.log('Data posted successfully:', data);
        setSuccessPopupOpen(true);
        setErrorPopupOpen(false);

        // Reset form fields except for frequency, which was missing in the initial state
        setFormData({
          ...formData,
          firstname: '',
          age: '',
          Contactfirstname: '',
          Contactlastname: '',
          Contactmiddlename: '',
          contactaddress: '',
          middlename: '',
          maritalStatus: '',
          sentence: '',
          dateCommitted: '',
          dateConvicted: '',
          contactNumber: '',
          correctionalCenter: '',
          contactRelationship: '',
          contactLine: '',
          lastname: '',
          occupation: '',
          crime: '',
          complexion: '',
          address: '',
          DOB: '',
          gender: '',
          category: '',
          LGA: '',
          town: '',
          state: '',
          nationality: '',
          status: '',
          height: '',
          reportedBy: '',
          bloodGroup: '',
          weight: '',
          eyecolor: '',
          haircolor: '',
          frequency: '',
          fingerPrints: null,
          image: null,
        });

        console.log(setFormData);
      } else {
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
           <form className='add-container' onSubmit={handleFormSubmit}>
      <div className='add-box'>
          <ul style={{marginBottom: '3rem'}}>
            <h3>Criminal's Details</h3>
          </ul>

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
            <input type='text' name='LGA' onChange={handleInputChange} value={formData.LGA} />
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
            <p>Occupation</p>
            <input type='text' name='occupation' onChange={handleInputChange} value={formData.occupation} />
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
            <input type='text' name='eyecolor' onChange={handleInputChange} value={formData.eyecolor} />
          </ul>

          <ul>
            <p>Skin Color</p>
            <input type='text' name='complexion' onChange={handleInputChange} value={formData.complexion} />
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
            <h3>Crime Details</h3>
          </ul>

          <ul>
            <p>Crime Committed</p>
            <input type='text' name='crime' onChange={handleInputChange} value={formData.crime} />
          </ul>

          <ul>
            <p>Category</p>
            <input type='text' name='category' onChange={handleInputChange} value={formData.category} />
          </ul>

          <ul>
            <p>Crime Date</p>
            <input type='date' name='dateCommitted' onChange={handleInputChange} value={formData.dateCommitted} />
          </ul>

          <ul>
            <p>Date Convicted</p>
            <input type='date' name='dateConvicted' onChange={handleInputChange} value={formData.dateConvicted} />
          </ul>

          <ul>
            <p>Correctional Centre</p>
            <input type='text' name='correctionalCenter' onChange={handleInputChange} value={formData.correctionalCenter} />
          </ul>

          <ul>
            <p>Sentence</p>
            <input type='text' name='sentence' onChange={handleInputChange} value={formData.sentence} />
          </ul>

          <ul>
            <p>Status</p>
            <input type='text' name='status' onChange={handleInputChange} value={formData.status} />
          </ul>

          <ul>
            <p>Reported By</p>
            <input type='text' name='reportedBy' onChange={handleInputChange} value={formData.reportedBy} />
          </ul>

          <ul>
            <p>Frequency</p>
            <input type='text' name='frequency' onChange={handleInputChange} value={formData.frequency} />
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

          <ul style={{marginTop: '3rem'}}>
            <h3>Emergency Contact</h3>
          </ul>

          <ul>
            <p>First Name</p>
            <input type='text' name='Contactfirstname' onChange={handleInputChange} value={formData.Contactfirstname} />
          </ul>

          <ul>
            <p>Middle Name</p>
            <input type='text' name='Contactmiddlename' onChange={handleInputChange} value={formData.Contactmiddlename} />
          </ul>

          <ul>
            <p>Last Name</p>
            <input type='text' name='Contactlastname' onChange={handleInputChange} value={formData.Contactlastname} />
          </ul>

          <ul>
            <p>Contact Line</p>
            <input type='text' name='contactLine' onChange={handleInputChange} value={formData.contactLine} />
          </ul>

          <ul>
            <p>Address</p>
            <input type='text' name='contactaddress' onChange={handleInputChange} value={formData.contactaddress} />
          </ul>

          <ul>
            <p>Relationship</p>
            <input type='text' name='contactRelationship' onChange={handleInputChange} value={formData.contactRelationship} />
          </ul>

        
        </div>

        {/* ...submit button and popups */}
        <button type='submit' className='addBtn'>
          Add Record
        </button>
      </form>
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

export default AddCriminal;
