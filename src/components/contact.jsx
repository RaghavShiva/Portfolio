import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
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
        <a href="#" target="_blank" className="items">
          <FaInstagram className='icons'/>
        </a>
        <a href="#" target="_blank" className="items">
          <FaFacebook className='icons'/>
        </a>
        <a href="#" target="_blank" className="items">
        <FaLinkedin className='icons'/>
        </a>
        <a href="#" target="_blank" className="items">
        <FaSquareXTwitter className='icons'/>
        </a>
        <a href="https://www.github.com" target="_blank" className="items">
          <FaGithubSquare className='icons'/>
          </a>
          <a href="mailto:mailid@gmail.com" target="_blank" className="items">
          <CgMail className='icons'/>
          </a>
      </div>
    </div>
    </>
  )
}

export default contact