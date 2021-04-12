import React, { useEffect } from 'react'
import {Nav,Item,NavDropdown,Navbar} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
const Navbarr = () => {
  const history = useHistory()

 const addProduct=(e)=>{
  e.preventDefault()
  history.push('/addProduct')
 }


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Assignment test</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <span style={{display:"flex",color:"white"}}>
          
        <Nav.Link href="/addProduct" style={{marginRight:"10px",color:"white"}}>Add Product</Nav.Link>
      </span>
      
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
  )
}

export default Navbarr
