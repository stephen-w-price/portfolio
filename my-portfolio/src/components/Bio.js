import React from 'react'

export default function Bio( { handleOpen }) {
  return (
    <div className="box2">
      <div className="bio-container">
        <h2 style= {{width: "100%"}}>About me</h2>
        <p style= {{width: "100%"}}>Hi I am a software developer with a career background in education, E-commerce, audio engineering and coffee. I enjoy designing applications with a simple and clean front-end, while maintaing back-end architecture that is efficient and reliable. In 2021, I had the great opportunity of taking General Assembly's software engineering emmersive. That experience affirmed my enthusiasm for creativity and the satisfaction of learning and problem solving. I am currently a software engineer intern at Konjo Tech - making Crypto and Blockchain simple.</p>
        <p style= {{width: "100%"}}>In my free time I enjoy playing wingspan with friends, sipping my morning coffee, and all things pertaining to music. Click <a href="javascript:void(0)" onClick={handleOpen} >here</a> to see some of my recent coding projects.</p>
        <div className="link-container">
          <a href="https://www.linkedin.com/in/stephenprice101/"><img alt="linkedin"className="links" src="/images/LinkedIn.png"></img></a>
          <a href="https://github.com/stephen-w-price" style= {{marginLeft: "15px"}}><img alt="github" className="links"src="/images/github.png"></img></a>
        </div>
      </div>
    </div>
  )
}
