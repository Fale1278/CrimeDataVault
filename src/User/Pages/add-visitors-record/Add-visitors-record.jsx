import React, { useEffect, useState } from 'react';

const AddVisitor = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    Age:'',
    correctionalCenter:'',
    Nationality:'',
    visitPurpose:'',
    middlename:'',
    contactLine:'',
    maritalStatus:'',
    firstname: '',
    lastname: '',
    DOB:'',
    occupation:'',
    town:'',
    phoneNumber:'',
    state:'',
    gender:'',
    height:'',
    visitorAddress:'',
    eyecolor:'',
    weight:'',
    relationshipWithInmate:'',
    Frequency:'',
    bloodGroup:'',
    lastVisitDate:'',
    inmateVisited:'',
    LGA:'',
    haircolor:'',
    fingerPrints:null,
    image:null,
  });

  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },3000)
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e, type) =>{
    const selectedImage = e.target.files[0]
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: selectedImage,
    }))
  }

  const postFormData = async () => {
    try{
      const form = new FormData();

      for (const key in formData) {
        if(formData[key]){
          form.append(key, formData[key]);
        }
      }
      const response = await fetch ('https://crime-llpq.onrender.com/officers/addVisitor', {
        method: 'POST',
        body:form,
      });
      
      const data = await response.json();
      console.log('API Response:', data)
      return data;
    }catch(error){
      throw error;
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await postFormData();

      if (data) {
        console.log('Data posted successfully:', data);
        setSuccessPopupOpen(true);
        setErrorPopupOpen(false);
        // Optionally, you can reset the form after successful submission
        setFormData({
          ...formData,
          Age:'',
          correctionalCenter:'',
          Nationality:'',
          visitPurpose:'',
          middlename:'',
          contactLine:'',
          maritalStatus:'',
          firstname: '',
          lastname: '',
          DOB:'',
          occupation:'',
          town:'',
          phoneNumber:'',
          state:'',
          gender:'',
          height:'',
          visitorAddress:'',
          eyecolor:'',
          weight:'',
          relationshipWithInmate:'',
          Frequency:'',
          bloodGroup:'',
          lastVisitDate:'',
          inmateVisited:'',
          LGA:'',
          haircolor:'',
          fingerPrints:null,
          image:null,
        });

        console.log(setFormData)
      } else {
        setErrorPopupOpen(true);
        setSuccessPopupOpen(false);
      }
    } catch (error) {
      console.error('Error posting data:', error);
      console.log(setFormData)
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
      {isLoading? (
        <PreLoader2 />
      ): (
        <div>
          <p className='add-text'>Add a New Visitor record</p>
      <form className='add-container' onSubmit={handleFormSubmit}>
        <div className='add-box'>
          <ul style={{marginBottom: '3rem'}}>
            <h3>Visitor's Details</h3>
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
            <input type='text' name='Age' onChange={handleInputChange} value={formData.Age} />
          </ul>

          <ul>
            <p>Gender</p>
            <input type='text' name='gender' onChange={handleInputChange} value={formData.gender} />
          </ul>

          <ul>
            <p>Nationality</p>
            <input type='text' name='Nationality' onChange={handleInputChange} value={formData.Nationality} />
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
            <p>Eye Color</p>
            <input type='text' name='eyecolor' onChange={handleInputChange} value={formData.eyecolor} />
          </ul>

          <ul>
            <p>Blood Group</p>
            <input type='text' name='bloodGroup' onChange={handleInputChange} value={formData.bloodGroup} />
          </ul>

          <ul>
            <p>Hair Color</p>
            <input type='text' name='haircolor' onChange={handleInputChange} value={formData.haircolor} />
          </ul>

          <ul>
            <p>Weight</p>
            <input type='text' name='weight' onChange={handleInputChange} value={formData.weight} />
          </ul>
        </div>


        <div className='add-box'>
          <ul style={{marginBottom: '3rem'} }>
            <h3>Contact Details</h3>
          </ul>

          <ul>
            <p>Contact Line</p>
            <input type='text' name='contactLine' onChange={handleInputChange} value={formData.contactLine} />
          </ul>

          <ul>
            <p>Address</p>
            <input type='text' name='visitorAddress' onChange={handleInputChange} value={formData.visitorAddress} />
          </ul>

          <ul>
            <p>Relationship With inmate</p>
            <input type='text' name='relationshipWithInmate' onChange={handleInputChange} value={formData.relationshipWithInmate} />
          </ul>


          <ul>
            <p>Reported By</p>
            <input type='text' name='reportedBy' onChange={handleInputChange} value={formData.reportedBy} />
          </ul>

          <ul style={{marginTop: '3rem'}}>
            <h3>Visit Details</h3>
          </ul>

          <ul>
            <p>Purpose</p>
            <input type='text' name='visitPurpose' onChange={handleInputChange} value={formData.visitPurpose} />
          </ul>

          <ul>
            <p>Last Visit </p>
            <input type='date' name='lastVisitDate' onChange={handleInputChange} value={formData.lastVisitDate} />
          </ul>

          <ul>
            <p>Inmate Visited</p>
            <input type='text' name='inmateVisited' onChange={handleInputChange} value={formData.inmateVisited} />
          </ul>

          <ul>
            <p>Correctional Center</p>
            <input type='text' name='correctionalCenter' onChange={handleInputChange} value={formData.correctionalCenter} />
          </ul>

          <ul>
            <p>Frequency</p>
            <input type='text' name='Frequency' onChange={handleInputChange} value={formData.Frequency} />
          </ul>

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

export default AddVisitor;