import React, { useState } from 'react';
import './style5.css'; 

function OwnedLand() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="container">
            <h1 className="heading">Owned Land</h1>
            <div className="box-container">
                <div className="box">
                    <img src={require('./img2.jpg')} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
                    <button className="btn" onClick={openModal}>Sell</button>
                </div>

                <div className="box">
                    <img src={require('./img3.jpg')} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
                    <button className="btn" onClick={openModal}>Sell</button>
                </div>
            </div>

            {modalOpen && (
                <div className="modal-overlay">
                    <dialog className="modal">
                        <i className="gg-close-o" onClick={closeModal} id="exitbtn"></i>
                        <h3>Sell your land!</h3>
                        <form>
                            <label htmlFor="">Price:</label>
                            <input type="number" placeholder="enter the price" required style={{ border: '1px solid black', borderRadius: '15px', padding: '10px 15px' }} />
                        </form>
                        <button className="btn2" onClick={closeModal}>Sell</button>
                    </dialog>
                </div>
            )}
        </div>
    );
}

export default OwnedLand;