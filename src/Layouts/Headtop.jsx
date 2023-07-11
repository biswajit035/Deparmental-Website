import React from 'react'
import Image from '../Assests/Hit.logo.png';
import { MdPhoneInTalk } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Headtop = ({handletoggle}) => {
  return (
    <div className='headtop-main'>
      <div className="humberger"><TiThMenu onClick={handletoggle}/></div>


        <Link to="/" className="logo" style={{ backgroundImage:`url(${Image})`}}>
        </Link>

        
      <div className="title">Information <span>Technology</span></div>
      <div className="contact">
        <div className="phone"><MdPhoneInTalk/><Link to="tel: +91 3224252900" className='contact-content'>(+913224)252900/255166</Link></div>
        <div className="email"><MdEmail/><Link to="mailto: admin@hithaldia.in" className='contact-content'>admin@hithaldia.in</Link></div>
      </div>
    </div>
  )
}

export default Headtop
