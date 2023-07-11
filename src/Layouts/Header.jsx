import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ImSwitch } from 'react-icons/im';

const Header = ({handletoggle}) => {

  const handleLogout = () =>{
    localStorage.clear()
    window.location.reload();

  }
  return (
    <div className='header-main'>
      <div className="humberger">
        <FontAwesomeIcon icon={faBars} onClick={handletoggle}/>
      </div>
      <span className="title">Information Technology</span>
      <div className="logout-acc">
        <span className="user-name">{localStorage.getItem("username")}</span>
        <div className="logout-icon" onClick={handleLogout}><ImSwitch/></div>
        <button className='logout' onClick={handleLogout}><b>Logout</b> </button>
      </div>
    </div>
  )
}

export default Header
