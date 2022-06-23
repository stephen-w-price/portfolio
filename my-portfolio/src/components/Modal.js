import './Modal.css'
import React from 'react'


export default function Modal({ handleClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
      <div className="right">
        <button  onClick={handleClose}>x</button>
      </div>
      
        <h2>Recent Projects</h2>
        <div className="project-container wrapper">
          
          <div>
            <a href="https://nacho-libre-game.herokuapp.com/">
              <h4>Nacho Libre: Fight Ramses</h4>
              <img alt="Nacho Libre Project"className="project-img" src="images/nacho.png"></img>
            </a>
          </div>
            
          <div>
            <a href="https://wilco-memory-game.herokuapp.com/">
              <h4>Wilco Memory Match</h4>
              <img alt="Wilco Memory Match" className="project-img" src="images/wilco.png"></img>
            </a>
          </div>

          <div>
            <a href="https://github.com/stephen-w-price/portfolio">
              <h4>Portfolio</h4>
              <img alt="Portfolio"className="project-img" src="images/Web.png"></img>
            </a>
          </div>
          
          
        </div>
        
      </div>
      
    </div>
  )
}
