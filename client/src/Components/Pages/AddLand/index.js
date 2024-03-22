import React, { useState } from 'react';
import './style1.css';

function AddLand() {
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [price, setPrice] = useState('');
  const [pidNo, setPidNo] = useState('');
  const [physicalSurveyNo, setPhysicalSurveyNo] = useState('');
  const [landImage, setLandImage] = useState(null);
  const [aadharCard, setAadharCard] = useState(null);

  const handleLandImageChange = (e) => {
    const file = e.target.files[0];
    setLandImage(file);
  };

  const handleAadharCardChange = (e) => {
    const file = e.target.files[0];
    setAadharCard(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      area,
      city,
      state,
      price,
      pidNo,
      physicalSurveyNo,
      landImage,
      aadharCard,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Add Land</h2>
          <br></br>
          <label>
            Area:
            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            State:
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Price:
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            PID No:
            <input type="text" value={pidNo} onChange={(e) => setPidNo(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Physical Survey No:
            <input
              type="text"
              value={physicalSurveyNo}
              onChange={(e) => setPhysicalSurveyNo(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Insert Land Image:
            <input type="file" accept="image/*" onChange={handleLandImageChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Insert Aadhar Card:
            <input type="file" accept="image/*" onChange={handleAadharCardChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddLand;
