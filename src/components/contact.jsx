import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
      data-aos-duration = "1000">
        <a href="https://www.instagram.com/ragshiv04" target="_blank" className="items">
          <FaInstagram className='icons'/>
        </a>
        <a href="https://www.linkedin.com/in/shiva-raghav-96b94a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="items">
        <FaLinkedin className='icons'/>
        </a>
        <a href="https://x.com/raghav_shiva04" target="_blank" className="items">
        <FaSquareXTwitter className='icons'/>
        </a>
        <a href="https://github.com/RaghavShiva" target="_blank" className="items">
          <FaGithubSquare className='icons'/>
          </a>
          <a href="mailto:raghavshiva97.6@gmail.com" target="_blank" className="items">
          <CgMail className='icons'/>
          </a>
      </div>
    </div>
    </>
  )
}

export default contact