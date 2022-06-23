import './App.css';
import { useState } from 'react'
import React from 'react'
import Image from './components/Image';
import Bio from './components/Bio';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleOpen = () => {
    setShowModal(true)
    console.log("Here")
    console.log(showModal)
  }
  
  const handleClose = () => {
    setShowModal(false)
    console.log("close")
  }
  return (
    <div className="wrapper">
      <Image />
      <Bio  showModal={showModal} handleClose={handleClose} handleOpen={handleOpen}>
        </Bio>
      {showModal && <Modal handleClose={handleClose}/>}
    </div>
  );
}

export default App;
