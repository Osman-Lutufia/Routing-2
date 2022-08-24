import React from 'react'
import{Link} from"react-router-dom"

function Header() {
  return (
      <nav>
      <div>
        <ul>
        
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <link to="/contact">contact</link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="/produt">Product</Link>
          </li>
        
        
        
        </ul>
      </div>
      </nav>
      
  )
}

export default Header