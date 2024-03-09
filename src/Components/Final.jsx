import React from 'react'

const Final = () => {
    let showV = false
    const handleShow = ()=>{
        showV = true
    }
    setTimeout(handleShow, 10000);
      
  return (
    <Link to="/audio">
    <div>
      {showV ?  <p>done</p> : <p>jsdhkjs</p>}
    </div>
    </Link>
  )
}

export default Final
