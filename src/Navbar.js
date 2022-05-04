import React, { useState } from "react"



function Navbar ({ setCurrentImage }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  const fetchImage = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => response.json()).then((data) => {
      setCurrentImage(data.message)
    })
}
  return navbarOpen ?(
    <nav className="navBar">
      <button onClick={handleToggle}>X</button>
      <ul>
      <li className="breed" name="pembroke" onClick={()=>fetchImage("pembroke")}>pembroke</li>
      <li className="breed" name="retriever" onClick={()=>fetchImage("retriever")}>Golden Retriever</li>
      <li className="breed" name="mountain" onClick={()=>fetchImage("mountain")}>Bernese Mountain Dog</li>
      <li className="breed" name="samoyed"onClick={()=>fetchImage("samoyed")}>Samoyed</li>
      </ul>
    </nav>
  ) : (<div onClick={handleToggle}>
  <button>SEE DOGS</button>
    </div>)

}

export default Navbar