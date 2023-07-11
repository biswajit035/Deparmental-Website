import React from 'react'
import { FadeLoader } from "react-spinners";


const Loader = () => {
  return (
      <div
          className="loading"
          style={{
            color: "green",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            height:"100%",
            width:"100%",
          }}
        >
          <FadeLoader
            color="rgba(25, 87, 182, 1)"
            height={14}
            radius={1}
            width={5}
          />
        </div>
  )
}

export default Loader
