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
    <div className="container contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon">
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