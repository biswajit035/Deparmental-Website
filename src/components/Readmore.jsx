import React,{useState} from 'react'

const Readmore = ({desc}) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div>
        <p className="text">
        {isReadMore ? desc.slice(0, 300) : desc}
      <span onClick={toggleReadMore} className="read-or-hide" style={{color:"blue", fontWeight:"600", cursor:"pointer", paddingLeft:"5px"}}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
    </div>
  )
}

export default Readmore
