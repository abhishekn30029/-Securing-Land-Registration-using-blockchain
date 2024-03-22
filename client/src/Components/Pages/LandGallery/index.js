import React, { useState } from 'react';
import './style3.css'; // Import your CSS file

const stateOptions = {
  "Andra Pradesh": ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"],
  "Arunachal Pradesh": ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"],
  // Add other states here
};

function LandGallery() {
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState([]);
  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setDistricts(stateOptions[state] || []);
  };

  return (
    <div className="container">
      <h2 className="heading">Land Gallery</h2>
      
      <div>
        <h3>Select Country State and City</h3>
        <form className='form1'>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State:</label>
            <select className="form-control" id="inputState" style={{ border: '1px solid black', padding: '7px 14px', borderRadius: '10px' }} onChange={handleStateChange}>
              <option value="">Select State</option>
              {Object.keys(stateOptions).map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputDistrict">District:</label>
            <select className="form-control" id="inputDistrict" style={{ border: '1px solid black', padding: '7px 14px', borderRadius: '10px' }}>
              <option value="">-- select one -- </option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </form>
      </div>

      <div className="box-container">
        <div className="box">
          <img src={require('./image/img1.jpg')} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
          <a href="#" className="btn">read more</a>
        </div>
        <div className="box">
          <img src={require('./image/img1.jpg')} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
          <a href="#" className="btn">read more</a>
        </div>
        {/* Add more boxes here */}
      </div>
    </div>
  );
}

export default LandGallery;