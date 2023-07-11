import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import Loader from "../components/Loader";





const Society = (props) => {


  const host = process.env.REACT_APP_host;

  const [event, setevent] = useState([]);
  const [loading, setLoading] = useState(false);




  async function fetchdata() {
    setLoading(true);
    const response = await fetch(`${host}/api/event/fetch`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();
    setevent(json.response);
    setLoading(false);
  }

  const handleRemove = async (item) => {
    const response = await fetch(`${host}/api/event/delete/${item._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    if(response.status == 200){
        toast.success(json.msg)
      }
      else if(response.status == 400){
        toast.warning(json.msg)
      }
      else{
        toast.error(json.msg)
      }
    fetchdata();
  }

  useEffect(() => {
    fetchdata();
  }, [])

  return (
    <div className="society-main">
      <div className="add-society">
        <h3 className="title">{props.title}</h3>
        <Link to={props.link}><button className="add">
          <span className='btn-add'>{props.cata}</span>
        </button></Link>
      </div>
      {loading ? (
          <Loader />
        ) : (<>
       
      {event.map((item) => (
      <div className="event-list">
        <div className="title"><span>Title:</span>
          <div>{item.title}</div>
          <button className="delete-btn">
            <FontAwesomeIcon icon={faTrash} onClick={() => handleRemove(item)}/>
          </button>
        </div>
        <div className="desc"><span>Description:</span>
          <div>{item.desc}</div>
        </div>
        

        <hr />
      </div>
      ))}
       </>)}
    </div>
  )
}

export default Society
